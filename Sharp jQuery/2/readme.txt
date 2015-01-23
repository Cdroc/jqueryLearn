jQuery选择器 -- 基本选择器 -- #id
                           -- .class
                           -- element
                           -- *
                           -- selector1, selector2, ......, selectorN

             -- 层次选择器 -- ancestor descendant -- 后代元素
                           -- parent>child        -- 子元素
                           -- prev + next         -- 相邻元素
                              -- $("prev + next")等价于$("prev").next("next")
                           -- prev~siblings       -- 兄弟元素
                              -- $("prev~siblings")等价于$("prev").nextAll("siblings")
                              -- $("prev~siblings")与siblings()的区别：
                              -- $("prev~siblings")只能选择“prev”元素后面的同辈<siblings>元素
                              -- siblings()方法与前后位置无关，只要是同辈节点就都能匹配

             -- 过滤选择器 -- 过滤规则与CSS中的伪类选择器语法相同，即选择器都以一个冒号(:)开头
                           -- 基本过滤选择器
                              -- :fitst :last :even :odd :header :animated
                              -- :not(selector) :eq(index) :gt(index) :lt(index) -- （index从0算起）
                           -- 内容过滤选择器
                              -- :contains(text) :empty :has(selector) :parent
                           -- 可见性过滤选择器
                              -- :hidden :visible
                           -- 属性过滤选择器
                              -- [attribute] [attribute=value] [attribute!=value]
                              -- [attribute^value] [attribute$=value] [attribute*=value]
                              -- [selector1][selector2][selectorN]
                           -- 子元素过滤选择器
                              -- :nth-child(index/even/odd/equation) -- （index从1算起）
                              -- :first-child :last-child :only-child
                           -- 表单对象属性过滤选择器
                              -- :enabled :disabled :checked -- （冒号前不要加空格） 
                              -- :selected -- （冒号前要加空格）
                              
             -- 表单选择器 -- :input :text :password :radio :checkbox
                           -- :submit :image :reset :button :file :hidden

选择器中特殊符号注意事项   -- <div id="id#b"></div>  -- $("#id\\#b");
                           -- <div id="id[1]"></div> -- $("id\\[1\\]");
                           -- $("div[@title='test']") -- 错误写法
                           -- $("div[title='test']")  -- 正确写法，去掉@
                           -- 注意选择器中的空格