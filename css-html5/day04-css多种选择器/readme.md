1. 能使用enmet语法
2. 能够使用CSS复合选择器
3. 能够写出伪类选择器的使用规范
4. 能够说出元素有几种显示模式
5. 能够计算CSS的权重

```
内联样式，如: style=“…”，权值为1000。
ID选择器，如：#content，权值为0100。
类，伪类、属性选择器，如.content，权值为0010。
类型选择器、伪元素选择器，如div p，权值为0001。
通配符、子选择器、相邻选择器等。如* > +，权值为0000。
继承的样式没有权值
```