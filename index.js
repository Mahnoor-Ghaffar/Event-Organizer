let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


////////////////////////////Home section slider
var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop:true,
    autoplay:{
        delay : 3000,
        disableOnInteraction:false,
    }
  });




////////////////////////////Reiew section slider
var swiper = new Swiper(".review-slider", {
    slidesPerView:1,
    grabCursor: true,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
        0:{
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1050: {
            slidesPerView: 3,
        },
    },
    autoplay:{
        delay : 5000,
        disableOnInteraction:false,
    }
  });



//////////////contact form
function submitForm(){
    console.log("User Data");
    JavaScript: void(0);
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    console.log(name,email,number,subject);
  if(name === "" ||email === "" ||number === "" ||subject ==="") {
    alert('All fields are required');
  }
}
///////////////////////////on focus and blur event
function onFocus(element) {
    element.style.backgroundColor = '#fff';
    element.style.color = '#BF567D';
}

function onBlur(element) {
    element.style.backgroundColor = '#eeeeee96';
}

////////////////////////Home heading
/////////////////////Mouseover and out event use
function changeColor() {
    document.getElementById('heading-clr-change').style.color = '#BF567D';
    document.getElementById('head-span-chng').style.color = '#fff';
}

function resetColor() {
    document.getElementById('heading-clr-change').style.color = '#fff';
    document.getElementById('head-span-chng').style.color = '#BF567D';
}

/////////////////////about us section 
/////////////////////onMouse over
function swapPic() {
         document.getElementById("swapPic").src = "assets/images/aboutusImg2.webp";
}
function swapPic(state) {
    const image = document.getElementById('swapPic');
    if (state === 'hover') {
        image.src = 'assets/images/aboutusImg2.webp';
    } else {
        image.src = 'assets/images/about-us.jpg';
    }
}




