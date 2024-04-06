import React, {useEffect, useState} from 'react';
import {Button, Form, Input, message, Space, Spin} from "antd";
import {ProCard} from "@ant-design/pro-components";
import {supabase} from "../../api/supabase";
import {useIsLogin} from "../../comp/Layout/_defaultProps";
import {useNavigate} from "react-router-dom";


const App: React.FC = () => {
    // 是否已经登录
    const {tk} = useIsLogin();

    const [msg, msgctx] = message.useMessage();
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    // 进入时 -> 是否已经登录
    const navigate = useNavigate();
    useEffect(() => {
        tk && tk !== 'no' && navigate('/man');
    }, [tk]);


    const lgin = async () => {
        // 验证表单
        await form.validateFields()

        try {
            setLoading(true)
            const {username, password} = form.getFieldsValue()
            let {data, error} = await supabase.auth.signInWithPassword({
                email: username,
                password: password
            })
            if (error) {
                msg.error(error.message)
            }
            if (data?.session) {
                msg.success('登录成功')
                navigate('/man')
            }
            setLoading(false)
        } catch (e: any) {
            setLoading(false)
            msg.error(e.message)
        }
    }

    const reset = () => {
        form.resetFields()
    }


    return (
        <div className="w-lvw h-lvh flex items-center justify-center bg-white">
            {msgctx}
            <ProCard
                title="登录"
                extra=""
                tooltip=""
                style={{maxWidth: '36%'}}
                boxShadow
            >
                <Spin spinning={loading}>
                    <Form form={form}
                          size={'large'}
                          labelCol={{span: 4}}>
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[{required: true, message: '请输入用户名!'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[{required: true, message: '请输入密码!'}]}
                        >
                            <Input.Password onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    lgin()
                                }
                            }}/>
                        </Form.Item>
                        <Form.Item>
                            <Space className="flex justify-end">
                                <Button type="default" block size="large" onClick={reset}>重置</Button>
                                <Button type="primary" block size="large" onClick={lgin}>登录</Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Spin>
            </ProCard>

        </div>
    )
};

export default App;