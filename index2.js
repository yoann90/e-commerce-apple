function slider(any) {
    document.querySelector(".phone").src = any
}
function couleur(color) {
    const sec = document.querySelector(".global")
    sec.style.background = color
}


// carousel-----
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const image = document.querySelector(".image");

let degrees = 0;
prev.addEventListener("click", () => {
  degrees += 45;
  image.style = `transform: perspective(1000px) rotateY(${degrees}deg)`;
});

next.addEventListener("click", () => {
  degrees -= 45;
  image.style = `transform: perspective(1000px) rotateY(${degrees}deg)`;
});



// scroll down affichage contenu 

window.addEventListener("scroll", reveal);
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 150;
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
// ------


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  // document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  // document.getElementById("main").style.marginLeft = "0";
}

// sa fonctionne ----



