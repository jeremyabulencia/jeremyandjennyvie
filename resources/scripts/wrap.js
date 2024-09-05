(function($) {
    $.fn.wrap = function (options) {
        var settings = $.extend({

        },options);

        return this.each(function() {
            var $window = $(window);
            var $this = $(this);
            var closed = 0; 
            function wrap() {
                $('body').css({"overflow":"hidden"});
                $this.css({
                    "position":'fixed',
                    "top":"0px",
                    "left":"0px",
                    "width" :$window.width(),
                    "height":$window.height(),
                    "background-color":"black",
                    "opacity":"0.92",
                    "z-index":"1000",
                    "margin":"auto",
                });
                $this.append('<div class="dialog"><div class="dialog-box"><div class="dialog-box-container"><p class="dialog-box-message">You Are Cordially Invited.</p> <button class="dialog-box-button">Open</button></div></div></div>');
                $('.dialog-box').css({
                    "position":"absolute",
                    "top":($window.height()*.3)+"px",
                    "left":($window.width()*.3)+"px",
                    "background-color":"white",
                    "width":"30%",
                    "height":$window.height()*.35,
                })
                $('.dialog-box-container').css({
                    "width":"80%",
                    "margin":"auto",
                    "margin-top":($('.dialog-box').height()*.3)+"px",
                    "text-align":"center",
                    "opacity":"10"
                })
                $('.dialog-box-message').css({
                    "font-family":"Lucida Console",
                    "margin":"auto",
                })
                $('.dialog-box-button').css({
                    "margin-top":"10px",
                    "background-color":"green",
                    "color":"white",
                    "padding":"5px 3px",
                    "z-index":"10"
                })
            }
            
            wrap();
            $(".dialog-box-button").on("click",function(){
                closed = 1;
                $this.css({"display":"none"});
                $('body').css({"overflow":"auto"});
                $this.trigger('closed');
            })
            $window.resize(function(){
                if (closed != 1) {
                    wrap();
                }
            })
        });
    }
})(jQuery);