$(document).ready(
    function(){
        $(document).on('click touchstart','li', function(){
            $(this).fadeOut('slow');
        });

});