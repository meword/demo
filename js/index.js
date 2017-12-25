$(function() {





    $('[data-toggle="tooltip"]').tooltip()

    var items = $('#slide .item');

    $(window).on('resize',function() {

        if($(window).width() > 640) {
            $(items).each(function(i,e) {
                var largeImg = $(e).data('large-image');
                $(e).html('<a href="#" style="background-image: url('+largeImg+')"></a>')
            })
        }else{
            $(items).each(function(i,e) {
                var smallImg = $(e).data('small-image');
                $(e).html('<img src="'+smallImg+'" alt=""/>')
            })
        }
    }).trigger('resize');


    var myScroll = new IScroll('#wrapper', {
        /*支持水平滚动*/
        scrollX: true,
        // 禁止垂直滚动
        scrollY: false,
        // 支持鼠标滚动
        mouseWheel: true
    });

})