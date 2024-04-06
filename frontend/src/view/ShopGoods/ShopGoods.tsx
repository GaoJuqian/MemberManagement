import React, {useState} from 'react';
import {Button, Table, TableProps} from 'antd';
import {Member, ShopGoods, ShopGoodsEdge} from "../../types";
import {useGetShopGoodsListQuery} from "./shopGoods.generated";
import dayjs from "dayjs";
import PageCont from "../../comp/Layout/PageCont";
import {EditFilled, PlusOutlined, ReloadOutlined} from "@ant-design/icons";
import ShopGoodsForm from "./ShopGoodsForm/ShopGoodsForm";

interface DataType extends Member {
}


const ShopGoodsFC: React.FC = () => {

    // 表格
    const [pageInfo, setPageInfo] = useState({
        page: 1,
        pageSize: 100
    })
    const [tableLoading, setTableLoading] = useState(false)
    const {loading, error, data, fetchMore, refetch} = useGetShopGoodsListQuery({
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
            width: 120,
            render: (node: Member) => <div>{node?.id}</div>,
        },
        {
            title: '商品名称',
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
            width: 130,
            render: (shopGoodsEdge: ShopGoodsEdge) => (
                <>
                    <Button type='link' danger icon={<EditFilled/>}
                            onClick={() => {
                                setShopGoodsFormData(shopGoodsEdge.node)
                                setShopGoodsFormVisible(true)
                            }}>修改商品</Button>
                </>
            ),
        },
    ];

    // 表单
    const [shopGoodsFormVisible, setShopGoodsFormVisible] = useState(false);
    const [shopGoodsFormData, setShopGoodsFormData] = useState<ShopGoods | null>(null);
    const handleOK = () => {
        setShopGoodsFormVisible(false)
        refetch()
    }

    if (error) {
        return <div>error</div>
    }

    return <PageCont pageContainerConf={{
        title: '欢迎',
        extra: [
            <Button icon={<ReloadOutlined/>} key="1"
                    loading={loading || tableLoading}
                    onClick={() => {
                        setTableLoading(true)
                        refetch().finally(() => setTableLoading(false))
                    }}>刷新</Button>,
            <Button icon={<PlusOutlined/>} type={'primary'} key="2" onClick={
                () => {
                    setShopGoodsFormData(null);
                    setShopGoodsFormVisible(true);
                }
            }>添加商品</Button>
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
        {
            shopGoodsFormVisible &&
            <ShopGoodsForm visit={shopGoodsFormVisible} formData={shopGoodsFormData} handleOK={handleOK}/>
        }
    </PageCont>
};

export default ShopGoodsFC;