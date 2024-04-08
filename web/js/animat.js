// 使用jQuery框架，在页面加载完成后，为每个 li 元素添加一个 loaded 类来触发动画效果
$(document).ready(function () {
  $("#dowebok li").each(function (index) {
    $(this).delay(100 * index).queue(function () {
      $(this).addClass("loaded").dequeue();
    });
  });
});