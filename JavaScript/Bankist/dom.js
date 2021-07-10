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
