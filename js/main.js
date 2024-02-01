// Variables
// Cart Variables
let cartCounter = 0;
cartCounterBlock = $(".nav__items_cart .counter");
cartProductPriceContainer = $(".JS__productPriceContainerInCartModal");
productPriceText = $(".header__price_newPrice").eq(0).text();

// Color Changer Variables
let colorChangerCurrentText = $(".UI-colorChanger__item.active").eq(0).text();

function cartCounterHandler(count = 0) {
  cartCounter = count;
  cartCounterBlock.text(count);
  if (cartCounter <= 0) {
    cartCounterBlock.parent().removeClass("openned");
  } else {
    cartCounterBlock.parent().addClass("openned");
    $(".JS__productContainerInCartModal").addClass("openned");
    cartProductPriceContainer.text(productPriceText);
  }
}

$(document).ready(function () {
  $(document).on("click", ".nav__items_menu", function () {
    $(".modal--all .modal__content").hide();
    $(".modal--all .modal__content.modal__content--menu").show();
    $(".modal--all").addClass("openned");
  });
  // Modal - Open Track Order
  $(document).on("click", ".JS__openTrackOrder", function () {
    $(".modal--all .modal__content").hide();
    $(".modal--all .modal__content.modal__content--trackOrder").show();
    $(".modal--all").addClass("openned");
  });
  // Modal - Open Contact
  $(document).on("click", ".JS__openContactModal", function () {
    $(".modal--all .modal__content").hide();
    $(".modal--all .modal__content.modal__content--contact").show();
    $(".modal--all").addClass("openned");
  });
  $(document).on("click", ".JS__openSizeModal", function () {
    $(".modal--all .modal__content").hide();
    $(".modal--all .modal__content.modal__content--size").show();
    $(".modal--all").addClass("openned");
  });

  // Modal - Open Cart
  $(document).on("click", ".JS__openCartModal, .JS__addToCart", function () {
    $(".modal--all .modal__content").hide();
    $(".modal").removeClass("openned");
    $(".modal--cart").addClass("openned");
    if ($(this).hasClass("JS__addToCart")) {
      cartCounterHandler(1);
    }
  });
  // Modal - Close Modals
  $(document).on("click", ".nav__items_close, .JS__closeModals", function () {
    $(".modal").removeClass("openned");
    $(".modal--all .modal__content").hide();
  });

  $(".accordion-param__header_item").on("click", function (e) {
    e.preventDefault();
    let that = $(this);
    if (!$(".accordion-param").hasClass("accordion-param__show")) {
      $(".accordion-param").removeClass("accordion-param__show");
    }
    that
      .closest(".accordion-param")
      .find(".accordion-param__body")
      .slideToggle();
    that.closest(".accordion-param").toggleClass("accordion-param__show");
  });

  $(".size").on("click", function () {
    var selectedSize = $(this).text();

    // console.log(selectedSize.slice(1, 4));

    $(".JS__sizeContainer").text(`${selectedSize.slice(0, 12)}`);
  });

  $(".color__img").on("click", function () {
    $(".JS__colorContainer").text($(this).attr("id"));
  });

  let textLink = $(".accordion-param__body_link");
  textLink.on("click", function (e) {
    e.preventDefault();
    let blockValue = $(this).text();
    $(this)
      .closest(".accordion-param")
      .find(".accordion-param__header_item p")
      .html(blockValue);

    if (!$(".accordion-param").hasClass("accordion-param__show")) {
      $(".accordion-param").removeClass("accordion-param__show");
    }
    $(this).closest(".accordion-param__body").slideToggle();
    $(this).closest(".accordion-param").toggleClass("accordion-param__show");
  });

  $(".accordion__header").on("click", function (e) {
    e.preventDefault();
    var that = $(this);
    if (!$(".accordion__item").hasClass("accordion__item_show")) {
      that.closest(".accordion__body").slideUp();
      $(".accordion__item").removeClass("accordion__item_show");
    }
    that.closest(".accordion__item").toggleClass("accordion__item_show");
    that.next().slideToggle();
  });

  new Swiper(".sectionSwiper__swiper > .swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  new Swiper(".sectionReviews__swiper > .swiper", {
    autoHeight: true,
    allowTouchMove: false,
    pagination: {
      el: ".swiper-pagination",
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
      clickable: true,
    },
  });

  $(".chooseCard a").on("click", function (e) {
    e.preventDefault();
    $(".chooseCard a").removeClass("hide");
    $(this).toggleClass("hide");
  });

  $(".footer__info_btn").on("click", function (e) {
    e.preventDefault();
    if ($(".footer__info_text").hasClass("show")) {
      $(".footer__info_btn").html("Read more");
      $(this)
        .closest(".footer__info")
        .find(".footer__info_text")
        .removeClass("show");
    } else {
      $(".footer__info_btn").html("Read less");
      $(this)
        .closest(".footer__info")
        .find(".footer__info_text")
        .addClass("show");
    }
  });

  let element = $("#color");
  element.on("change", function () {
    let element = $("#color");

    if (element.val() == "green") {
      element
        .closest(".footer__bottomMenu_colors")
        .css("background", "#ADFF86");
    } else if (element.val() == "yellow") {
      element
        .closest(".footer__bottomMenu_colors")
        .css("background", "#ffeb3b");
    }
  });

  const swiper = $(".swiper-container")[0].swiper;
  var colorImages = $(".sectionSwiper__colors .sectionSwiper__block a");

  colorImages.on("click", function () {
    let index = colorImages.index($(this));

    function getUpdatedNumber(number) {
      switch (number) {
        case 0:
          return 2;
        case 1:
          return 3;
        case 2:
          return 4;
        case 3:
          return 5;
          
      }
    }

    swiper.slideTo(getUpdatedNumber(index));
  });
});

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  slidesPerView: 1,
  slidesPerGroup: 1,
  direction: "horizontal",
  loop: true,

  // autoplay: {
  //   delay: 3000,
  // },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  a11y: {
    paginationBulletMessage: "Перейти на слайд {{index}}",
  },
});

var timerElement = $(".timer");
var timer = timerElement.text().split(":");
var hours = parseInt(timer[0], 10);
var minutes = parseInt(timer[1], 10);
var seconds = parseInt(timer[2], 10);

var interval = setInterval(function () {
  if (seconds > 0) {
    seconds--;
  } else {
    if (minutes > 0) {
      minutes--;
      seconds = 59;
    } else {
      if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
      } else {
        clearInterval(interval);
      }
    }
  }

  timerElement.text(pad(hours) + ":" + pad(minutes) + ":" + pad(seconds));
}, 1000);

function pad(value) {
  return value < 10 ? "0" + value : value;
}

document.querySelectorAll(".color__img").forEach(function (element) {
  element.onclick = function () {
    document
      .querySelectorAll(".color__img")
      .forEach((el) => el.classList.remove("color__img_active"));
    this.classList.add("color__img_active");
  };
});

function showLoader() {
  document.getElementById("loadButton").style.display = "none";
  document.getElementById("loader").style.display = "block";
}

$(".header__size_items .size").on("click", function () {
  $(".header__size_items .size").removeClass("active");
  $(this).addClass("active");
});






// Получаем ссылку на элементы HTML
const myImage = document.getElementById("myImage");
const black = document.getElementById("black");
const white = document.getElementById("white");
const red = document.getElementById("red");
const green = document.getElementById("green");

// Создаем объект, который будет сопоставлять кнопки с изображениями
const buttonImageMap = {
    black: "local/assets/images/slide2.webp",
    white: "local/assets/images/slide1.webp",
    red: "local/assets/images/slide3.webp",
    green: "local/assets/images/slide4.webp"
};

// Добавляем обработчики событий для каждой кнопки
black.addEventListener("click", () => changeImage("black"));
white.addEventListener("click", () => changeImage("white"));
red.addEventListener("click", () => changeImage("red"));
green.addEventListener("click", () => changeImage("green"));

// Функция для изменения изображения
function changeImage(buttonId) {
    const imagePath = buttonImageMap[buttonId];
    myImage.src = imagePath;
    myImage.alt = `Изображение ${buttonId.split("button")[1]}`;
}

