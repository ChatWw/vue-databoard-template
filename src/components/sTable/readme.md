## s-table

> 基于 elementUI table 组件封装 几乎支持原 table 所有的功能

-   以 element-ui table 为基础进行二次封装
-   继承 element-ui table 组件的参数及事件
-   支持 render 渲染
-   支持 slot 插槽
-   支持组件引入
-   支持树形数据
-   支持分页功能

| 属性          | 说明                                               | 类型    | 默认  |
| ------------- | -------------------------------------------------- | ------- | ----- |
| data          | table 的 data 属性                                 | Array   | []    |
| column        | 用于控制表格列渲染                                 | Array   | []    |
| columns-props | 用于定义所有 column 公共的属性                     | Object  |       |
| pagination    | 是否显示分页组件, 具体详细请看 pagination 配置栏目 | Boolean | false |

只是在 Element Table 封装了一层，原本设置在 Table 上的 props 与事件监听和设置都可以直接绑定到组件上，具体配置可参考[Element Tabel](https://element.eleme.io/#/zh-CN/component/table#table-attributes) 文档

**column 配置** column 用于控制表格的列行为, 设置示例：

```
let column = [
 { label: '日期', prop: 'date', width: 100 },
 { label: '姓名', prop: 'name' },
 { label: '邮编', prop: 'zip' },
 {
   label: '地址',
   prop: 'address',
   render: (h, scope) => {
     return (<el-tag>{scope.row.address}<el-tag>)
   }
 },
 {
   label: '组件',
   prop: 'cmp',
   component: EditBtn,
   listeners: {
     'row-edit'(row) {
       console.log('row-edit', row)
     }
   }
 }
]
```

**columns-props 配置** columns-props 用于配置 columns 各列默认的 props 属性, 设置示例：

```
let columnsProps = {
  align: 'center',
  showOverflowTooltip: true
}
```

**pagination 配置** pagination 用于配置分页组件的行为, 设置示例：

| 参数        | 说明                                | 类型     | 默认值           |
| ----------- | ----------------------------------- | -------- | ---------------- |
| total       | 总条目数                            | Number   | /                |
| page        | 当前页数 支持 .sync 修饰符          | Number   | 1                |
| limit       | 每页显示条目个数，支持 .sync 修饰符 | Number   | 20               |
| page-sizes  | 每页显示个数选择器的选项设置        | Number[] | [10, 20, 30, 50] |
| hidden      | 是否隐藏                            | Boolean  | false            |
| auto-scroll | 分页之后是否自动滚动到顶部          | Boolean  | true             |

其它 Element 的 el-pagination 支持的属性，它也都支持。

**示例**

```
<template>
  <s-table
    border
    stripe
    :data="data"
    :column="column"
    :columnsProps="columnsProps"
    pagination
    :auto-scroll="false"
    :total="total"
    :page.sync="listQuery.page"
    :limit.sync="listQuery.limit"
    @pagination="getList"
    row-key="id"
  >
    <template name="address" slot-scope="scope">
      <el-tag>{{scope.row.address}}</el-tag>
    </template>
  </s-table>
</template>

<script>
import STable from '@/components/sTable'

export default {
  components: {
    STable
  },
  data() {
    return {
      column: [
        { label: '日期', prop: 'date' },
        { label: '姓名', prop: 'name' },
        { label: '省份', prop: 'province' },
        { label: '市区', prop: 'city' },
        { label: '地址', prop: 'address', slotScope: true }
      ],
      columnsProps: {
        align: 'center',
        showOverflowTooltip: true
      },
      total: 0,
      listQuery: {
        page: 2,
        limit: 20
      },
      data: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  },
  methods: {
    getList() {
      console.log(this.listQuery)
    }
  }
}
</script>
```
