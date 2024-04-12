import {DrawerForm, ProFormText, ProFormTextArea,} from '@ant-design/pro-components';
import {Form, message} from 'antd';
import React, {useEffect} from "react";
import {useInsertIntoShopGoodsMutation, useUpdateShopGoodsMutation} from "../shopGoods.generated";

interface props {
    visit: boolean;
    setVisit?: (value: boolean) => void;
    formData: any,
    handleOK: () => void
}

const initFormData = {
    name: '',
    remark: '',
}


const MemberShopGoodsForm = ({visit, setVisit, formData, handleOK}: props) => {

    const [messageApi, contextHolder] = message.useMessage();

    const [insertIntoShopGoods, insertIntoShopGoodsResult] = useInsertIntoShopGoodsMutation();
    const [updateShopGoods, updateShopGoodsResult] = useUpdateShopGoodsMutation();
    // 表单数据
    const [form] = Form.useForm<any>();
    useEffect(() => {
        if (formData) {
            form.setFieldsValue(formData)
        } else {
            form.setFieldsValue(initFormData)
        }
    }, [formData]);

    const finish = async () => {
        const fieldsValue = await form.validateFields();
        try {
            const data = {
                ...fieldsValue,
            }
            if (formData?.id) {
                // 更新
                const res = await updateShopGoods({
                    variables: {
                        filter: {
                            id: {
                                eq: formData.id
                            }
                        },
                        input: data
                    }
                })
                if (res?.data?.updateShopGoodsCollection?.affectedCount == 0) {
                    throw '保存失败,更新0条数据';
                }
            } else {
                // 插入
                const res = await insertIntoShopGoods({
                    variables: {
                        input: {
                            ...data,
                            createdAt: new Date()
                        }
                    }
                })
                if (res?.data?.insertIntoShopGoodsCollection?.affectedCount == 0) {
                    throw '保存失败,插入0条数据';
                }
            }
            handleOK()
            return true;
        } catch (e: any) {
            const err = insertIntoShopGoodsResult?.error?.message
                || updateShopGoodsResult?.error?.message
                || (e && String(e))
                || "保存失败";
            messageApi.error(err)
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
                loading={insertIntoShopGoodsResult.loading
                    || updateShopGoodsResult.loading}
                width={300}
            >
                <ProFormText
                    label="商品名称"
                    placeholder="请输入商品名称"
                    name="name"
                    rules={[{required: true, message: '请输入商品名称'}]}
                />
                <ProFormTextArea
                    name="remark"
                    label="备注"
                    placeholder="请输入备注"
                />
            </DrawerForm>
        </>
    );
};

export default MemberShopGoodsForm