/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle)
{
    navToggle.addEventListener("click", function(){
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose)
{
    navClose.addEventListener("click", function(){
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')
navLink.forEach(function(element)
{
    element.addEventListener('click', function()
    {
        navMenu.classList.remove('show-menu')
    })
})

/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName("skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header");
    
    function toogle_skills(){
        let itemclass = this.parentNode.className;
        for(i = 0; i < skillsContent.length; i++)
        {
            skillsContent[i].className = "skills__content skills__close"
        }
        if(itemclass === "skills__content skills__close")
        {
            this.parentNode.className = "skills__content skills__open"
        }
    }

    skillsHeader.forEach((item) =>{
        item.addEventListener("click", toogle_skills)
    })
/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]")

    // console.log(tabs);
    // console.log(tabContents)
    tabs.forEach(tab =>
        {
            tab.addEventListener("click", () =>
            {
                // console.log(tab);
                const target = document.querySelector(tab.dataset.target)
                // console.log(target);
                tabContents.forEach(tabContent =>
                {
                    tabContent.classList.remove("qualification__active")
                })
                target.classList.add("qualification__active")
                tabs.forEach(tab =>
                {
                    tab.classList.remove("qualification__active")
                })
                tab.classList.add("qualification__active")
            })
        })

/*==================== SERVICES MODAL ====================*/

const modalViews = document.querySelectorAll('.services__modal'),
        modalBtns = document.querySelectorAll('.services__button'),
        modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick)
{
    modalViews[modalClick].classList.add("active-modal");
}

modalBtns.forEach((modalBtn, i) =>
{
    modalBtn.addEventListener('click', ()=>
    {
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>
{
    modalClose.addEventListener('click', ()=>
    {
        modalViews.forEach((modalView)=>
        {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            const address_of_section = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
            address_of_section.classList.add('active-link')
            
        }else{
            const address_of_section = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
            address_of_section.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*====================  THEME CHANGER ====================*/ 
const themeChanger = document.getElementById('theme-changer');
const imgChanger = document.getElementById('about-img');
themeChanger.addEventListener('click', () => {
    let check = getComputedStyle(document.documentElement).getPropertyValue('--hue-color');
    let new_value = 240;
    let new_value_second = 3;
    if(check == 3)
    {
        document.documentElement.style.setProperty('--hue-color', new_value)
        imgChanger.setAttribute('src', '/assets/img/about_secondary.png')
    }
    else
    {
        document.documentElement.style.setProperty('--hue-color', new_value_second)
        imgChanger.setAttribute('src', '/assets/img/about.png')
    }
})

/*====================  EMAIL SENDER ====================*/ 
function sendEmail()
{
    Email.send({
        Host: "smtp.gmail.com",
        Username: "himanshuskyboy5449@gmail.com",
        Password: "rishi.123",
        To: 'himanshuyadav5449@gmail.com',
        From: document.getElementById('user-email').value,
        Subject: "New Contact Form Enquiry",
        Body: "Name: " + document.getElementById('user-name').value+
            "<br> Email: " + document.getElementById('user-email').value +
            "<br> Message: " + document.getElementById('user-message').value
    }).then(
        message => alert(message)
    );
}
