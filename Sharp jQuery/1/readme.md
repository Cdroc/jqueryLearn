$ -- jQuery的简写形式 -- $("#foo")和jQuery("#foo")是等价的

.end()                 -- 重新定位到上次操作的元素
.stop()                -- 停止动画
.html()                -- 元素内的html代码

var $variable = jQuery对象; -- 若是jQuery对象，变量名前加上$
var variable  = DOM对象;    -- 若是DOM对象，变量名前不要加上$

jQuery对象转成DOM对象  -- [index] 和 get(index)
                       -- var cr = $cr[0];
                       -- var cr = $cr.get(0);
DOM对象转成jQuery对象  -- $(DOM对象)
                       -- var $cr = $(cr);

jQuery.noConflict()           -- 将变量$的控制权移交给其他JavaScript库
                              -- 要使用jQuery方法只能用jQuery()
var $j = jQuery.noConflict(); -- 将变量$的控制权移交给其他JavaScript库
                              -- 要使用jQuery方法可以用$j()或jQuery()
jQuery库在其他库之前导入      -- 其他库可以使用$()，jQuery库不能使用$()
jQuery库在其他库之后导入      -- 其他库不能使用$()，jQuery库可以使用$()
                              -- $()代表的是后面导入的库