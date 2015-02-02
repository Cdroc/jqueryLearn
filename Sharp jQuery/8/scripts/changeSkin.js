$(function() {
    var $li = $("#skin li");
    $li.click(function() {
        switchSkin(this.id);
    });
    var cookie_skin = $.cookie("MyCssSkin"); // Chrome获取不到
    if (cookie_skin) {
        switchSkin(cookie_skin);
    }
});
function switchSkin(skinName) {
    $("#" + skinName).addClass("selected")
                     .siblings().removeClass("selected");
    $("#cssfile").attr("href", "styles/skin/" + skinName + ".css");
    $.cookie("MyCssSkin", skinName);
}