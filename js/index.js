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
                    $(".places, .shows, .events, .book, .about, .bg_im, .places_imagesg,.video_box").hide();
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
                    $(".places, .shows, .events, .book, .about, .places_images,.video_box").hide();
                    $(".bg_img").show();
                }
                isExpanded = !isExpanded;
            });

            $("._01").click(function() {


                $(".shows, .video_box").toggle();
                $(".book, .events, .places, .about, .bg_img, .places_images,.books_images_enter").hide();
                
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

                $(".book, .books_images_enter").toggle();
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
                $(".shows, .book, .places,.video_box, .about, .bg_img,.places_images,.books_images_enter").hide();
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
                $(".shows, .events,.video_box, .book, .about, .bg_img,.books_images_enter").hide();
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
                        scrollTop: 0 // //non
                    }, 'slow'); ///non
                });

                $('#id2').click(function() {
                    $('html, body').animate({
                        scrollTop: 160 // //non
                    }, 'slow'); ///non
                });

                $('#id3').click(function() {
                    $('html, body').animate({
                        scrollTop: 310 // //non
                    }, 'slow'); ///non
                });

                $('#id4').click(function() {
                    $('html, body').animate({
                        scrollTop: 460 // //non
                    }, 'slow'); ///non
                });

                $('#id5').click(function() {
                    $('html, body').animate({
                        scrollTop: 610 // //non
                    }, 'slow'); ///non
                });

                $('#id6').click(function() {
                    $('html, body').animate({
                        scrollTop: 760 // //non
                    }, 'slow'); ///non
                });


                $('#id7').click(function() {
                    $('html, body').animate({
                        scrollTop: 910 // //non
                    }, 'slow'); ///non
                });

                $('#id8').click(function() {
                    $('html, body').animate({
                        scrollTop: 1060 // //non
                    }, 'slow'); ///non
                });

                $('#id9').click(function() {
                    $('html, body').animate({
                        scrollTop: 1210 // //non
                    }, 'slow'); ///non
                });

                $('#id10').click(function() {
                    $('html, body').animate({
                        scrollTop: 1360 
                    }, 'slow'); 
                });

                $('#id11').click(function() {
                    $('html, body').animate({
                        scrollTop: 1510 // //non
                    }, 'slow'); ///non
                });

                $('#id12').click(function() {
                    $('html, body').animate({
                        scrollTop: 1660 // //non
                    }, 'slow'); ///non
                });

                $('#id13').click(function() {
                    $('html, body').animate({
                        scrollTop: 1810 // //non
                    }, 'slow'); ///non
                });

                $('#id14').click(function() {
                    $('html, body').animate({
                        scrollTop: 2110 // //non
                    }, 'slow'); ///non
                });

                $('#id101').click(function() {
                    $('html, body').animate({
                        scrollTop: 0 // //non
                    }, 'slow'); ///non
                });

                $('#id201').click(function() {
                    $('html, body').animate({
                        scrollTop: 120 // //non
                    }, 'slow'); ///non
                });

                $('#id301').click(function() {
                    $('html, body').animate({
                        scrollTop: 300 // //non
                    }, 'slow'); ///non
                });

                $('#id102').click(function() {
                    $('html, body').animate({
                        scrollTop: 2 // //non
                    }, 'slow'); ///non
                });

                $('#id202').click(function() {
                    $('html, body').animate({
                        scrollTop: 120 // //non
                    }, 'slow'); ///non
                });

                $('#id302').click(function() {
                    $('html, body').animate({
                        scrollTop: 300 // //non
                    }, 'slow'); ///non
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
                const rotation = [0, 1, 2, 3, 4, 1.3, 1.5, 1.7, 1.9, 2.1, 2.3, 2.5, 2.7, 2.9, 3.1, 3.3, 3.5, 3.7, 3.9];
            
                elements_places.forEach(function(element, index) {
                    const angle = scrollY * rotation[index]; 
                    element.css({
                        'bottom': `${ scrollY * offsetFactors[index]}px`,
                        'transform': `rotateX(${angle}deg)`,
                        'width':  `${scrollY * offsetFactors[index]}%`, // Исправленное выражение для ширины
                    });
                });
            }
            
            $(window).on('scroll', updatePosition2);
    
            

            //book scroll   
            
            $(document).ready(function() {
                const elements_book = [
                    $('#book_29'),
                    $('#book_28'),
                    $('#book_27'),
                    $('#book_26'),
                    $('#book_25'),
                    $('#book_24'),
                    $('#book_23'),
                    $('#book_22'),
                    $('#book_21'),
                    $('#book_20'),
                    $('#book_19'),
                    $('#book_18'),
                    $('#book_17'),
                    $('#book_16'),
                    $('#book_15'),
                    $('#book_14'),
                    $('#book_13'),
                    $('#book_12'),
                    $('#book_11'),
                    $('#book_10'),
                    $('#book_09'),
                    $('#book_08'),
                    $('#book_07'),
                    $('#book_06'),
                    $('#book_05'),
                    $('#book_04'),
                    $('#book_03'),
                    $('#book_02'),
                    $('#book_01')
                ];
            
                const parent = $('.book'); 
            
                function updatePosition() {
                    const scrollY = $(window).scrollTop();
                    const scaleFactors = [
                        1, 
                        1.01, 
                        1.02, 
                        1.03, 
                        1.04, 
                        1.05, 
                        1.06, 
                        1.07, 
                        1.08, 
                        1.09, 
                        1.10, 
                        1.11, 
                        1.12, 
                        1.13, 
                        1.14, 
                        1.15, 
                        1.16, 
                        1.17, 
                        1.18, 
                        1.19, 
                        1.20, 
                        1.21, 
                        1.22, 
                        1.23, 
                        1.24, 
                        1.25, 
                        1.26, 
                        1.27, 
                        1.28, 
                        1.29, 
                    ];
                    const rotation = [
                        0, 
                        0.3, 
                        0.4, 
                        0.5, 
                        0.6, 
                        0.7, 
                        0.8, 
                        0.9, 
                        1.0, 
                        1.1, 
                        1.2, 
                        1.3, 
                        1.4, 
                        1.5, 
                        1.6, 
                        1.7, 
                        1.8, 
                        1.9, 
                        2.0, 
                        2.1, 
                        2.2, 
                        2.3, 
                        2.4, 
                        2.5, 
                        2.6, 
                        2.7, 
                        2.8, 
                        2.9, 
                        3.0
                    ];
            
                    elements_book.forEach(function(element, index) {
                        const scale = 1 + scrollY * (scaleFactors[index] - 1);
                        const angle = scrollY * rotation[index]; 
            
                        element.css({
                            'transform': `scale(${scale}) rotateY(${angle}deg)` 
                        });
                    });
            
                  
                }
            
                $(window).on('scroll', function() {
                    updatePosition();
                });
            });
            
    });
});