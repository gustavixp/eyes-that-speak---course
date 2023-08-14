const hamb = document.querySelector(".hamb");
const nav = document.querySelector(".nav");

hamb.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !hamb.contains(e.target)) {
        nav.classList.remove("active");
    }
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-                  G O   T O                  -=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth",
        });
    });
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-                S W I P E R                  -=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// document.addEventListener("DOMContentLoaded", function () {
//     var swiper = new Swiper(".swiper-container", {
//         slidesPerView: 1,
//         spaceBetween: 10,
//         loop: true,
//         disableOnInteraction: false,
//         autoplay: {
//             delay: 2000,
//         },
//         navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//         },
//     });

//     // Dynamically populate the images
//     var swiperWrapper = document.querySelector(".swiper-wrapper");
//     for (var i = 1; i <= 10; i++) {
//         var slide = document.createElement("div");
//         slide.classList.add("swiper-slide");
//         var img = document.createElement("img");
//         img.src = "assets/gallery-imgs/img-" + (i < 10 ? "0" + i : i) + ".jpg";
//         slide.appendChild(img);
//         swiperWrapper.appendChild(slide);
//     }

//     // Restart autoplay after user interaction
//     var timer;
//     swiper.on("touchStart", function () {
//         clearTimeout(timer);
//         swiper.autoplay.stop();
//     });
//     swiper.on("touchEnd", function () {
//         timer = setTimeout(function () {
//             swiper.autoplay.start();
//         }, 2000);
//     });
//     swiper.on("slideChangeTransitionEnd", function () {
//         timer = setTimeout(function () {
//             swiper.autoplay.start();
//         }, 2000);
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    var swiper;

    function setSwiper() {
        var windowWidth = window.innerWidth;

        if (windowWidth >= 1440) {
            swiper = new Swiper(".swiper-container", {
                slidesPerView: 4,
                spaceBetween: 10,
                loop: true,
                centeredSlides: true,
                autoplay: {
                    delay: 2500, // Change the delay as per your preference (in milliseconds)
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        } else if (windowWidth > 800) {
            swiper = new Swiper(".swiper-container", {
                slidesPerView: 3,
                spaceBetween: 10,
                centeredSlides: true,
                loop: true,
                autoplay: {
                    delay: 2500, // Change the delay as per your preference (in milliseconds)
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        } else {
            swiper = new Swiper(".swiper-container", {
                slidesPerView: 1,
                spaceBetween: 10,
                loop: true,
                autoplay: {
                    delay: 2500, // Change the delay as per your preference (in milliseconds)
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        }
    }

    setSwiper();

    // Dynamically populate the images
    var swiperWrapper = document.querySelector(".swiper-wrapper");
    for (var i = 1; i <= 10; i++) {
        var slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        var img = document.createElement("img");
        img.src = "assets/gallery-imgs/img-" + (i < 10 ? "0" + i : i) + ".jpg";
        slide.appendChild(img);
        swiperWrapper.appendChild(slide);
    }

    // Update swiper on window resize
    window.addEventListener("resize", function () {
        swiper.destroy();
        swiperWrapper.innerHTML = "";
        setSwiper();
        for (var i = 1; i <= 10; i++) {
            var slide = document.createElement("div");
            slide.classList.add("swiper-slide");
            var img = document.createElement("img");
            img.src =
                "assets/gallery-imgs/img-" + (i < 10 ? "0" + i : i) + ".jpg";
            slide.appendChild(img);
            swiperWrapper.appendChild(slide);
        }
    });

    // Restart autoplay after user interaction
    var timer;
    swiper.on("touchStart", function () {
        clearTimeout(timer);
        swiper.autoplay.stop();
    });
    swiper.on("touchEnd", function () {
        timer = setTimeout(function () {
            swiper.autoplay.start();
        }, 2000);
    });
    swiper.on("slideChangeTransitionEnd", function () {
        timer = setTimeout(function () {
            swiper.autoplay.start();
        }, 2000);
    });
});
