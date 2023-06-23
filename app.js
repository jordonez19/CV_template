$(document).ready(function(){
    $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    });

    // smooth scrolling 

    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },
            500, 
            'linear'
        );
    });
});

    const $form = document.querySelector('#form');

    $form.addEventListener('submit', handleSubmit)

    async function handleSubmit(event) {
        event.preventDefault();
        const form = new FormData(this);
        const response = await fetch(this.action, {
            method: this.method,
            body: form,
            headers: {
                'Accept': 'application/json'
            }
        })
        if(response.ok){
            this.reset()
            alert("Thanks for your message! I'll be reaching out very soon!.")
        }
    }


/* animation */
    

      //---------------------------------------------------------------------------
      /* up */
      // Obtener los elementos que se animarán
      const scrollAnimationElems =
        document.querySelectorAll(".slide-animation-up");

      // Función para comprobar si un elemento está visible en la ventana gráfica
      function isElemVisible(elem) {
        const bounding = elem.getBoundingClientRect();
        return (
          bounding.top >= 0 &&
          bounding.left >= 0 &&
          bounding.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          bounding.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      // Función para comprobar si un elemento debe activar la animación
      function checkScrollAnimation() {
        scrollAnimationElems.forEach((elem) => {
          if (isElemVisible(elem)) {
            elem.classList.add("active");
          } else {
            elem.classList.remove("active");
          }
        });
      }

      // Agregar un evento de scroll al documento para comprobar la animación en intervalos regulares
      let scrollAnimationInterval = null;
      function startScrollAnimationInterval() {
        scrollAnimationInterval = setInterval(checkScrollAnimation, 100);
      }
      function stopScrollAnimationInterval() {
        clearInterval(scrollAnimationInterval);
      }
      document.addEventListener(
        "DOMContentLoaded",
        startScrollAnimationInterval
      );
      document.addEventListener("scroll", startScrollAnimationInterval);
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          stopScrollAnimationInterval();
        } else {
          startScrollAnimationInterval();
        }
      });

      //---------------------------------------------------------------------------
      /* right */
      const slideAnimationElems = document.querySelectorAll(".slide-animation");

      function checkSlideAnimation() {
        slideAnimationElems.forEach((elem) => {
          if (isElemVisible(elem)) {
            elem.classList.add("active");
          } else {
            elem.classList.remove("active");
          }
        });
      }

      function startSlideAnimationInterval() {
        slideAnimationInterval = setInterval(checkSlideAnimation, 100);
      }

      document.addEventListener(
        "DOMContentLoaded",
        startSlideAnimationInterval
      );
      document.addEventListener("scroll", checkSlideAnimation);
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          clearInterval(slideAnimationInterval);
        } else {
          startSlideAnimationInterval();
        }
      });

      //---------------------------------------------------------------------------
      /* left */
      const slideAnimationLeftElems = document.querySelectorAll(
        ".slide-animation-left"
      );

      function checkSlideAnimationLeft() {
        slideAnimationLeftElems.forEach((elem) => {
          if (isElemVisible(elem)) {
            elem.classList.add("active");
          } else {
            elem.classList.remove("active");
          }
        });
      }

      function startSlideAnimationLeftInterval() {
        slideAnimationLeftInterval = setInterval(checkSlideAnimationLeft, 100);
      }

      document.addEventListener(
        "DOMContentLoaded",
        startSlideAnimationLeftInterval
      );
      document.addEventListener("scroll", checkSlideAnimationLeft);
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          clearInterval(slideAnimationLeftInterval);
        } else {
          startSlideAnimationLeftInterval();
        }
      });
      /* down */
      const slideAnimationDownElems = document.querySelectorAll(
        ".slide-animation-down"
      );

      function checkSlideAnimationDown() {
        slideAnimationDownElems.forEach((elem) => {
          if (isElemVisible(elem)) {
            elem.classList.add("active");
          } else {
            elem.classList.remove("active");
          }
        });
      }

      function startSlideAnimationDownInterval() {
        slideAnimationDownInterval = setInterval(checkSlideAnimationDown, 100);
      }

      document.addEventListener(
        "DOMContentLoaded",
        startSlideAnimationDownInterval
      );
      document.addEventListener("scroll", checkSlideAnimationDown);
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          clearInterval(slideAnimationDownInterval);
        } else {
          startSlideAnimationDownInterval();
        }
      });
