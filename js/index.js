$(document).ready(function () {
        $(function () {


            //Card navigation
            //1-shows , 2-books, 3 -events, 4 - places, 5 - about
        

            let isExpanded = false;

            $("._05").click(function() {
                if (isExpanded) {
                    $(".card_controlls").animate({
                        width: '165px',  
                        height: '200px' 
                    }, 500);  
                    $(".card").animate({
                        width: '165px'  
                    }, 500);
                    $(".places, .shows, .events, .book, .about, .bg_im, .places_imagesg").hide();
                } else {
                    $(".card_controlls").animate({
                        width: '710px',   // Новая 
                        height: '860px' // Новая 
                    }, 500);  
                    $(".card").animate({
                        width: '100vw',  // Новая
                        justifyContent: 'space-between'
                    }, 500);
                    console.log("about")
                    $(".places, .shows, .events, .book, .about, .places_images").hide();
                    $(".bg_img").show();
                }
                isExpanded = !isExpanded;
            });

            $("._01").click(function() {


                $(".shows, .video_box").toggle();
                $(".book, .events, .places, .about, .bg_img, .places_images").hide();
                
                //card animation
                $(".card_controlls").animate({
                    width: '165px',  
                    height: '200px' 
                }, 500);  
                $(".card").animate({
                    width: '165px'  
                }, 500);
                
            });

            $("._02").click(function() {

                $(".book, .places_images").toggle();
                $(".shows, .events, .video_box, .places, .about, .bg_img,.places_images").hide();
                //card animation
                $(".card_controlls").animate({
                    width: '165px',  
                    height: '200px' 
                }, 500);  
                $(".card").animate({
                    width: '165px'  
                }, 500);
            });

            $("._03").click(function() {

                $(".events").toggle();
                $(".shows, .book, .places,.video_box, .about, .bg_img,.places_images").hide();
                //card animation
                $(".card_controlls").animate({
                    width: '165px',  
                    height: '200px' 
                }, 500);  
                $(".card").animate({
                    width: '165px'  
                }, 500);
            });

            $("._04").click(function() {
                
                $(" .places_images, .places").toggle();
                $(".shows, .events,.video_box, .book, .about, .bg_img").hide();
                //card animation
                $(".card_controlls").animate({
                    width: '165px',  
                    height: '200px' 
                }, 500);  
                $(".card").animate({
                    width: '165px'  
                }, 500);
            }); 


            //tab actions 

            $(".item").click(function() {
                $(".item").removeClass("item_active");
                $(this).addClass("item_active");
                
            }); 



            //events scroll   
            
            $(document).ready(function() {
                const elements = [
                    $('#event_countenir_01'),
                    $('#event_countenir_02'),
                    $('#event_countenir_03'),
                    $('#event_countenir_04'),
                    $('#event_countenir_05'),
                    $('#event_countenir_06'),
                    $('#event_countenir_07'),
                    $('#event_countenir_08'),
                    $('#event_countenir_09'),
                    $('#event_countenir_10'),
                    $('#event_countenir_11'),
                    $('#event_countenir_12'),
                    $('#event_countenir_13'),
                    $('#event_countenir_14')
                ];
                const parent =[
                    $('.events'),
                ] 

            
            function updatePosition() {
                const scrollY = $(window).scrollTop(); // Текущая позиция скролла
        
                const offsetFactors = [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4, 2.6];
                const rotation = [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24, 0.26];
            

        
                elements.forEach(function(element, index) {
                    const angle = scrollY * rotation[index]; 
                    element.css({
                        'right': `${scrollY * offsetFactors[index]}px`,
                        'transform': `rotateY(${angle}deg)`,
                    });
                    // parent.css({
                    //     'top': `${scrollY * offsetFactors[index]}px`
                    // });
                });
            }
        
            $(window).on('scroll', updatePosition);

                //buttons
                $('#id1').click(function() {
                    $('html, body').animate({
                        scrollTop: 0 // Прокрутка страницы до верха
                    }, 'slow'); // 'slow' - время анимации (можно указать число миллисекунд)
                });

                $('#id2').click(function() {
                    $('html, body').animate({
                        scrollTop: 160 // Прокрутка страницы до верха
                    }, 'slow'); // 'slow' - время анимации (можно указать число миллисекунд)
                });

                $('#id3').click(function() {
                    $('html, body').animate({
                        scrollTop: 310 // Прокрутка страницы до верха
                    }, 'slow'); // 'slow' - время анимации (можно указать число миллисекунд)
                });

                $('#id4').click(function() {
                    $('html, body').animate({
                        scrollTop: 460 // Прокрутка страницы до верха
                    }, 'slow'); // 'slow' - время анимации (можно указать число миллисекунд)
                });

                $('#id5').click(function() {
                    $('html, body').animate({
                        scrollTop: 610 // Прокрутка страницы до верха
                    }, 'slow'); // 'slow' - время анимации (можно указать число миллисекунд)
                });

                $('#id6').click(function() {
                    $('html, body').animate({
                        scrollTop: 760 // Прокрутка страницы до верха
                    }, 'slow'); // 'slow' - время анимации (можно указать число миллисекунд)
                });


                $('#id7').click(function() {
                    $('html, body').animate({
                        scrollTop: 910 // Прокрутка страницы до верха
                    }, 'slow'); // 'slow' - время анимации (можно указать число миллисекунд)
                });

                $('#id8').click(function() {
                    $('html, body').animate({
                        scrollTop: 1060 // Прокрутка страницы до верха
                    }, 'slow'); // 'slow' - время анимации (можно указать число миллисекунд)
                });

                $('#id9').click(function() {
                    $('html, body').animate({
                        scrollTop: 1210 // Прокрутка страницы до верха
                    }, 'slow'); // 'slow' - время анимации (можно указать число миллисекунд)
                });

                $('#id10').click(function() {
                    $('html, body').animate({
                        scrollTop: 1360 // Прокрутка страницы до верха
                    }, 'slow'); // 'slow' - время анимации (можно указать число миллисекунд)
                });

                $('#id11').click(function() {
                    $('html, body').animate({
                        scrollTop: 1510 // Прокрутка страницы до верха
                    }, 'slow'); // 'slow' - время анимации (можно указать число миллисекунд)
                });

                $('#id12').click(function() {
                    $('html, body').animate({
                        scrollTop: 1660 // Прокрутка страницы до верха
                    }, 'slow'); // 'slow' - время анимации (можно указать число миллисекунд)
                });

                $('#id13').click(function() {
                    $('html, body').animate({
                        scrollTop: 1810 // Прокрутка страницы до верха
                    }, 'slow'); // 'slow' - время анимации (можно указать число миллисекунд)
                });

                $('#id14').click(function() {
                    $('html, body').animate({
                        scrollTop: 2110 // Прокрутка страницы до верха
                    }, 'slow'); // 'slow' - время анимации (можно указать число миллисекунд)
                });


                
            });
            
            //places scroll   

            const elements_places = [
                $('#places_01'),
                $('#places_02'),
                $('#places_03'),
                $('#places_04'),
                $('#places_05'),
                $('#places_06'),
                $('#places_07'),
                $('#places_08'),
                $('#places_09'),
                $('#places_10'),
                $('#places_11'),
                $('#places_12'),
                $('#places_13'),
                $('#places_14'),
                $('#places_15')
            ];
            
            // Предположим, что у вас есть только один родительский элемент с классом .places
            const parent = $('.places');
            
            function updatePosition2() {
                const scrollY = $(window).scrollTop(); // Текущая позиция скролла
            
                const offsetFactors = [0, 0.5, 0.7, 0.9, 1.1, 1.3, 1.5, 1.7, 1.9, 2.1, 2.3, 2.5, 2.7, 2.9, 3.1, 3.3, 3.5, 3.7, 3.9];
                const rotation = [0, 0.5, 0.7, 0.9, 1.1, 1.3, 1.5, 1.7, 1.9, 2.1, 2.3, 2.5, 2.7, 2.9, 3.1, 3.3, 3.5, 3.7, 3.9];
            
                elements_places.forEach(function(element, index) {
                    const angle = scrollY * rotation[index]; 
                    element.css({
                        'bottom': `${ scrollY * offsetFactors[index]}px`,
                        'transform': `rotateX(${angle}deg)`,
                        'width':  `${scrollY * offsetFactors[index]}%`, // Исправленное выражение для ширины
                        'height': `${ 5 * scrollY * offsetFactors[index]}%`, // Исправленное выражение для ширины
                    });
                });
            }
            
            $(window).on('scroll', updatePosition2);
            

        });

});