import {SmileFilled,} from '@ant-design/icons';
import Home from "../../view/Home/Home";
import Member from "../../view/Member/Member";
import Layout from "./Layout";
import ShopGoods from "../../view/ShopGoods/ShopGoods";
import DengLu from "../../view/DengLu/DengLu";
import {supabase} from "../../api/supabase";
import {useEffect, useState} from "react";

export const route = {
    path: '/',
    children: [
        {
            path: '/',
            element: <DengLu/>,
        },
        {
            path: '/man',
            element: <Layout/>,
            children: [
                {
                    path: '/man/',
                    name: '欢迎',
                    icon: <SmileFilled/>,
                    element: <Home/>,
                },
                {
                    path: '/man/memberManagement',
                    name: '会员管理',
                    icon: <SmileFilled/>,
                    element: <Member/>,
                },
                {
                    path: '/man/shopGoodsManagement',
                    name: '商品管理',
                    icon: <SmileFilled/>,
                    element: <ShopGoods/>,
                }
            ]
        },
    ],
};

// 当前是否已经登录
export function useIsLogin() {
    const [tk, setTk] = useState<string>();

    async function isLogin() {
        try {
            const token = (await supabase.auth.getSession()).data.session?.access_token
            setTk(token || 'no')
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        isLogin()
    }, []);

    return {tk}
}

export default {
    route,
    location: {
        pathname: '/',
    },
    appList: [
        // {
        //     icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        //     title: 'Ant Design',
        //     desc: '杭州市较知名的 UI 设计语言',
        //     url: 'https://ant.design',
        // },
    ],
};