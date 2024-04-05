import React, {useState} from 'react';
import {Button, Space, Table, TableProps} from 'antd';
import {Member} from "../../types";
import {useGetShopGoodsListQuery} from "./shopGoods.generated";
import dayjs from "dayjs";
import PageCont from "../../comp/Layout/PageCont";

interface DataType extends Member {
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'ID',
        dataIndex: 'node',
        width: 120,
        render: (node: Member) => <div>{node?.id}</div>,
    },
    {
        title: '名称',
        dataIndex: 'node',
        width: 200,
        render: (node: Member) => <div>{node?.name}</div>,
    },
    {
        title: '备注',
        dataIndex: 'node',
        render: (node: Member) => <div>{node?.remark}</div>,
    },
    {
        title: '创建时间',
        dataIndex: 'node',
        width: 120,
        align: 'center',
        render: (node: Member) => <div>{dayjs(node?.createdAt).format('YYYY-MM-DD HH:mm:ss')}</div>,
    },
    {
        title: '操作',
        key: 'action',
        align: 'center',
        render: (_, record) => (
            <Space size="middle">
                <a>修改</a>
            </Space>
        ),
    },
];

const App: React.FC = () => {

    const [pageInfo, setPageInfo] = useState({
        page: 1,
        pageSize: 100
    })
    const [tableLoading, setTableLoading] = useState(false)
    const {loading, error, data, fetchMore} = useGetShopGoodsListQuery({
        variables: {
            first: pageInfo.pageSize,
        },
    })

    const paginationChange = (page: number, pageSize: number) => {
        setPageInfo({
            page: page,
            pageSize: pageSize
        })
        setTableLoading(true)
        fetchMore({
            variables: {
                offset: (page - 1) * pageSize,
                first: pageSize,
            },
        }).finally(() => {
            setTableLoading(false)
        })
    }

    if (error) {
        return <div>error</div>
    }

    return <PageCont pageContainerConf={{
        title: '欢迎',
        extra: [
            <Button key="3">你好</Button>
        ],
    }}>
        <Table
            loading={loading || tableLoading}
            // @ts-ignore
            columns={columns}
            scroll={{y: 'calc(100vh - 300px)'}}
            dataSource={data?.shopGoodsCollection?.edges}
            rowKey={row => row?.node?.id}
            pagination={{
                showTotal: total => `共 ${total} 条`,
                pageSizeOptions: [pageInfo.pageSize],
                total: data?.shopGoodsCollection?.totalCount,
                pageSize: pageInfo.pageSize,
                onChange: paginationChange
            }}
        />
    </PageCont>
};

export default App;