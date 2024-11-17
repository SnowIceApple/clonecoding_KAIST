$(document).ready(function(){
    $('.mn_floor1 > li > a').on('mouseenter focusin', function(){
        $(this).parent('li').addClass('active').siblings('li').removeClass('active');
        if($(this).siblings('.mn_floor2').length == 0){
            $('.mn_floor1 > li').removeClass('active');
        }
    });

    $('.mn_floor1 > li').on('mouseleave', function(){
        $('.mn_floor1 > li').removeClass('active');
    });

    $('.mn_floor1 > li').first().children('.mn_floor1 > li > a').on('keydown', function(e){
        if(e.shiftKey && e.key === 'Tab'){
            $('.mn_floor1 li').removeClass('active'); 
        }
    });

    $('.mn_floor1 > li').last().children('.mn_floor2 > li > a').on('keydown', function(e){
        var code = e.keyCode || e.which;
        var idx = $(this).parent('li').index();
        var totalLength = $(this).parent('li').length;
        var outIdx = totalLength + 1;
        if(code === 9 && idx == totalLength){
            $('.mn_floor1 > li').removeClass('active');
        }
    });
});