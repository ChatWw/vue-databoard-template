<template>
    <div class="databoard_container">
        <span>DATABOARD</span>
        <va-icon name="logo"></va-icon>
        <special-fonts :num="1234567890" type="yellow"></special-fonts>
        <special-fonts :num="1234567890" type="green"></special-fonts>
        <s-table height="400" border stripe :data="tableData" :column="column" :columnsProps="columnsProps" row-key="id">
            <template slot="address" slot-scope="scope">
                <el-tag>{{ scope.row.address }}</el-tag>
            </template>
        </s-table>
        <el-button type="primary">主要按钮</el-button>
        <el-input placeholder="请输入"></el-input>
    </div>
</template>

<script>
import SpecialFonts from '@/components/SpecialFonts'
export default {
    name: 'DataboardIndex',
    props: {},
    data() {
        return {
            tableData: [],
            column: [
                { label: '日期', prop: 'date' },
                { label: '姓名', prop: 'name' },
                { label: '省份', prop: 'province' },
                { label: '市区', prop: 'city' },
                { label: '地址', prop: 'address', slotScope: true, width: '200' }
            ],
            columnsProps: {
                align: 'center',
                showOverflowTooltip: false
            }
        }
    },
    components: {
        SpecialFonts
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
        let temp = {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄'
        }
        for (let i = 0; i < 10; i++) {
            this.tableData.push(temp)
        }
    },
    methods: {}
}
</script>

<style scoped lang="scss">
.databoard_container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>
