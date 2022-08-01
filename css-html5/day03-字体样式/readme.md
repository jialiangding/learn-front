学习目标
1. 给字体和文本 设置样式
2. css 三种引入方式


CSS语法规范


CSS的选择器

基础选择器
    标签选择器
    ```css
      p{
        color: red;
        font-size: 12px;
    }
    ```

    类选择器  
    语法  .类名{
        key :value
    }

```css
 .hi {
        color: green;
    }
  
```
多类名


多类名的应用场景
```
拆分，清晰,相同样式放在一个类里  

```



    id 选择器   只能调用一次

    #id名称{
        key:value
    }




通配符选择器
*{
    key:value
}




CSS 字体属性
```
  .font{
        font-style: italic;
        
        font-weight: 700; 
        font-size: 16px;
        font-family: 'Microsoft yahei';
        }

```


CSS 文本属性,可以定义文本的外观

```
color
text-align:center,left,right  文本对齐（ 水平）
text-decoration   给文本添加下划线 删除线

```