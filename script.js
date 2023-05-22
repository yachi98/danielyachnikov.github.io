document.addEventListener("DOMContentLoaded", function (event) {
  let dataText = ["Hello, I'm Daniel", "Web Developer"];

  function typeWriter(text, i, fnCallback) {
    // check if text isn't finished yet
    if (i < text.length) {
      document.querySelector("h1").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 400);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 2000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  StartTextAnimation(0);
});

// make mobile navigation //

const navBtn = document.querySelector(".btn-nav");
const mobileMenu = document.querySelector(".mobile-nav");

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
});

// Cursor

let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelector(".nav_links li");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

// document.title = "Me";
// Animations

const animation_elements = document.querySelectorAll(".animate-on-scroll");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

for (let i = 0; i < animation_elements.length; i++) {
  const el = animation_elements[i];
  observer.observe(el);
}
/*

// Set up the canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set the canvas width and height to the window dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define an array to hold the circles
const circles = [];

// Define the Circle class
class Circle {
  constructor(x, y, radius, color, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.dx = dx;
    this.dy = dy;
    // this.border = "3px solid red";
  }

  // Draw the circle
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // ctx.fillStyle = this.color;
    ctx.lineWidth = 2; // set border width
    ctx.strokeStyle = "white"; // set border color
    ctx.stroke(); // draw the border
    // ctx.fillStyle = "black"; // set fill color
    // ctx.fill();
  }

  // Update the circle's position
  update() {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  }
}

// Create the circles and add them to the array

for (let i = 0; i < 20; i++) {
  const radius = Math.random() * 50 + 20;
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  // const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
  //   Math.random() * 255
  // }, 0.5)`;
  const color = `rgb(255, 255, 255)`;
  // color.style.border = "1px solid red";

  // color.style.border = "1px solid red";

  const dx = (Math.random() - 0.8) * 3;
  const dy = (Math.random() - 0.8) * 3;

  const circle = new Circle(x, y, radius, color, dx, dy);
  circles.push(circle);
}

// Define the animation function
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw each circle
  circles.forEach((circle) => {
    circle.update();
    circle.draw();
  });

  // Call the animation function again
  requestAnimationFrame(animate);
}

// Call the animation function
animate();
*/

// Back button
const backIcon = document.querySelector(".back-icon");
const backBtn = document.querySelector(".back-button");

backBtn.addEventListener("mouseover", () => {
  backBtn.classList.add(".back-icon");
});
