$(function()
{
    var button = $('.button');

    function switchToNext()
    {
        var _this = $(this);
        
        if(_this.hasClass('active'))
            return false;
        else
        {
            $('.button.active').removeClass('active');
            _this.addClass('active');
        }
    }

    button.on('click',switchToNext);

    $("body").keypress(function(e){
        ;
        // h = 104
        // l = 108
        
        key = e.which;
        switch (key) {
            case 104:
                console.log('right');
                current = $('.button.active');
                current.removeClass('active');
                current.next().addClass('active');
                break;
            case 108:
                console.log('left');
                current = $('.button.active');
                current.removeClass('active');
                current.prev().addClass('active');
            break;
                
            break;
        
            default:
                break;
        }
    });

});

