# Pagelet

继承自Chunk，是组件的管理器，实现组件的层次化渲染。


        设计思路:一个页面由多个组件和非组件的HTML片段组成，实际创建过程中需要一个个动态创建，基于约定为大的原则，采用“钩子”和Mustache，自动化的完成组件渲染和行为附加。

## 配置

包含[Chunk](/etaoux/brix/tree/master/docs/chunk.md)的所有配置

## 方法

* `ready(fn)`

    pagelet 渲染和行为附加完成后需要执行的函数

    * @param fn 执行的函数

* `getBrick(id)`

    获取brick的实例

    * @param id brick的id
    * @return {object} 组件实例

* `addBehavior()`

    层次化的给brick添加行为


## 事件






