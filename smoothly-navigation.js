! function () {
    var view = document.querySelector('nav.menu')
    var controller = {
        view: null,
        init: function (view) {
            let aTags = view.querySelectorAll('nav.menu>ul>li>a')

            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick = function (x) {
                    x.preventDefault()
                    let top = document.querySelector(x.currentTarget.getAttribute('href')).offsetTop
                    let currentTop = window.scrollY //窗口当前距顶部距离
                    let targetTop = top - 90 //要到达的位置				
                    var coords = {
                        y: currentTop
                    }; //起始位置
                    var tween = new TWEEN.Tween(coords) //指定起始位置
                        .to({
                            y: targetTop
                        }, 1000) //结束位置和时间
                        .easing(TWEEN.Easing.Quartic.InOut) //缓动类型 在源文件中查找
                        .onUpdate(function () {
                            window.scrollTo(0, coords.y)
                        })
                        .start();
                }
            }
        }
    }
    controller.init(view)
}.call()