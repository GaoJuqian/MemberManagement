import {SmileFilled,} from '@ant-design/icons';
import Home from "../../view/Home/Home";
import Member from "../../view/Member/Member";
import Layout from "./Layout";
import ShopGoods from "../../view/ShopGoods/ShopGoods";

export const route = {
    path: '/',
    element: <Layout/>,
    children: [
        {
            path: '/',
            name: '欢迎',
            icon: <SmileFilled/>,
            element: <Home/>,
        },
        {
            path: '/memberManagement',
            name: '会员管理',
            icon: <SmileFilled/>,
            element: <Member/>,
        },
        {
            path: '/shopGoodsManagement',
            name: '商品管理',
            icon: <SmileFilled/>,
            element: <ShopGoods/>,
        }
    ],
};


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