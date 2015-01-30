each()
filter()         -- 筛选
find()       
trigger()        -- 自动触发
                 -- 不仅会触发元素绑定的blur事件，也会触发浏览器默认的blur事件
triggerHandler() -- 自动触发
                 -- 只会触发元素绑定的blur事件，而不会触发浏览器默认的blur事件

contains()
find()
end()
parent()
parents()

$(this)["removeClass"]() -- 等价于 $(this).removeClass()
$(this)["addClass"]()    -- 等价于 $(this).addClass()
                         -- 可以用中括号[]里的字符串代表方法名

toggle()      -- 隐藏/显示
toggleClass() -- 添加/删除类别

parseFloat(p1, p2) -- p1:要转成浮点数的参数
                   -- p2:表示要转成的进制