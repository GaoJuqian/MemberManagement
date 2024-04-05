import React, {useState} from 'react';
import {Button, Space, Table, TableProps, Tag} from 'antd';
import {Member, MemberEdge} from "../../types";
import {useGetMemberListQuery} from "./member.generated";
import dayjs from "dayjs";
import PageCont from "../../comp/Layout/PageCont";
import {PlusOutlined} from "@ant-design/icons";
import MemberForm from "./MemberForm/MemberForm";

interface DataType extends Member {
}

const MemberFC: React.FC = () => {


    // 会员表格
    const [pageInfo, setPageInfo] = useState({
        page: 1,
        pageSize: 100
    })
    const [tableLoading, setTableLoading] = useState(false)
    const {loading, error, data, fetchMore, refetch} = useGetMemberListQuery({
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
            width: 80,
            fixed: 'left',
            render: (node: Member) => <div>{node?.id}</div>,
        },
        {
            title: '名称',
            dataIndex: 'node',
            fixed: 'left',
            width: 120,
            render: (node: Member) => <div>{node?.name}</div>,
        },
        {
            title: '手机号',
            dataIndex: 'node',
            width: 130,
            fixed: 'left',
            render: (node: Member) => <a>{node?.phone}</a>,
        },
        {
            title: '使用情况',
            dataIndex: 'node',
            fixed: 'left',
            render: (node: Member) => <div>{
                node?.memberShopGoodsUsageCollection?.edges?.map((item: any, index) => {
                    return (<div key={index}>
                        {index != 0 && (<hr className="my-2" />)}
                        <Tag color="processing">{item?.node?.shopGoods?.name}</Tag>
                        <span>：</span>
                        <a>{item?.node?.usageCount}</a>
                    </div>)
                })
            }</div>,
        },
        {
            title: '生效状态',
            dataIndex: 'node',
            width: 90,
            align: 'center',
            render: (node: Member) => (
                <div>
                    {node?.status === 1 ? <Tag color="success">生效</Tag> : <Tag color="error">失效</Tag>}
                </div>
            ),
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
            title: '修改时间',
            dataIndex: 'node',
            width: 120,
            align: 'center',
            render: (node: Member) =>
                <div>{node?.updateAt ? dayjs(node?.updateAt).format('YYYY-MM-DD HH:mm:ss') : '-'}</div>,
        },
        {
            title: '操作',
            key: 'action',
            align: 'center',
            fixed: 'right',
            width: 80,
            render: (memberEdge: MemberEdge) => (
                <Space size="middle">
                    <a onClick={() => {
                        setCurFormData(memberEdge.node)
                        setMemberFormVisible(true)
                    }}>修改</a>
                </Space>
            ),
        },
    ];

    // 会员表单
    const [memberFormVisible, setMemberFormVisible] = useState(false);
    const [curFormData, setCurFormData] = useState<Member | null>(null);
    const memberFormHandleOK = () => {
        setMemberFormVisible(false);
        refetch().then(r => {
        });
    }

    if (error) {
        return <div>error</div>
    }

    return <>
        <PageCont pageContainerConf={{
            title: '会员管理',
            extra: [
                <Button icon={<PlusOutlined/>} type={'primary'} key="3" onClick={
                    () => {
                        setCurFormData(null);
                        setMemberFormVisible(true);
                    }
                }>添加会员</Button>
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

        {
            memberFormVisible &&
            <MemberForm visit={memberFormVisible} setVisit={setMemberFormVisible} formData={curFormData}
                        handleOK={memberFormHandleOK}/>
        }
    </>
};

export default MemberFC;