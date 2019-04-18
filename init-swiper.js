! function () {
  var view = document.querySelector('#mySwiper')
  var controller = {
    view: null,
    swiper: null,
    swiperOptions: {
      // 循环模式选项
      loop: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    },
    init: function (view) {
      this.view = view
      this.initSwiper()
    },
    initSwiper: function () {
      this.swiper = new Swiper(
        view.querySelector('.swiper-container'),
        this.swiperOptions
      )
    }
  }
  controller.init(view)
}.call()