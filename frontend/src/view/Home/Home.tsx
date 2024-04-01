import React, {useState} from 'react';
import type {TableProps} from 'antd';
import {Space, Table} from 'antd';
import {Member} from "../../types";
import {useGetMemberListQuery} from "./home.generated";
import dayjs from "dayjs";

interface DataType extends Member {
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'ID',
        dataIndex: 'node',
        render: (node: Member) => <div>{node?.id}</div>,
    },
    {
        title: '名称',
        dataIndex: 'node',
        width: 200,
        render: (node: Member) => <div>{node?.name}</div>,
    },
    {
        title: '手机号',
        dataIndex: 'node',
        width: 130,
        render: (node: Member) => <a>{node?.phone}</a>,
    },
    {
        title: '备注',
        dataIndex: 'node',
        render: (node: Member) => <div>{node?.remark}</div>,
    },
    {
        title: '使用情况',
        dataIndex: 'node',
        render: (node: Member) => <div>{
            node?.member_shop_goods_usageCollection?.edges?.map((item: any, index) => {
                return (<div key={index}>
                    {index != 0 && (<hr/>)}
                    <span>{item?.node?.shop_goods?.name}：</span>
                    <a>{item?.node?.usage_count}</a>
                </div>)
            })
        }</div>,
    },
    {
        title: '创建时间',
        dataIndex: 'node',
        width: 120,
        align: 'center',
        render: (node: Member) => <div>{dayjs(node?.created_at).format('YYYY-MM-DD HH:mm:ss')}</div>,
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
    const {loading, error, data, fetchMore} = useGetMemberListQuery({
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


    if (loading) {
        return <div>loading</div>
    }
    if (error) {
        return <div>error</div>
    }
    if (data?.memberCollection?.edges) {
        return (
            <Table
                loading={tableLoading}
                // @ts-ignore
                columns={columns}
                dataSource={data?.memberCollection?.edges}
                rowKey={row => row?.node?.id}
                pagination={{
                    showTotal: total => `共 ${total} 条`,
                    pageSizeOptions: [pageInfo.pageSize],
                    total: data?.memberCollection?.totalCount,
                    pageSize: pageInfo.pageSize,
                    onChange: paginationChange
                }}
            />
        )
    }
    return <div>no data</div>
};

export default App;