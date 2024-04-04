import React, {useState} from 'react';
import {Button, Space, Table, TableProps} from 'antd';
import {Member, MemberEdge} from "../../types";
import {useGetMemberListQuery} from "./member.generated";
import dayjs from "dayjs";
import PageCont from "../../comp/Layout/PageCont";
import {PlusOutlined} from "@ant-design/icons";
import MemberForm from "./MemberForm/MemberForm";

interface DataType extends Member {
}

const MemberFC: React.FC = () => {

    // 会员表单
    const [memberFormVisible, setMemberFormVisible] = useState(false);
    const [curFormData, setCurFormData] = useState<Member | null>(null);

    // 会员表格
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
            render: (memberEdge: MemberEdge) => (
                <Space size="middle">
                    <a onClick={()=>{
                        setCurFormData(memberEdge.node)
                        setMemberFormVisible(true)
                    }}>修改</a>
                </Space>
            ),
        },
    ];

    if (error) {
        return <div>error</div>
    }

    return <>
        <PageCont pageContainerConf={{
            title: '会员管理',
            extra: [
                <Button type={'primary'} key="3" onClick={
                    () => {
                        setCurFormData(null);
                        setMemberFormVisible(true);
                    }
                }><PlusOutlined/>添加会员</Button>
            ],
        }}>
            <Table
                loading={loading || tableLoading}
                // @ts-ignore
                columns={columns}
                scroll={{y: 'calc(100vh - 300px)'}}
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
        </PageCont>

        <MemberForm visit={memberFormVisible} setVisit={setMemberFormVisible} formData={curFormData}/>
    </>
};

export default MemberFC;