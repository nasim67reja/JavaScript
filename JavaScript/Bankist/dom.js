//  Selecting , creating and deleting elements :

// 👉👉👉👉👉👉👉 1. selecting :
console.log(document.documentElement); // this is select a entire web page.if we want to apply the css on whole page then we select like this.only document is not enough
console.log(document.head);
console.log(document.body);

const main = document.querySelector('.parent');
document.querySelectorAll('.parent'); // this will be returned the first element which ones have the class is parent but if we use querySelectorAll then it will select all the element and retrun a nodelist(is like an javascript array)
document.getElementById('here specify the id'); // getElementById is like quesryselecotor but like his name it can select only the id property. note that: here we don't need to specify # tag
document.getElementsByClassName('likeprevious'); // this propertry is like the gelElementById property. but here we select an element on the bases of class this ones return a html collection not nodelist
document.getElementsByTagName('button'); // this will be return all the button from the html document. but here is little bit diffrence from querySelectorAll.becuse this dom element return a html collection not the nodelist. html collection is the live collection that means if the will changed the html collection also will be changed. but in the nodelist it is not happen

// 👉👉👉👉👉👉👉 1. Creating and inseritng elements
// .insertAdjacent this is given on the bankist application
const message = document.createElement('div'); // this one's create a dom element and store on the meassage variable. that element is not yet anywhere in our dom. all this is a dom object  that we can now use to do something on it but it is not yet in the dom itself so its no where to found on our webpage here. if we want it on the page then we manually  inserted in the page. first  actually do something with it => for example we can add classes
message.classList.add('cookie-message'); //.cookie-message
// message.textContent =
//   'We use cookied for imporved funcitonality and analytics.';
/*  🔥🔥🔥🔥🔥🔥 Difference between innerHTML and textContent.
innerHTML is used to view/change the main HTML content which can include changing the whole HTML of the class specified.
Eg:- <div>Hello</div> can be changed to <p>Hello</p> and many more
But, .textContent is used to change only the content of the HTML tag.
Eg:-  <div>Hello</div> can be changed to <div>Bye</div>*/
message.innerHTML =
  'We use cookied for imporved funcitonality and analytics. <button class="btn">Got it </button>';
main.prepend(message); // prepending basically add the message element at first child of main element
main.append(message); //  appending  basically add the message element at last child of main element // 1 more think this element can't be stay two place. only it will be remain in  the last place
// main.append(message.cloneNode(true)); // now this time this element remain in the both place. because we have coppied the element
main.before(message); // this before propertry add the message element before the main element as a sibling
main.after(message); // this before propertry add the message element after the main element as a sibling
main.append(message);

//  👉👉👉👉👉👉👉 3. Delete Element :

document.querySelector('.btn').addEventListener('click', function () {
  // message.remove();// this is new method
  message.parentElement.removeChild(message); // this will be found in old code bases
});
//  Difference between .innerHTML and .insertAdjacentHTML are given below:
/*.innerHTML and .insertAdjacentHTML do slightly different things.
.innerHTML will completely replace all the HTML inside of the element with whatever we assign it.
.insertAdjacentHTML will add whatever we assign to it at a certain point in the element, determined by the position parameter.
The reason we're using .innerHTML here is that we just created the element, and we want to define exactly what HTML it should contain. We don't have to worry about overwriting anything.
That being said, we could've just as well used .insertAdjacentHTML here, since we know the newly created element should be empty.
In summary, you want to use .insertAdjacentHTML when you want to add to existing HTML in an element. We use .innerHTML if we want to start from scratch with our own HTML.*/
//////////////////////////////////////////////////////////////////////////////////////////////////// Styles Attribute and Classes

// Styles :
message.style.backgroundColor = '#37383d'; // note that here the bg property will be applied in camelCase and the value will be exactly look like the css value
message.style.marginTop = '2rem';
message.style.width = '100%'; // look on the browser these style apply in the inline style
console.log(message.style.height); // return nothing . becasue the style property works for only the inline style that we set ourselves also using the style property
console.log(message.style.backgroundColor); // it will be returned rgb(55, 56, 61). mind it that it willi only work for inline style property
console.log(message.style.color); // it also return nothing . because it is specify in style sheet not inline styled.
console.log(getComputedStyle(message).height); // it will return all the property with the value // but this code will return the height even it was not set
// let sum = Number.parseFloat(getComputedStyle(message).height) + 40;
// we can increase the value like this:
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';
console.log(getComputedStyle(message).height);

// we can change the  color which one's is  declare with variable in css file. at first we have to select the css variable based on it's possition. if it was declare on the root then we can select the document.documentElement beacuse root(in css) is equal to document in javascript
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes:
const logo = document.querySelector('.navber-child');
console.log(logo.alt);
console.log(logo.src); // thrown absolute url on the console which is different than the html url. if we want the relative url
console.log(logo.getAttribute('src')); // this is same about herf attribute for link
console.log(logo.className);
// console.log(logo.designer) ;// it will be returned undefined
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');
logo.alt = 'A man with computer';

// Data attribute :
console.log(logo.dataset.versionNumber); // so for this special attribute they are always store in the dataset
// we use data set quite a lot when we works with UI. we store data in user Interface . basically in the html code

//Classes:

logo.classList.add('c', 'b');
logo.classList.remove('c', 'b');
logo.classList.toggle('c', 'b');
logo.classList.contains('c', 'b');
// these are the four classes attributes
{
  var oldName = 'Nasim';
  let newName = 'Reja';
  const famousName = 'Leon';
}
