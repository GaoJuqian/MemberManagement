import {DrawerForm, ProFormDigit, ProFormRadio, ProFormSelect, ProFormTextArea,} from '@ant-design/pro-components';
import {Form, message} from 'antd';
import React, {useEffect, useState} from "react";
import {
    useGetShopGoodsListAllQuery,
    useInsertIntoMemberShopGoodsUsageMutation,
    useUpdateMemberShopGoodsUsageMutation
} from "../../ShopGoods/shopGoods.generated";

interface props {
    visit: boolean;
    setVisit?: (value: boolean) => void;
    formData: any,
    handleOK: () => void
    memberShopGoodsUsageCollection?: any
}

const initFormData = {
    shopGoodsId: undefined,
    usageCount: 0,
    operation: '',
    modifyCount: undefined,
    remark: '',
    modifyRemark: '',
}


const MemberShopGoodsForm = ({visit, setVisit, formData, handleOK, memberShopGoodsUsageCollection}: props) => {

    const [messageApi, contextHolder] = message.useMessage();

    // 商品数据
    const {loading, data} = useGetShopGoodsListAllQuery();
    const [shopGoodsOptions, setShopGoodsOptions] = useState<any>([]);
    useEffect(() => {
        // 不可选中已有商品
        setShopGoodsOptions(data?.shopGoodsCollection?.edges.map((item: any) => {
            const edges = memberShopGoodsUsageCollection || [];
            const hasItem = edges.find((fItem: any) => fItem.node.shopGoodsId === item.node.id);
            return {
                label: item.node.name,
                value: item.node.id,
                disabled: !!hasItem
            }
        }))
    }, [data]);

    // 表单数据
    const [actionType, setActionType] = useState<'add' | 'edit'>('add');
    const [form] = Form.useForm<any>();
    const operation = Form.useWatch("operation", form);
    const [insertIntoMemberShopGoodsUsage, insertIntoMemberShopGoodsUsageResult] = useInsertIntoMemberShopGoodsUsageMutation();
    const [updateMemberShopGoodsUsage, updateMemberShopGoodsUsageResult] = useUpdateMemberShopGoodsUsageMutation();

    useEffect(() => {
        if (formData?.id) {
            setActionType('edit')
            form.setFieldsValue(formData)
        } else {
            setActionType('add')
            form.setFieldsValue({
                ...initFormData,
                memberId: formData?.memberId
            })
        }
    }, [formData]);


    // 编辑用户商品
    const handleGoodsShop = async (data: any) => {
        const memberShopGoodsUsageId = formData?.id;
        const memberId = formData.memberId;
        const createdAt = new Date();
        // 操作次数
        let usageCount;
        if (data.operation === 'add') {
            usageCount = Number(data.usageCount) + Number(data.modifyCount);
        }
        if (data.operation === 'subtract') {
            usageCount = Number(data.usageCount) - Number(data.modifyCount);
        }
        const set = {
            shopGoodsId: data.shopGoodsId,
            memberId: memberId,
            usageCount: usageCount,
            remark: data.remark
        }

        if (actionType === 'edit') {
            // 修改商品
            const res = await updateMemberShopGoodsUsage({
                variables: {
                    filter: {
                        id: {
                            eq: memberShopGoodsUsageId
                        }
                    },
                    input: set
                }
            })
        } else {
            // 新增商品
            const res = await insertIntoMemberShopGoodsUsage({
                variables: {
                    input: {
                        ...set,
                        createdAt
                    }
                }
            })
        }
    }

    const finish = async () => {
        const fieldsValue = await form.validateFields();
        try {
            await handleGoodsShop({
                ...fieldsValue,
            });
            handleOK()
            messageApi.success('提交成功');
            return true;
        } catch (e: any) {
            const err = insertIntoMemberShopGoodsUsageResult?.error?.message
                || updateMemberShopGoodsUsageResult?.error?.message
                || (e && String(e))
                || '提交失败';
            messageApi.error(err);
        }

    }


    return (
        <>
            {contextHolder}
            <DrawerForm
                title="商品信息"
                open={visit}
                form={form}
                drawerProps={{
                    maskClosable: false,
                }}
                onOpenChange={setVisit}
                onFinish={finish}
                loading={loading
                    || insertIntoMemberShopGoodsUsageResult.loading
                    || updateMemberShopGoodsUsageResult.loading}
                width={300}
            >
                <ProFormSelect
                    options={shopGoodsOptions}
                    name="shopGoodsId"
                    label="选择商品"
                    placeholder="请选择商品"
                    disabled={formData?.id}
                    rules={[{required: true, message: '请选择商品'}]}
                />
                <ProFormDigit
                    label="已有次数"
                    placeholder="请输入使用次数"
                    name="usageCount"
                    fieldProps={{precision: 0}}
                    rules={[{required: true, message: '请输入使用次数'}]}
                    disabled={true}
                />
                <ProFormTextArea
                    name="remark"
                    label="商品备注"
                    placeholder="请输入商品备注"
                />
                <ProFormRadio.Group
                    name="operation"
                    label="操作类型"
                    rules={[{required: true, message: '请选择操作类型'}]}
                    radioType="button"
                    options={[
                        {
                            label: '添加',
                            value: 'add',
                        },
                        {
                            label: '减少',
                            value: 'subtract',
                        },
                    ]}
                />
                {operation && (<>
                    <ProFormDigit
                        label={operation === 'add' ? '添加次数' : '减少次数'}
                        placeholder="请输入次数"
                        name="modifyCount"
                        fieldProps={{precision: 0}}
                        rules={[{required: true, message: '请输入次数'}]}
                    />
                    <ProFormTextArea
                        name="modifyRemark"
                        label="操作备注"
                        placeholder="请输入操作备注"
                    />
                    </>)}

            </DrawerForm>
        </>
    );
};

export default MemberShopGoodsForm