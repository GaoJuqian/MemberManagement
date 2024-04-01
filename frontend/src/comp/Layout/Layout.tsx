import {InfoCircleFilled,} from '@ant-design/icons';
import type {ProSettings} from '@ant-design/pro-components';
import {ProConfigProvider, ProLayout, SettingDrawer,} from '@ant-design/pro-components';
import {ConfigProvider,} from 'antd';
import React, {createContext, useState} from 'react';
import defaultProps from './_defaultProps';
import {Outlet, useNavigate,} from "react-router-dom";

const PageContainerConfigDefault = {
    token: {paddingInlinePageContainerContent: 20},
    minHeight: '80vh'
}
export const PageContainerConfig = createContext(PageContainerConfigDefault);

export default () => {
    const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
        fixSiderbar: true,
        layout: 'mix',
        splitMenus: true,
    });

    const navigate = useNavigate();

    const [pathname, setPathname] = useState(window.location.pathname || '/welcome');
    if (typeof document === 'undefined') {
        return <div/>;
    }


    return (
        <div
            id="test-pro-layout"
            style={{
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <ProConfigProvider hashed={false}>
                <ConfigProvider
                    getTargetContainer={() => {
                        return document.getElementById('test-pro-layout') || document.body;
                    }}
                >
                    <ProLayout
                        prefixCls="my-prefix"
                        bgLayoutImgList={[
                            {
                                src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                                left: 85,
                                bottom: 100,
                                height: '303px',
                            },
                            {
                                src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                                bottom: -68,
                                right: -45,
                                height: '303px',
                            },
                            {
                                src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
                                bottom: 0,
                                left: 0,
                                width: '331px',
                            },
                        ]}
                        {...defaultProps}
                        location={{
                            pathname,
                        }}
                        token={{
                            header: {
                                colorBgMenuItemSelected: 'rgba(0,0,0,0.04)',
                            },
                        }}
                        siderMenuType="group"
                        menu={{
                            collapsedShowGroupTitle: true,
                        }}
                        avatarProps={{
                            src: '',
                            size: 'small',
                            title: '管理员',
                            // render: (props: any, dom: any) => {
                            //     return (
                            //         <Dropdown
                            //             menu={{
                            //                 items: [
                            //                     {
                            //                         key: 'logout',
                            //                         icon: <LogoutOutlined/>,
                            //                         label: '退出登录',
                            //                     },
                            //                 ],
                            //             }}
                            //         >
                            //             {dom}
                            //         </Dropdown>
                            //     );
                            // },
                        }}
                        actionsRender={(props: any) => {
                            if (props.isMobile) return [];
                            if (typeof window === 'undefined') return [];
                            return [
                                <InfoCircleFilled key="InfoCircleFilled"/>,
                            ];
                        }}
                        headerTitleRender={(logo: any, title: any, _: any) => {
                            const defaultDom = (
                                <a>
                                    {logo}
                                    {title}
                                </a>
                            );
                            if (typeof window === 'undefined') return defaultDom;
                            if (document.body.clientWidth < 1400) {
                                return defaultDom;
                            }
                            if (_.isMobile) return defaultDom;
                            return (
                                <>
                                    {defaultDom}
                                </>
                            );
                        }}
                        menuFooterRender={(props: any) => {
                            if (props?.collapsed) return undefined;
                            return (
                                <div
                                    style={{
                                        textAlign: 'center',
                                        paddingBlockStart: 12,
                                    }}
                                >
                                    <div>© 2021 Made with love</div>
                                    <div>by Ant Design</div>
                                </div>
                            );
                        }}
                        onMenuHeaderClick={(e: any) => console.log(e)}
                        menuItemRender={(item: any, dom: any) => (
                            <div
                                onClick={() => {
                                    setPathname(item.path || '/welcome');
                                    navigate(item.path);
                                }}
                            >
                                {dom}
                            </div>
                        )}
                        {...settings}
                    >
                        <PageContainerConfig.Provider value={PageContainerConfigDefault}>
                            <Outlet/>
                        </PageContainerConfig.Provider>
                        <SettingDrawer
                            pathname={pathname}
                            enableDarkTheme
                            getContainer={(e: any) => {
                                if (typeof window === 'undefined') return e;
                                return document.getElementById('test-pro-layout');
                            }}
                            settings={settings}
                            onSettingChange={(changeSetting: any) => {
                                setSetting(changeSetting);
                            }}
                            disableUrlParams={false}
                        />
                    </ProLayout>
                </ConfigProvider>
            </ProConfigProvider>
        </div>
    );
};