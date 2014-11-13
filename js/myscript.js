// start of scroll header load
var homePage = function () {
        var headerElement = $("#header-container");
        var fixedElement = $("#lower-container");
        var fixedElementPosition = fixedElement.position().top;
        var headerElementHeight = headerElement.height();

        $(window).scroll(function () {
            var currentWindowTop = $(this).scrollTop();

            if (currentWindowTop === 0) {
                headerElement.stop('header').css('position', 'absolute').animate({
                    up: '0',
                    height: headerElementHeight,
                    backgroundColor: 'rgba(44,45,47,0.4)'
                }, {
                    queue: 'header'
                });
                headerElement.dequeue('header');
            } else if (currentWindowTop >= fixedElementPosition) {
                headerElement.stop('header').css('position', 'fixed').animate({
                    up: '0',
                    height: headerElementHeight,
                    backgroundColor: 'rgba(44,45,47,0.8)'
                }, {
                    queue: 'header'
                });
                headerElement.dequeue('header');
            } else {
                if (headerElement.is(':visible')) {
                    headerElement.animate({
                        up: '0',
                        height: '0'
                    }, {
                        queue: 'header'
                    });
                    headerElement.dequeue('header');
                }
            }
            console.log(fixedElementPosition, currentWindowTop);
        });

        // end of scroll header load

        // start of home page slider js
        $(function () {
            var images = ["img/meThumbsUp.jpg", "img/me.jpg", "img/meFingerPoint.jpg", "img/meThinking.jpg"];

            var current_image_index = 0;
            var slider_container;

            function prev_image_index() {
                if (current_image_index < images.length - 1) {
                    return current_image_index + 1;
                } else {
                    return 0;
                }
            }

            function next_image_index() {
                if (current_image_index > 0) {
                    return current_image_index - 1;
                } else {
                    return images.length - 1;
                }
            }


            slider_container = $('#slider-container');

            for (var i = 0; i < images.length; i++) {
                var row = images[i];
                var class_name = 'slider-img slider-off';

                if (i == 0) {
                    class_name = 'slider-img';
                }

                var img = $('<img>').attr('src', row).addClass(class_name);
                slider_container.append(img);
            };

            $('#prev').click(function () {

                var prev_index = prev_image_index();
                var current_image = $(slider_container.find('img.slider-img')[current_image_index]);
                var prev_image = $(slider_container.find('img.slider-img')[prev_index]);

                current_image.animate({
                    left: "-=380"
                }, 700, function () {
                    current_image.addClass('slider-off').removeClass('current').attr('style', '');
                });

                prev_image.addClass('slider-off');
                prev_image.animate({
                    left: "0"
                }, 700, function () {
                    prev_image.removeClass('slider-off').removeClass('current').attr('stlyle', '');
                });

                current_image_index++;
                if (current_image_index == images.length) {
                    current_image_index = 0;
                }
            });

            $('#next').click(function () {

                var next_index = next_image_index();
                var current_image = $(slider_container.find('img.slider-img')[current_image_index]);
                var next_image = $(slider_container.find('img.slider-img')[next_index]);

                current_image.animate({
                    left: "380"
                }, 700, function () {
                    current_image.addClass('slider-off').removeClass('current').attr('style', '');
                });

                next_image.addClass('slider-back');
                next_image.animate({
                    left: "0"
                }, 700, function () {
                    next_image.removeClass('slider-off').removeClass('slider-back').removeClass('current').attr('stlyle', '');
                });

                current_image_index--;
                if (current_image_index == -1) {
                    current_image_index = images.length - 1;
                }
            });
        });

        // end of home page slider js


        // start of home page auto scroll to div on click

        $('#btn-test').on('click', function scroll_to(div) {
            $('html, body').animate({
                scrollTop: $('#image-text').offset().top
            }, 1000);
        });
    }
    // end of home page auto scroll to div on click
    // start of about page

// arrow page jump start

/*
            // page 1 auto scroll to page 3
            $('#pg1-up-arrow').on('click', function scroll_to(div) {
                $('html, body').animate({
                    scrollTop : $('#page3-scroll-btn').offset().top
                }, 1000);
            });
            // page 1 auto scroll to page 2
            $('#pg1-down-arrow').on('click', function scroll_to(div) {
                $('html, body').animate({
                    scrollTop : $('#page2-scroll-btn').offset().top
                }, 1000);
            });
            // page 2 auto scroll to page 1
            $('#pg2-up-arrow').on('click', function scroll_to(div) {
                $('html, body').animate({
                    scrollTop : $('#page1-scroll-btn').offset().top
                }, 1000);
            });
            // page 2 auto scroll to page 3
            $('#pg2-down-arrow').on('click', function scroll_to(div) {
                $('html, body').animate({
                    scrollTop : $('#page3-scroll-btn').offset().top
                }, 1000);
            });
            // page 3 auto scroll to page 2
            $('#pg3-up-arrow').on('click', function scroll_to(div) {
                $('html, body').animate({
                    scrollTop : $('#page2-scroll-btn').offset().top
                }, 1000);
            });
            // page 3 auto scroll to page 1
            $('#pg3-down-arrow').on('click', function scroll_to(div) {
                $('html, body').animate({
                    scrollTop : $('#page1-scroll-btn').offset().top
                }, 1000);
            });
        */
var aboutPage = function () {
        function animateBody(e) {
            console.log(e.data.divId);
            $('body').animate({
                scrollTop: $('#' + e.data.divId + ' .quick-scroll').offset().top
            }, 1000);
        }

        var someArray = [
            {
                btn: 'pg1-up-arrow',
                container: 'page3-container'
            },
            {
                btn: 'pg1-down-arrow',
                container: 'page2-container'
            },
            {
                btn: 'pg2-up-arrow',
                container: 'page1-container'
            },
            {
                btn: 'pg2-down-arrow',
                container: 'page3-container'
            },
            {
                btn: 'pg3-up-arrow',
                container: 'page2-container'
            },
            {
                btn: 'pg3-down-arrow',
                container: 'page1-container'
            }
        ]

        $(function () {
            someArray.forEach(function (row) {
                $('#' + row.btn).on('click', {
                    divId: row.container
                }, animateBody);
            });
        });
    }
    // end of arrow page jump

// end of about page js

/*
var images = [{
'url' : 'img/meFingerPoint.jpg',
'text' : 'That\'s Me, one finger Pointing at you and three pointing back at me.'
}, {
'url' : 'http://placehold.it/350x200/1&text=1',
'text' : 'SEND FLOWERS JUST BECAUSE'
}, {
'url' : 'img/3/event1.png',
'text' : 'MAKE YOUR EVENT'
}];

var current_image_index = 0;
var slider_container;

function prev_image_index() {
if (current_image_index < images.length - 1) {
return current_image_index + 1;
} else {
return 0;
}
}

function next_image_index() {
if (current_image_index > 0) {
return current_image_index - 1;
} else {
return images.length - 1;
}
}

$(function() {
slider_container = $('#slider-container');

for (var i = 0; i < images.length; i++) {
var row = images[i];
var class_name = 'slider-img slider-off';

if (i == 0) {
class_name = 'slider-img';
}
var img = $('<img>').attr('src', row['url']);
var img_text = $('<p>').html(row['text']);
var image_container = $('<div>').addClass(class_name)
image_container.append(img).append(img_text);
slider_container.append(image_container);
};

$('#prev').click(function() {
var prev_index = prev_image_index();
var current_image = $(slider_container.find('.slider-img')[current_image_index]);
var prev_image = $(slider_container.find('.slider-img')[prev_index]);

current_image.animate({
left : "-=995"
}, 1000, function() {
current_image.addClass('slider-off').removeClass('current').attr('style', '');
});

prev_image.addClass('slider-off');
prev_image.animate({
left : "0"
}, 1000, function() {
prev_image.removeClass('slider-off').removeClass('current').attr('stlyle', '');
});

current_image_index++;
if (current_image_index == images.length) {
current_image_index = 0;
}
});

$('#next').click(function() {
var next_index = next_image_index();
var current_image = $(slider_container.find('.slider-img')[current_image_index]);
var next_image = $(slider_container.find('.slider-img')[next_index]);

current_image.animate({
left : "995"
}, 1000, function() {
current_image.addClass('slider-off').removeClass('current').attr('style', '');
});

next_image.addClass('slider-back');
next_image.animate({
left : "0"
}, 1000, function() {
next_image.removeClass('slider-off').removeClass('slider-back').removeClass('current').attr('stlyle', '');
});

current_image_index--;
if (current_image_index == -1) {
current_image_index = images.length - 1;
}
});
});
// end of home page slider js*/

// contact page start
var contactPage = function () {
        $('#btn-mail').on('click', function () {
            $('#contactForm').slideToggle({
                'width': 'toggle'
            }, 1000);
        });
    }
    // contact page end