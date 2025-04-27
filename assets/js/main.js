/* =====================================================
   Resume section tabs and tab contents
===================================================== */
const resumeTabs = document.querySelector(".resume-tabs");
const resumePortfolioTabBtns = resumeTabs.querySelectorAll(".tab-btn");
const resumeTabContents = document.querySelectorAll(".resume-tab-content");

var resumeTabsNav = function(resumeTabClick){
   resumeTabContents.forEach((resumeTabContent) => {
      resumeTabContent.style.display = "none";
      resumeTabContent.classList.remove("active");
   });
   
   resumePortfolioTabBtns.forEach((resumePortfolioTabBtn) => {
      resumePortfolioTabBtn.classList.remove("active");
   });    //Remove select buttns, if this not add show all selected buttons 

   resumeTabContents[resumeTabClick].style.display = "flex";

   setTimeout(() => {
      resumeTabContents[resumeTabClick].classList.add("active");
   }, 100);
      
   
   resumePortfolioTabBtns[resumeTabClick].classList.add("active");
}

resumePortfolioTabBtns.forEach((resumePortfolioTabBtn, i) => {
   resumePortfolioTabBtn.addEventListener("click", () => {
      resumeTabsNav(i);
   });
});


/* =====================================================
   Service modal open/close function
===================================================== */
const serviceCardWithModals = document.querySelectorAll(".service-container .card-with-model");

serviceCardWithModals.forEach((serviceCardWithModal) => {
   const serviceCard = serviceCardWithModal.querySelector(".service-card");
   const serviceBackDrop = serviceCardWithModal.querySelector(".service-model-backdrop");
   const modalCloseBtn = serviceCardWithModal.querySelector(".model-close-btn");
   const serviceModal = serviceCardWithModal.querySelector(".service-model");

   serviceCard.addEventListener("click", () => {
      serviceBackDrop.style.display = "flex";

      setTimeout(() => {
         serviceBackDrop.classList.add("active");
      }, 100);

      setTimeout(() => {
         serviceModal.classList.add("active");
      }, 300);
      
   });

   modalCloseBtn.addEventListener("click", () => {
      setTimeout(() => {
         serviceBackDrop.style.display = "none";
      }, 500);

      setTimeout(() => {
         serviceBackDrop.classList.remove("active");
         serviceModal.classList.remove("active");
      }, 100);

      
   });
});



/* =====================================================
   Portfolio modals, tabs and cards
===================================================== */

// Filter portfolio cards according to portfolio tabs.
document.addEventListener("DOMContentLoaded", () => {
   const portfolioTabs = document.querySelector(".portfolio-tabs");
   const portfolioTabBtns = portfolioTabs.querySelectorAll(".tab-btn");
   const cardsWithModals = document.querySelectorAll(".portfolio-container .card-with-model");
   
   portfolioTabBtns.forEach((tabBtn) => {
      tabBtn.addEventListener("click", () => {
         const filter = tabBtn.getAttribute("data-filter");

         cardsWithModals.forEach((cardWithModal) => {
            if(filter === "all" || cardWithModal.classList.contains(filter)){
               cardWithModal.classList.remove("hidden");

               setTimeout(() => {
                  cardWithModal.style.opacity = "1";
                  cardWithModal.style.transition = ".5s ease";
               }, 1);
            }
            else{
               cardWithModal.classList.add("hidden");

               setTimeout(() => {
                  cardWithModal.style.opacity = "0";
                  cardWithModal.style.transition = ".5s ease";
               }, 1);
            }
         });  
          //Add active class to the clicked button.
          portfolioTabBtns.forEach((tabBtn) => tabBtn.classList.remove("active"));
          tabBtn.classList.add("active");   
      });
   });         
});


// Open/Close Portfolio modals.
const portfolioCardsWithModals = document.querySelectorAll(".portfolio-container .card-with-model");

portfolioCardsWithModals.forEach((portfolioCardWithModal) => {
   const portfolioCard = portfolioCardWithModal.querySelector(".portfolio-card");
   const portfolioBackDrop = portfolioCardWithModal.querySelector(".portfolio-model-backdrop");
   const portfolioModal = portfolioCardWithModal.querySelector(".portfolio-model");
   const modalCloseBtn = portfolioCardWithModal.querySelector(".model-close-btn");

   portfolioCard.addEventListener("click", () => {
      portfolioBackDrop.style.display = "flex";

      setTimeout(() => {
         portfolioBackDrop.classList.add("active");
      }, 300);
      
      setTimeout(() => {
         portfolioModal.classList.add("active");
      }, 300);
      
   });

   modalCloseBtn.addEventListener("click", () =>{
      setTimeout(() => {
         portfolioBackDrop.style.display = "none";
      }, 300);
      
      setTimeout(() => {
         portfolioBackDrop.classList.remove("active");
         portfolioModal.classList.remove("active");
      }, 300);
      
   });
});






/* =====================================================
   Testimonial Swiper
===================================================== */
var swiper = new Swiper(".Sue-client-swiper", {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });





/* =====================================================
   Send/Receive emails from contact form - EmailJS
===================================================== */
(function() {
   // https://dashboard.emailjs.com/admin/account
   emailjs.init({
     publicKey: "YV7n_VPjr_vE3_97M",
   });
})();


sueContactForm = document.getElementById("sue-contact-form");
sueContactFormAlert = document.querySelector(".contact-form-alert");

sueContactForm.addEventListener('submit', function(event) {
   event.preventDefault();
   // these IDs from the previous steps
   emailjs.sendForm('service_gzorxlo', 'template_od8jttw', '#sue-contact-form')
       .then(() => {
           /* console.log('SUCCESS!'); */
           sueContactFormAlert.innerHTML = "<span>Your message sent successfully!</span><i class='ri-checkbox-circle-fill'></i>"
           sueContactForm.reset();

           setTimeout(() => {
            sueContactFormAlert.innerHTML = "";
           }, 5000);
       }, (error) => {
           /* console.log('FAILED...', error); */
           sueContactFormAlert.innerHTML = "<span>Message not sent</span><i class='ri-error-warning-fill'></i>"
           sueContactFormAlert.title = error;
       });
});


/* =====================================================
   Shrink the height of the header on scroll
===================================================== */
window.addEventListener("scroll", () => {
   const sueHeader = document.querySelector(".sue-header");

   sueHeader.classList.toggle("shrink", window.scrollY > 0);
});





/* =====================================================
   Bottom navigation menu
===================================================== */

// Each bottom navigation menu items active on page scroll.
window.addEventListener("scroll", () => {
   const navMenuSection = document.querySelectorAll(".nav-menu-section");
   const scrollY = window.pageYOffset;

   navMenuSection.forEach((navMenuSection) => {
      let sectionHeight = navMenuSection.offsetHeight;
      let sectionTop = navMenuSection.offsetTop - 50;
      let id = navMenuSection.getAttribute("id");

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.add("current");
      }else{
         document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.remove("current");

      }
   });
});


 

// Javascript to show bottom navigation menu on home(page load).
window.addEventListener("DOMContentLoaded", () => {
   const bottomNav = document.querySelector(".bottom-nav");

   bottomNav.classList.toggle("active", window.scrollY < 10 );
});





// Javascript to show/hide bottom navigation menu on home(scroll).
const bottomNav = document.querySelector(".bottom-nav");
const menuHideBtn = document.querySelector(".menu-hide-btn");
const menuShowBtn = document.querySelector(".menu-show-btn");
var navTimeout;

window.addEventListener("scroll", () => {
   bottomNav.classList.add("active");
   menuShowBtn.classList.remove("active");

   if(window.scrollY > 10){
      menuHideBtn.classList.remove("active");

      function scrollStopped(){
         bottomNav.classList.add("active");
      }

      clearTimeout(navTimeout);
      navTimeout = setTimeout(scrollStopped, 2500);
   }

   if(window.scrollY > 10){
      menuHideBtn.classList.add("active");

      function scrollStopped(){
         bottomNav.classList.remove("active");
         menuShowBtn.classList.add("active");
      }

      clearTimeout(navTimeout);
      navTimeout = setTimeout(scrollStopped, 2500);
   }

});

// Hide bottom navigation menu on click menu-hide-btn.
menuHideBtn.addEventListener("click", () => {
   bottomNav.classList.toggle("active");
   menuHideBtn.classList.toggle("active");
   menuShowBtn.classList.toggle("active");
});

menuShowBtn.addEventListener("click", () => {
   bottomNav.classList.toggle("active");
   menuHideBtn.classList.add("active");
   menuShowBtn.classList.toggle("active");
});


// Show bottom navigation menu on click menu-show-btn.*********

/* =====================================================
   To-top-button with scroll indicator bar
===================================================== */
window.addEventListener("scroll", () => {
   const toTopBtn = document.querySelector(".to-top-btn");

   toTopBtn.classList.toggle("active",window.scrollY > 0);

   //Scroll indicator Bar
   const scrollIndicatorBar = document.querySelector(".scroll-indicator-bar");

   const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
   const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

   const scrollValue = (pageScroll / height) * 100;

   scrollIndicatorBar.style.height = scrollValue + "%";

});




/* =====================================================
   Customized cursor on mousemove
===================================================== */
const cursor = document.querySelector(".cursor");
const cursorDot = cursor.querySelector(".cursor-dot");
const cursorCircle = cursor.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
   let x = e.clientX;
   let y = e.clientY;

   cursorDot.style.top = y + "px";
   cursorDot.style.left = x + "px";
   cursorCircle.style.top = y + "px";
   cursorCircle.style.left = x + "px";
})

//Cursor effect on hover website element
const cursorHoverlinks = document.querySelectorAll("body a, .theme-btn, .sue-main-btn, .portfolio-card, .swiper-button-next, .swiper-button-prev, .swiper-pagination-bulet, .service-card, .contact-social-links li, .contact-form .submit-btn, .menu-show-btn, .menu-hide-btn");

cursorHoverlinks.forEach((cursorHoverlinks) => {
   cursorHoverlinks.addEventListener("mouseover", () => {
      cursorDot.classList.add("large");
      cursorCircle.style.display = "none";
   });
});

cursorHoverlinks.forEach((cursorHoverlinks) => {
   cursorHoverlinks.addEventListener("mouseout", () => {
      cursorDot.classList.remove("large");
      cursorCircle.style.display = "block";
   });
});



// Cursor effects on hover website elements.

/* =====================================================
   Website dark/light theme
===================================================== */



//Change theme and save current theme on click the same button.
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
   //Change theme icon and theme on click theme button.
   themeBtn.classList.toggle("active-sun-icon");
   document.body.classList.toggle("light-theme");

   //Save theme icon and theme on click theme button.
   const getCurrentIcon = () => themeBtn.classList.contains("active-sun-icon") ? "sun" : "moon";
   const getCurrentTheme = () => document.body.classList.contains("light-theme") ? "light" : "dark";

   localStorage.setItem("sue-saved-icon", getCurrentIcon());
   localStorage.setItem("sue-saved-theme", getCurrentTheme());
});



// Get saved theme icon and theme on document loaded.
const savedIcon = localStorage.getItem("sue-saved-icon");
const savedTheme = localStorage.getItem("sue-saved-theme");

document.addEventListener("DOMContentLoaded", () => {
   themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("active-sun-icon");
   document.body.classList[savedIcon === "light" ? "add" : "remove"]("light-theme");
})





/* =====================================================
   ScrollReveal JS animations
===================================================== */

// Common reveal options to create reveal animations.
ScrollReveal({
   /* reset: true, */
   distance: '60px',
   duration: 2500,
   delay: 400
});