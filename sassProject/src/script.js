let navItem = document.querySelectorAll("li");
let headingOne = document.querySelector("h1");
let awesomeSection = document.querySelector(".awesome--section");
let gridSection = document.querySelector(".grid-section");
let documentationSection = document.querySelector(".documentation");
let installPage = document.querySelector(".install--section");

let [Install, , , documentation] = navItem;
documentation.addEventListener("click", function () {
  headingOne.textContent = "Documentaion";
  awesomeSection.classList.add("hidden");
  gridSection.classList.add("hidden");
  documentationSection.classList.remove("hidden");
  installPage.classList.add("hidden");

  // console.log(documentationSection);
});

Install.addEventListener("click", function () {
  headingOne.textContent = "Install Sass";
  installPage.classList.remove("hidden");
  awesomeSection.classList.add("hidden");
  gridSection.classList.add("hidden");
  documentationSection.classList.add("hidden");
});
