let navItem = document.querySelectorAll("li");
let headingOne = document.querySelector("h1");
let awesomeSection = document.querySelector(".awesome--section");
let gridSection = document.querySelector(".grid-section");
let documentationSection = document.querySelector(".documentation");
console.log(documentationSection);

// for (let i = 0; i < navItem.length; i++) {
//   console.log(navItem[i].textContent);
// }
let [, , , documentation] = navItem;
documentation.addEventListener("click", function () {
  headingOne.textContent = "Documentaion";
  awesomeSection.classList.add("hidden");
  gridSection.classList.add("hidden");
  documentationSection.classList.remove("hidden");
  // console.log(documentationSection);
});
