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
        $('body').addClass('fixed');
        if($(this).hasClass('active') == false){
            $('.main_search').stop().slideUp(150);
            $('#header').css('padding-bottom', 0);
            $(this).children('.hidden_text').text('검색창 열기');
            $('body').removeClass('fixed');
        }
    });

    $('.main_search_close button').on('click', function(e){
        $('.main_search_btn a').removeClass('active');
        $('.main_search').stop().slideUp(150);
        $('#header').css('padding-bottom', 0);
        $('.main_search_btn a').children('.hidden_text').text('검색창 열기');
        $('body').removeClass('fixed');
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
        $('body').addClass('fixed');
        if($(this).parent().hasClass('active') == false){
            $('body').removeClass('fixed');
        }
    });

    $('.main_all_menu_close button').on('click', function(){
        $('.all_menu_open').removeClass('active');
        $('.all_menu').removeClass('active');
        $('.main_search_btn a').removeClass('active');
        $('.main_search').stop().slideUp(150);
        $('#header').css('padding-bottom', 0);
        $('.all_menu_open a').children('.hidden_text').text('전체메뉴 열기');
        $('body').removeClass('fixed');
    }); 

    $('.main_all_menu_close button').on('keydown', function(e){
        var code = e.keyCode || e.which;
        if(code === 9 && $('.all_menu').hasClass('active')){
            $('.all_menu').focus();
        }
    });
});