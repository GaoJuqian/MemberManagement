import React from 'react';
import type {TableProps} from 'antd';
import {Space, Table} from 'antd';
import {Member} from "../../types";
import {useGetMemberListQuery} from "./home.generated";

interface DataType extends Member{
    key: React.Key;
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: '名称',
        dataIndex: 'node',
        render: (node) => <a>{node?.name}</a>,
    },
    {
        title: '手机号',
        dataIndex: 'node',
        render: (node) => <a>{node?.phone}</a>,
    },
    {
        title: '备注',
        dataIndex: 'node',
        render: (node) => <a>{node?.remark}</a>,
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const App: React.FC = () => {
    const {loading, error, data} = useGetMemberListQuery()
    if (loading) {
        return <div>loading</div>
    }
    if (error) {
        return <div>error</div>
    }
    if (data?.memberCollection?.edges) {
        return <Table columns={columns} dataSource={data?.memberCollection?.edges} rowKey={row => row?.node?.id}/>
    }
    return <div>no data</div>
};

export default App;