$(document).ready(function(){
    $('.menu-trigger').click(function(){
        $('#gnb').toggle();

    });
   
    var burger = $('.menu-trigger');
        burger.each(function(index){
        var $this = $(this);

        $this.on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active-' + (index+1));
        })
    });

})