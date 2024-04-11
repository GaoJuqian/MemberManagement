import {
    DrawerForm,
    ProForm,
    ProFormDateTimePicker,
    ProFormSelect,
    ProFormText,
    ProFormTextArea,
} from '@ant-design/pro-components';
import {Button, Form, message, Table} from 'antd';
import React, {useEffect, useState} from "react";
import {
    useGetMemberShopGoodsUsageLazyQuery,
    useInsertIntoMemberMutation,
    useUpdateMemberMutation
} from "../member.generated";
import MemberShopGoodsForm from "./MemberShopGoods";

interface props {
    visit: boolean;
    setVisit?: (value: boolean) => void;
    formData: any;
    handleOK: () => void;
    actionSet: 'info' | 'goods';
}

const initFormData = {
    name: '',
    phone: undefined,
    operator: '',
    status: 1,
    remark: '',
    createdAt: new Date(),
}

const statusOptions = [
    {value: 1, label: '生效中'},
    {value: 0, label: '已失效'}
]


const MemberForm: React.FC<props> = ({visit, setVisit, formData, handleOK, actionSet}: props) => {

    const [messageApi, contextHolder] = message.useMessage();
    const [actionType, setActionType] = useState<'add' | 'edit'>('add');

    // 商品
    const [shopGoodsVisit, setShopGoodsVisit] = useState(false);
    const [memberShopGoodsUsageCollection, setMemberShopGoodsUsageCollection] = useState<any>([]);
    const [shopGoodsFormData, setShopGoodsFormData] = useState<any>(null);


    // 会员表单
    const [form] = Form.useForm<any>();
    const [getMemberShopGoodsUsage, memberShopGoodsUsageResult] = useGetMemberShopGoodsUsageLazyQuery({
        fetchPolicy: 'network-only',
        variables: {
            filter: {
                memberId: {
                    eq: formData?.id
                }
            }
        }
    });
    const [insertIntoMember, insertIntoMemberResult] = useInsertIntoMemberMutation();
    const [updateMember, updateMemberResult] = useUpdateMemberMutation();
    useEffect(() => {
        if (formData) {
            setActionType('edit');
            form.setFieldsValue(formData);
            if (formData?.id) {
                getMemberShopGoodsUsage().then(resp => {
                    setMemberShopGoodsUsageCollection(resp.data?.memberShopGoodsUsageCollection?.edges)
                }).catch(err => {
                    messageApi.error(err || '获取商品失败')
                })
            }
        } else {
            setActionType('add');
            form.setFieldsValue(initFormData)
        }
    }, [formData]);
    const shopGoodsHandleOK = () => {
        memberShopGoodsUsageResult.refetch().then(resp => {
            setMemberShopGoodsUsageCollection(resp.data?.memberShopGoodsUsageCollection?.edges)
        }).catch(err => {
            messageApi.error(err || '获取商品失败')
        })
    }

    const finish = async () => {
        const fieldsValue = await form.validateFields();
        try {
            // 用户商品
            if (actionSet === 'goods') {
            }
            // 用户信息
            if (actionSet === 'info') {
                if (actionType === 'add') {
                    const res = await insertIntoMember({
                        variables: {
                            input: {
                                ...fieldsValue
                            }
                        }
                    })
                }
                // 编辑
                if (actionType === 'edit') {
                    const memberId = formData.id;
                    // 编辑用户信息
                    const res = await updateMember({
                        variables: {
                            filter: {
                                id: {
                                    eq: memberId
                                }
                            },
                            input: {...fieldsValue}
                        }
                    })
                    messageApi.success('提交成功');
                }
            }
            handleOK();
            return true;
        } catch (e) {
            const err = insertIntoMemberResult?.error?.message
                || updateMemberResult?.error?.message
                || '提交失败';
            messageApi.error(err);
        }

    }


    return (
        <>
            {contextHolder}
            <DrawerForm
                title="会员信息"
                open={visit}
                form={form}
                drawerProps={{
                    maskClosable: false
                }}
                onOpenChange={setVisit}
                onFinish={finish}
                loading={
                    insertIntoMemberResult.loading
                    || updateMemberResult.loading
                }
            >
                <ProForm.Group>
                    <ProFormText
                        width="md"
                        name="name"
                        label="名称"
                        tooltip="名称"
                        placeholder="请输入名称"
                        rules={[{required: true}]}
                        disabled={actionSet === 'goods'}
                    />
                    <ProFormText
                        width="md"
                        name="phone"
                        label="手机号"
                        rules={[{
                            required: false, validator: async (rule, value) => {
                                if (value) {
                                    // 判断是否都是数字
                                    if (!/^[0-9]*$/.test(value)) {
                                        return Promise.reject('请输入正确的手机号')
                                    }
                                }
                            }
                        }]}
                        placeholder="请输入手机号"
                        disabled={actionSet === 'goods'}
                    />
                </ProForm.Group>
                {
                    // 信息
                    actionSet === 'info' && (<>
                        <ProForm.Group>
                            <ProFormText
                                width="md"
                                name="operator"
                                label="经办人"
                                placeholder="请输入经办人"
                            />
                            <ProFormSelect
                                width="md"
                                options={statusOptions}
                                name="status"
                                label="生效状态"
                            />
                        </ProForm.Group>
                        <ProFormDateTimePicker
                            width="md"
                            name="createdAt"
                            label="日期"
                            placeholder="请选择日期"
                            dataFormat={'YYYY-MM-DD HH:mm:ss'}
                        />
                        <ProFormTextArea
                            name="remark"
                            label="备注"
                            placeholder="请输入备注"
                        />
                    </>)
                }
                {
                    // 商品
                    actionSet === 'goods' && (<>
                        <div className="flex align-middle justify-between">
                            <h3>商品列表</h3>
                            <Button type="primary"
                                    onClick={() => {
                                        setShopGoodsFormData(null)
                                        setShopGoodsVisit(true)
                                    }}>添加商品</Button>
                        </div>
                        <Table
                            loading={memberShopGoodsUsageResult.loading}
                            dataSource={memberShopGoodsUsageCollection}
                            rowKey={(record) => record.node.shopGoodsId}
                            columns={[
                                {
                                    title: '商品名称',
                                    dataIndex: 'node',
                                    render: (node: any) => <div>{node?.shopGoods?.name}</div>,
                                },
                                {
                                    title: '使用次数',
                                    dataIndex: 'node',
                                    render: (node: any) => <div>{node?.usageCount}</div>,
                                },
                                {
                                    title: '操作',
                                    key: 'action',
                                    width: 100,
                                    align: 'center',
                                    render: (_, record) => (
                                        <Button onClick={() => {
                                            setShopGoodsFormData(record.node)
                                            setShopGoodsVisit(true)
                                        }}>编辑</Button>
                                    ),
                                }
                            ]}
                        />
                    </>)
                }

                {
                    // 商品弹窗
                    shopGoodsVisit &&
                    <MemberShopGoodsForm
                        visit={shopGoodsVisit}
                        setVisit={setShopGoodsVisit}
                        formData={shopGoodsFormData}
                        handleOK={shopGoodsHandleOK}
                        memberShopGoodsUsageCollection={memberShopGoodsUsageCollection}/>
                }

            </DrawerForm>
        </>
    );
};

export default MemberForm