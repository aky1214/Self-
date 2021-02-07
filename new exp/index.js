$(document).ready(function() {

    $(window).scroll(function() {

        var height = $('.navi').height();
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= height - 40) {
            $('.container').addClass('solid-nav');
            $('.container').removeClass('transparent-nav');
        } else {
            $('.container').removeClass('solid-nav');
            $('.container').addClass('transparent-nav');
        }

    });
});