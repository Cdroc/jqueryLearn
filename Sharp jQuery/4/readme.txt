hover()  -- 替代jQuery中的bind("mouseenter")和bind("mouseleave"),
            而不是替代bind("mouseover")和bind("mouseout")
toggle() -- toggle(fn1, fn2, ...fnN)
         -- 模拟鼠标连续单击事件

event.stopPropagation(); -- 停止事件冒泡
event.preventDefault();  -- 阻止默认行为（表单提交）
return false;            -- 停止事件冒泡/阻止默认行为
事件冒泡是一个从后代节点向祖先节点冒泡的过程。
事件捕获就正好相反，是一个从祖先节点到后点节点的过程。
IE只支持冒泡，不支持捕获。
jQuery不支持事件捕获

event.type()   -- 获取事件类型
event.target() -- 获取到触发事件的元素
event.relatedTarget()
event.pageX()  -- 获取光标相对于页面的x坐标
event.pageY()  -- 获取光标相对于页面的x坐标
event.which()  -- 鼠标单击事件中获取到鼠标的左、中、右键（1：左、2中、3：右）
event.metaKey() -- 键盘事件中获取"ctrl"按键
event.originalEvent() -- 指向原始的事件对象

unbind([type][,data]) -- 移除事件
                      -- 第一个参数是事件类型，第二个参数是要移除的函数
                      -- 如果没有参数，则删除所有绑定的事件
                      -- 如果提供了事件类型作为参数，则只移除该类型的绑定事件
                      -- 如果把在绑定是传递的处理函数作为第二个参数，则只有这个特定的事件处理函数会被删除
one(type, [data], fn) -- 作用于bind类似，只是事件触发一次后就移除事件了

trigger("click")  -- 完成模拟操作（自动触发click事件） 
trigger("click!") -- 注意后面的！，作用是匹配所有不包含在命名空间中的click方法

速度关键字  -- slow   -- 600毫秒
            -- normal -- 400毫秒
            -- fast   -- 200毫秒
show()      -- 显示（改变高度、宽度、不透明度）
hide()      -- 隐藏（改变高度、宽度、不透明度）
fadeIn()    -- 淡入（显示）（只会改变元素的不透明度）
fadeOut()   -- 淡出（隐藏）（只会改变元素的不透明度）
slideUP()   -- 元素由下至上缩短隐藏（只会改变元素的高度）
slideDown() -- 元素由上至下延伸显示（只会改变元素的高度）

animate(params, speed, callback) -- params   -- 一个包含样式属性及值的映射
                                             -- 如{property1: "value1", ...}
                                 -- speed    -- 速度参数，可选
                                 -- callback -- 在动画完成时执行的函数，可选

stop([clearQueue][, gotoEnd]) -- 停止动画 -- 参数1，可选，为Boolean值
                                          -- 是否要清空未执行完的动画队列
                                          -- 参数2，可选，为Boolean值
                                          -- 是否直接将正在执行的动画跳转到末状态
---------------------------------------------------------------------------------

4-3.html -- bug
4-4.html -- bug

$("input").trigger("focus");       -- 触发focus事件，并使<input>元素获得焦点
$("input").triggerHandle("focus"); -- 触发focus事件，但<input>元素未获得焦点