$(function() {

    $(document).ready(function() {
        $('img').click(function() {
            var imgsrc1 = 'images/7.png';
            var imgsrc2 = 'images/6.png';
            var that = $(this);
            if (that.attr("src") == imgsrc1) {
                that.attr("src", imgsrc2);


            } else {
                that.attr("src", imgsrc1);
                $(this).parent().siblings().children("img").attr("src", imgsrc2);

            }
        })
    })
})