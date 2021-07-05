
$(document).ready(function(){

    //slide
    $('.slide_bar').click(function(){
        i=$(this).index();
    
        $('#slide_img_wrap>img').fadeOut();
        $('#slide_img_wrap>img').eq(i).fadeIn();
    
        $('.slide_bar').removeClass('btn_on');
        $('.slide_bar').eq(i).addClass('btn_on');
    
    });
        

    click=0;
    setInterval(function(){
        click++;
    
        if(click>3){
            click=0;
        }
    
        $('.slide_bar').eq(click).trigger('click');
    
    },3000);
        

    //mobile slide
    var a = 4;
    $('#m_slide_wrap').click(function(){
        a--;
        if(a==0){
            $('#m_slide_wrap>img').fadeIn();
            a=4;
        }else{
            $('#m_slide_wrap>img').eq(a).fadeOut();
        }
    });

    setInterval(function(){
        $('#m_slide_wrap').trigger('click');
    },2000);


    //hidden_menu
    $('#ham_btn').click(function(){
        $('#hidden_menu_wrap').css({
            display: 'block',
        });
        $('#hidden_menu_box').animate({
            left:0,
        });
    });
    $('#hidden_menu_btn').click(function(){
        $('#hidden_menu_wrap').css({
            display:'none',
        });
        $('#hidden_menu_box').animate({
            left:-60+'%',
        });
    });


    $('#hidden_menu>li').click(function(){
    if($(this).children('.hidden_sub_menu').hasClass('hidden_sub_on')===true){
        $(this).children('.hidden_sub_menu').removeClass('hidden_sub_on');
    }else{
        $('.hidden_sub_menu').removeClass('hidden_sub_on');
        $(this).children('.hidden_sub_menu').addClass('hidden_sub_on');
    }
    });


    //to_top
    $('#to_top_btn').click(function(){
        $('html, body').animate({
            scrollTop: 0,
        },1000);
    });

    $(window).scroll(function(){
        var sct= $(window).scrollTop();
        var hh = $('header').height();

        if(sct>hh){
            $('#to_top_btn').css({
                opacity: 1,
            });
        }else if(sct<hh){
            $('#to_top_btn').css({
                opacity: 0,
            });
        }
    });


    //find_box PC ver.
    var find = 0;

    $('#search_icon').click(function(){
    if(find==0){
            $('#find_box_wrap').animate({
                marginTop:0
            });
            find++;
    }else if(find==1){
            $('#find_box_wrap').animate({
                marginTop: -540
            });
            find=0;
    }
    });


});//end