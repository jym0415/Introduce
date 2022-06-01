$(document).ready(function(){
<<<<<<< HEAD
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
=======
    $('.gnbwrap').onClick(function(){
        $('#gnb').removeClass('d-none');
    })

});
>>>>>>> b5d45397a02b1b0a80628c293e5ee40286934e30
