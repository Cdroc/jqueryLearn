插入(移动)方法 -- append()
               -- appendTo()
               -- prepend()
               -- prependTo()
               -- after()
               -- insertAfter()
               -- before()
               -- insertBefore()
remove() -- 删除节点 -- 删除后返回值是被删除的节点，该返回值还可以使用
empty()  -- 清空节点 -- 清空的是节点里的内容
clone()     -- 复制节点，但不复制节点中所绑定的事件
clone(true) -- 复制节点的同时复制节点中所绑定的事件
A.replaceWith(B)等同于B.replaceAll(A)，原先绑定的事件会消失，需要重新绑定
wrap()      -- 为每个节点添加包裹
wrapAll()   -- 为所以匹配节点添加一个包裹
wrapInner() -- 为每个节点的子内容（包括文本节点）添加包裹
attr(attribute1)
attr(attribute1, value)
attr({attribute1: value1, attribute2: value2})
removeAttr(attribute1)
toggleClass("myClass") -- 交替执行，若myClass有则删除，若myClass没有则添加
html() -- 类似于JS里的innerHTML属性
text() -- 类似于JS里的innerText属性
val()  -- 类似于JS里的value属性

------------------------------------------------------------------------------------

html()方法可以用于XHTML文档，但不能用于XML文档
text()方法对于HTML文档和XML文档都有效
JS中的innerText属性并不能再FireFox浏览器下运行，而jQuery的text()方法支持所有的浏览器
