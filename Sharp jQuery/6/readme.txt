element.load(url, [,data] [,callback])
$.get(url [,data] [,callback] [,type])
$.post(url [,data] [,callback] [,type])
$.each() -- 通用遍历方法，可以用于遍历对象和数组
         -- 该方法不同于jQuery对象的each()方法，它是一个全局函数
$.ajax(options)
serialize()      -- 作用于jQuery对象，它能够将DOM元素内容序列化为字符串，用于Ajax请求
serializeArray() -- 该方法不是返回字符串，而是将DOM元素序列化后，返回JSON格式的数据
$.param()        -- 它是serialize()方法的核心，用来对一个数组或对象按照key/value进行序列化