// for homepage typing text animation

document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelector(".sec-txt");
  const textLoad = () => {
    setTimeout(() => {
      text.textContent = "to See";
    }, 0);

    setTimeout(() => {
      text.textContent = "to Make";
    }, 4000);

    setTimeout(() => {
      text.textContent = "to Taste";
    }, 8000);
  };

  textLoad();

  setInterval(textLoad, 12000);
});

////////////////////////////////////////////////////////////////////////////////

//for dark mode or light mode

const body = document.querySelector("body"),
  modeToggle = document.querySelector(".drak-light");

if (localStorage.getItem("mode") == null) {
  localStorage.setItem("mode", "light");
}

let localData = localStorage.getItem("mode");
if (localData == "light-mode") {
  document.body.classList.remove("dark");
} else if (localData == "dark-mode") {
  document.body.classList.add("dark");
}

modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark-mode");
  } else {
    localStorage.setItem("mode", "light-mode");
  }
});

////////////////////////////////////////////////
