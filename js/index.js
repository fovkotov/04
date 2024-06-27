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
                    $(".places, .shows, .events, .book, .about, .bg_img").hide();
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
                    $(".places, .shows, .events, .book, .about").hide();
                    $(".bg_img").show();
                }
                isExpanded = !isExpanded;
            });

            $("._01").click(function() {


                $(".shows").toggle();
                $(".book, .events, .places, .about, .bg_img").hide();
                
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

                $(".book").toggle();
                $(".shows, .events, .places, .about, .bg_img").hide();
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
                $(".shows, .book, .places, .about, .bg_img").hide();
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
                
                $(".places").toggle();
                $(".shows, .events, .book, .about, .bg_img").hide();
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
                    const offsetFactors1 = [0, 0.05, 0.08, 0.1, 0.12, 0.16, 0.19, 0.22, 0.25, 0.28, 0.3, 0.32, 0.35, 0.38];
                

            
                    elements.forEach(function(element, index) {
                        const angle = scrollY * offsetFactors1[index]; 
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
            
            
    


        });

});