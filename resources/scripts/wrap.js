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
                    "background-color":"#000000",
                    "opacity":"0.92",
                    "z-index":"1000",
                    "margin":"auto",
                });
                $this.append('<div class="dialog"><div class="dialog-box"><div class="dialog-box-container"><p class="dialog-box-message">You Are Cordially Invited.</p> <button class="dialog-box-button">Open Invitation</button></div></div></div>');
                var $dialogBoxLeftPosition = ($window.width()*.35)+"px";
                var $dialogBoxWidthPercent = "30%";
                if ($window.width() < 750) {
                    $dialogBoxWidthPercent = "80%";
                    $dialogBoxLeftPosition = ($window.width()*.1)+"px";
                }
                $('.dialog-box').css({
                    "position":"absolute",
                    "top":($window.height()*.3)+"px",
                    "left":$dialogBoxLeftPosition,
                    "background-color":"white",
                    "width":$dialogBoxWidthPercent,
                    "height":$window.height()*.35,
                    "border-radius":"3px",
                    "background-image":"url('resources/images/wrap-background-leaves.jpg')",
                    "background-position":"auto",
                    "background-size":"cover",
                    "box-shadow": "0 0 5px #808000",
                })
                $('.dialog-box-container').css({
                    "width":"80%",
                    "margin":"auto",
                    "margin-top":($('.dialog-box').height()*.3)+"px",
                    "text-align":"center",
                    "opacity":"10",
                })
                $('.dialog-box-message').css({
                    "font-family":"Vintage",
                    "font-size":"35px",
                    "font-weight":"bolder",
                    "color":"olive",
                    "margin":"auto",
                    "text-shadow": "-1px -1px 1px green",
                })
                $('.dialog-box-button').css({
                    "margin-top":"10px",
                    "background-color":"green",
                    "color":"olive",
                    "font-weight":"bold",
                    "text-shadow":"1px 1px 3px black",
                    "padding":"5px 3px",
                    "z-index":"10",
                    "border-radius":"3px",
                    "padding":"5px 15px",
                    "border-color":"yellowgreen",
                    "box-shadow": "1px 1px 3px olive",
                })
                $('.dialog-box-button').mouseenter(function(){
                    $(this).css('color','white');
                }).mouseleave(function(){
                    $(this).css('color','olive');
                });
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