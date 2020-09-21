# 数据表单 Editor

数据表单可以作为单独的组件使用

* @Editor(editorConfig:EditorConfig)
    常用属性
    * insertTitle 
    * editTitle 编辑页面

* @Field(field:BasicField)
 componentAlias:ComponentAlias枚举类型  组件别名
 默认映射四种基本数据类型
 * string-> FieldString
 * number -> FieldNumber
 * Date -> FieldDate
 * boolean -> FieldBoolean

# DataManager 组件
数据操作管理
属性
* adapter:string  数据操作适配器,有odata,url(集成查询),local(本地数据库indexdb),graphql,session
* autoLoad自动查询
* autoRemove:boolean 自动删除
* autoInsert:boolean 自动插入
* autoUpdate:boolean 自动更新
* loadUrl:string  加载地址
* updateUrl:string 更新地址
* insertUrl:string 新增地址
* deleteUrl:string 删除地址

