import React, {useState} from 'react';
import {Button, Input, Table, TableProps, Tag} from 'antd';
import {Member, MemberEdge} from "../../types";
import {useGetMemberListQuery} from "./member.generated";
import dayjs from "dayjs";
import PageCont from "../../comp/Layout/PageCont";
import {DiffFilled, EditFilled, PlusOutlined, ReloadOutlined} from "@ant-design/icons";
import MemberForm from "./MemberForm/MemberForm";

interface DataType extends Member {
}

const pageInfoInit = {
    page: 1,
    pageSize: 100
}

const MemberFC: React.FC = () => {

    // 操作类型
    const [memberFormActionSet, setMemberFormActionSet] = useState<'info' | 'goods'>('info');


    // 会员表格
    const [searchFrom, setSearchFrom] = useState({
        phone: '',
    })
    const [pageInfo, setPageInfo] = useState(pageInfoInit)
    const [tableLoading, setTableLoading] = useState(false)
    const {loading, error, data, fetchMore, refetch} = useGetMemberListQuery({
        variables: {
            first: pageInfo.pageSize,
        },
    })
    const search = (value: string) => {
        setTableLoading(true)
        // 清空搜索时重置页数
        if (value?.length == 0) {
            setPageInfo((prev) => {
                return {
                    ...prev,
                    page: 1
                }
            })
        }
        refetch({
            filter: {
                or: [{
                    name: {
                        iregex: value
                    }
                }, {
                    phone: {
                        iregex: value
                    }
                }]
            }
        }).finally(() => setTableLoading(false))
    }
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
            width: 200,
            render: (node: Member) => <div>{
                node?.memberShopGoodsUsageCollection?.edges?.map((item: any, index) => {
                    return (<div key={index}>
                        {index != 0 && (<hr className="my-2"/>)}
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
            width: 130,
            render: (memberEdge: MemberEdge) => (
                <>
                    <Button type='link' danger icon={<EditFilled/>}
                            onClick={() => {
                                setMemberFormActionSet('info');
                                setCurFormData(memberEdge.node)
                                setMemberFormVisible(true)
                            }}>修改信息</Button>
                    <Button type='link' icon={<DiffFilled/>}
                            onClick={() => {
                                setMemberFormActionSet('goods');
                                setCurFormData(memberEdge.node)
                                setMemberFormVisible(true)
                            }}>设置商品</Button>
                </>
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
                <Input.Search placeholder="搜索名称或手机号" key="1" allowClear enterButton
                              onSearch={search} loading={loading || tableLoading} />,
                <Button icon={<PlusOutlined/>} type='primary' key="2" onClick={
                    () => {
                        setCurFormData(null);
                        setMemberFormVisible(true);
                    }
                }>添加会员</Button>,
                <Button icon={<ReloadOutlined/>} key="3" type='primary' ghost
                        loading={loading || tableLoading}
                        onClick={() => {
                            setTableLoading(true)
                            refetch().finally(() => setTableLoading(false))
                        }}>刷新</Button>,
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
                    current: pageInfo.page,
                    pageSize: pageInfo.pageSize,
                    onChange: paginationChange
                }}
            />
        </PageCont>

        {
            memberFormVisible &&
            <MemberForm
                visit={memberFormVisible} setVisit={setMemberFormVisible} formData={curFormData}
                actionSet={memberFormActionSet}
                handleOK={memberFormHandleOK}/>
        }
    </>
};

export default MemberFC;