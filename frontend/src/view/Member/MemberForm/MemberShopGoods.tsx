import {DrawerForm, ProFormDigit, ProFormSelect,} from '@ant-design/pro-components';
import {Form} from 'antd';
import {useEffect, useState} from "react";
import {useGetShopGoodsListAllQuery} from "../../ShopGoods/shopGoods.generated";

interface props {
    visit: boolean;
    setVisit?: (value: boolean) => void;
    formData: any,
    handleOK: (value: any) => void
}

const initFormData = {
    shopGoodsId: undefined,
    usageCount: 0
}


const MemberShopGoodsForm = ({visit, setVisit, formData, handleOK}: props) => {

    // 商品数据
    const {loading, data} = useGetShopGoodsListAllQuery();
    const [shopGoodsOptions, setShopGoodsOptions] = useState<any>([]);
    useEffect(() => {
        setShopGoodsOptions(data?.shopGoodsCollection?.edges.map((item: any) => {
            return {
                label: item.node.name,
                value: item.node.id
            }
        }))
    }, [data]);

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
        if (fieldsValue.shopGoods) {
            fieldsValue.shopGoods.name = shopGoodsOptions.find((item: any) => item.value === fieldsValue.shopGoodsId)?.label;
        } else {
            fieldsValue.shopGoods = {
                name: shopGoodsOptions.find((item: any) => item.value === fieldsValue.shopGoodsId)?.label
            }
        }
        try {
            const data = {
                ...fieldsValue,
            }
            handleOK({data})
            return true;
        } catch (e) {
        }

    }


    return (
        <>
            <DrawerForm
                title="商品信息"
                open={visit}
                form={form}
                drawerProps={{
                    maskClosable: false,
                }}
                onOpenChange={setVisit}
                onFinish={finish}
                loading={loading}
                width={300}
            >
                <ProFormSelect
                    options={shopGoodsOptions}
                    name="shopGoodsId"
                    label="选择商品"
                    placeholder="请选择商品"
                    rules={[{required: true, message: '请选择商品'}]}
                />
                <ProFormDigit
                    label="使用次数"
                    placeholder="请输入使用次数"
                    name="usageCount"
                    fieldProps={{precision: 0}}
                    rules={[{required: true, message: '请输入使用次数'}]}
                />

            </DrawerForm>
        </>
    );
};

export default MemberShopGoodsForm