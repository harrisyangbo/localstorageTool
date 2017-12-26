# localstorageTool
H5本地存储小工具，可直接使用，包括存值、取值、清空；

1、引入JS文件或将其中代码复制到你的项目中。
2、调用(链式调用)
存值:$storage(obj).startStorage(callback);
//obj参数:    type:'set'  datas:要存入的数据(object或string类型)；
callback 返回 'success'即存储成功

取值:$storage('get').startStorage(callback);//callback返回数据

清空:$storage('clear').startStorage(callback)//callback返回是否清除


具体详情请看demo，逻辑不复杂 简单易用  欢迎纠错
