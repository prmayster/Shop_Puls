$(document).ready(function(){
    $('.carousel__inner').slick({
    speed: 1200,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="scr/icons/chevron_left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="scr/icons/chevron_right.png"></button>',
    responsive: [
      { 
          breakpoint: 992,
          settings: {
            dots: true,
            arrows: false
          }
        }
    ]
    });

  // tab
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
      $(item).each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
      });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  // modal-pop-up_1
  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });
// modal-pop-up_2
  $('.button_mini').each(function(i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  });

  // validate-form
function validateForm (form){
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Пожалуйста введите своё имя",
        phone: "Пожалуйста введите телефон",
        email: {
          required: "Пожалуйста введите свою почту",
          email: "Не правильно введён email"
        }
      }
    });
  }

  validateForm ('#consultation-form');
  validateForm ('#consultation form');
  validateForm ('#order form');

  // mask-form_phone
  $('input[name=phone').mask("+380 (99) 999-99-99")
  
  // mail
  $('form').submit(function(e) {
    e.preventDefault(); //отмена стандартного поведения браузера
    $.ajax({
      type: "POST",
      url: "../scr/mailer/mailer/smart.php", //подключение обработчика
      data: $(this).serialize() //данные, которые хочу отправить на сервер+подготовка данных к отправке
    }).done(function() { //после выполнения операции, делаем ещё одну функцию
      $(this).find("input").val(""); //очистка формы input отправки
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset'); //очистка всех форм
    });
    return false;
  });

  // Smooth scroll and pageup

$(window).scroll(function() {
  if($(this).scrollTop () > 1600) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
});

// плавная скрол
$("a[href^='#']").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});

new WOW().init();

});