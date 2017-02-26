## 关于自定义checkbox、radio的实现

关于checkbox、radio的样式乃浏览器设定且无法自定义
但可利用label标签与相应input标签关联，利用for属性绑定input标签的id
绑定后，利用label标签上的点击事件与其关联的input标签共用
首先隐藏input标签，更改label标签样式，利用label标签“替代”input标签

```
<input type="checkbox" class="checkbox" id="circleBox"/>
<label for="circleBox" class="labelCheck" id="circleLabel">Check</label>
```
```
.checkbox, .radio{
display:none;
}


.labelCheck{
display:block;
background:url('sprite.png') 0 0 no-repeat;
width:25px;
height:25px;
line-height:0;
font-size:0;
overflow:hidden;
}

#circleBox:checked ~ #circleLabel{
background-position:-26px 0;
}


```