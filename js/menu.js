$(function(){
    
    var header = document.getElementById('cabecera');
    var headroom = new Headroom(cabecera);
    headroom.init();

    //menu Responsive

    var ancho = $(window).width(),
        enlaces = $('#enlaces'),
        btnMenu = $('#btn-menu'),
        icono = $('#btn-menu .icono');

        if(ancho < 800){
            enlaces.hide();
            icono.addClass(fa-bars)
        }

        btnMenu.on('click', function(e){
            enlaces.slideToggle();
            icono.toggleClass('fa-bars');
            icono.toggleClass('fa-times');

        });

        $(window).on('resize', function(){
            if($(this).width() > 800){
                enlaces.show();
                icono.addClass('fa-times');
                icono.removeClass('fa-bars');
            } else{
                enlaces.hide();
                icono.addClass('fa-bars');
                icono.removeClass('fa-times');
            }
        });

});