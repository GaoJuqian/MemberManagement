import {DrawerForm, ProForm, ProFormDateRangePicker, ProFormSelect, ProFormText,} from '@ant-design/pro-components';
import {Form, message} from 'antd';
import {Member} from "../../../types";
import {useEffect} from "react";

interface props {
    visit: boolean;
    setVisit?: (value: boolean) => void;
    formData: any
}

const initFormData = {
    name: '',
    phone: '',
    remark: '',
    member_shop_goods_usageCollection: [],
    created_at: '',
    updated_at: ''
}

const MemberForm = ({visit, setVisit, formData}: props) => {

    const [form] = Form.useForm<any>();

    useEffect(() => {
        if (formData) {
            form.setFieldsValue(formData)
        } else {
            form.setFieldsValue(initFormData)
        }
    }, [formData]);


    return (
        <>
            <DrawerForm
                title="新建表单"
                open={visit}
                form={form}
                drawerProps={{
                    maskClosable: false
                }}
                onOpenChange={setVisit}
                onFinish={async () => {
                    message.success('提交成功');
                    return true;
                }}
            >
                <ProForm.Group>
                    <ProFormText
                        width="md"
                        name="name"
                        label="签约客户名称"
                        tooltip="最长为 24 位"
                        placeholder="请输入名称"
                    />

                    <ProFormText
                        width="md"
                        name="company"
                        label="我方公司名称"
                        placeholder="请输入名称"
                    />
                </ProForm.Group>
                <ProForm.Group>
                    <ProFormText
                        width="md"
                        name="contract"
                        label="合同名称"
                        placeholder="请输入名称"
                    />
                    <ProFormDateRangePicker name="contractTime" label="合同生效时间"/>
                </ProForm.Group>
                <ProForm.Group>
                    <ProFormSelect
                        options={[
                            {
                                value: 'chapter',
                                label: '盖章后生效',
                            },
                        ]}
                        width="xs"
                        name="useMode"
                        label="合同约定生效方式"
                    />
                    <ProFormSelect
                        width="xs"
                        options={[
                            {
                                value: 'time',
                                label: '履行完终止',
                            },
                        ]}
                        name="unusedMode"
                        label="合同约定失效效方式"
                    />
                </ProForm.Group>
                <ProFormText width="sm" name="id" label="主合同编号"/>
                <ProFormText
                    name="project"
                    disabled
                    label="项目名称"
                    initialValue="xxxx项目"
                />
                <ProFormText
                    width="xs"
                    name="mangerName"
                    disabled
                    label="商务经理"
                    initialValue="启途"
                />
            </DrawerForm>
        </>
    );
};

export default MemberForm