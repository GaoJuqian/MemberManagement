import React, {useContext} from 'react';
import {PageContainer, PageContainerProps, ProCard} from "@ant-design/pro-components";
import {PageContainerConfig} from "./Layout";

interface Props {
    children: React.ReactNode;
    pageContainerConf?: PageContainerProps;
}

const App: React.FC<Props> = ({children, pageContainerConf}) => {

    const pageContainer = useContext(PageContainerConfig);
    return (
        <PageContainer
            token={pageContainer.token}
            {...pageContainerConf}
        >
            <ProCard
                style={{minHeight: pageContainer.minHeight}}>
                {children}
            </ProCard>
        </PageContainer>
    )
};

export default App;