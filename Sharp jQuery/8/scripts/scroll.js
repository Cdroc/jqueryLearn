$(function() {
    var $this = $(".scrollNews");
    $this.hover(function() {
        clearInterval(scrollTimer);
    }, function() {
        scrollTimer = setInterval(function() {
            scrollNews($this);
        }, 3000);
    }).trigger("mouseleave");
    // 下面这句可以简化为上面的 .trigger("mouseleave") ，因为下面的内容与第二个function内容一致
    // var scrollTimer = setInterval(function() {
    //     scrollNews($this);
    // }, 3000);
})

function scrollNews(obj) {
    var $self = obj.find("ul:first");
    var lineHeight = $self.find("li:first").height();
    $self.animate({"marginTop" : -lineHeight + "px"}, 600, function() {
        $self.css({marginTop:0}).find("li:first").appendTo($self);
    })
}