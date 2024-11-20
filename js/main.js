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

    $(document).on('click', function(e){
        if($(e.target).closest('.mn_floor2').length == 0){
            $('.mn_floor1 > li').removeClass('active');
        }
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
        if(code === 9 && idx == totalLength){
            $('.mn_floor1 > li').removeClass('active');
        }
    });

    $('.main_search_btn a').on('click', function(e){
        $(this).toggleClass('active');
        $('.all_menu_open').removeClass('active');
        $('.all_menu').removeClass('active');
        $('.main_search').stop().slideDown(150);
        $('#header').css('padding-bottom', 60 + 'px');
        $(this).children('.hidden_text').text('검색창 닫기');
        $('.all_menu_open a').children('.hidden_text').text('전체메뉴 열기');
        $('html, body').addClass('fixed');
        if($(this).hasClass('active') == false){
            $('.main_search').stop().slideUp(150);
            $('#header').css('padding-bottom', 0);
            $(this).children('.hidden_text').text('검색창 열기');
            $('html, body').removeClass('fixed');
        }
    });

    $('.main_search_close button').on('click', function(e){
        $('.main_search_btn a').removeClass('active');
        $('.main_search').stop().slideUp(150);
        $('#header').css('padding-bottom', 0);
        $('.main_search_btn a').children('.hidden_text').text('검색창 열기');
        $('html, body').removeClass('fixed');
    });

    $('.main_search_close button').on('keydown', function(e){
        if(e.key === 'Tab' && $('.main_search_btn a').hasClass('active')){
            $('.main_search').focus();
        }
    });

    $('.main_search_close button').on('keydown', function(e){
        if(e.shiftKey && e.key === 'Tab'){
            $('.main_search').focus();
        }
    });

    $('.all_menu_open a').on('click', function(e){
        e.preventDefault();
        $(this).parent().toggleClass('active');
        $('.all_menu').toggleClass('active');
        $('.main_search_btn a').removeClass('active');
        $('.main_search').stop().slideUp(150);
        $('#header').css('padding-bottom', 0);
        $(this).children('.hidden_text').text('전체메뉴 닫기');
        $('.main_search_btn a').children('.hidden_text').text('검색창 열기');
        $('html, body').addClass('fixed');
        if($(this).parent().hasClass('active') == false){
            $('html, body').removeClass('fixed');
        }
    });

    $('.main_all_menu_close button').on('click', function(){
        $('.all_menu_open').removeClass('active');
        $('.all_menu').removeClass('active');
        $('.main_search_btn a').removeClass('active');
        $('.main_search').stop().slideUp(150);
        $('#header').css('padding-bottom', 0);
        $('.all_menu_open a').children('.hidden_text').text('전체메뉴 열기');
        $('html, body').removeClass('fixed');
    }); 

    $('.main_all_menu_close button').on('keydown', function(e){
        var code = e.keyCode || e.which;
        if(code === 9 && $('.all_menu').hasClass('active')){
            $('.all_menu').focus();
        }
    });



    $(window).on('scroll', function(){

        var ftNavAnchor = $('.main_article_floor').last().offset().top + $('.main_article_floor').last().height();
        var scrollBottom = $('body').height() - $(window).height() - $(window).scrollTop();
        var lastAnchor = $(document).innerHeight() - $('#divide_box').height();
        // console.log(lastAnchor);
        // console.log(scrollBottom);
        // console.log(ftNavAnchor);
        if($(window).scrollTop() > 0){
            $('.main_left_menu').addClass('active');
            $('.footer_nav').addClass('active');
        }
        else{
            $('.main_left_menu').removeClass('active');
        }
        if(scrollBottom < lastAnchor){
            $('.footer_nav').removeClass('active ani_dis');
        }
        if($(window).scrollTop() == 0){
            $('.footer_nav').addClass('ani');
            $('.footer_nav').removeClass('ani_dis');
        }
        else{
            $('.footer_nav').removeClass('ani');
            $('.footer_nav').addClass('ani_dis');
        }
    });

    $('.ftn_floor1 > li > a').each(function(){
        $(this).on('click', function(e){
            e.preventDefault();
            $(this).parent('li').toggleClass('active').siblings('li').removeClass('active');
            if($(this).parent('li').hasClass('active')){
                $(this).parent('li').children('.ftn_megamenu').stop().slideDown(300);
            }
            $('.ftn_floor1 > li').each(function(){
                if($(this).hasClass('active') == false){
                    $(this).children('.ftn_megamenu').stop().slideUp(300);
                }
            });
        });
    });
    $('.ftn_floor1 > li > a').on('click', function(e){
        
    });

    $('.go_top button').on('click', function(){
        $('html, body').animate({
            scrollTop: 0,
        }, 500);
        $('.logo a').focus();
    });

});

$(window).on('load', function(){
    if($(window).scrollTop() == 0){
        $('.footer_nav').addClass('ani');
    }
});
