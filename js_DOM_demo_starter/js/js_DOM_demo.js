/*
  switch the heading to 'I love JavaScript!
  */
let myHeading = document.querySelector('h1');

setTimeout(() => myHeading.innerHTML = "JavaScript is certainly something", 3000);

// let's do that on an event, as a callback to setTimeout

/*
 switch the image
*/

let image = document.getElementById('main');

setTimeout(() => image.src = "images/LoveJS.jpg", 5000);

//select the image by its id

// switch the src attribute the other image

// switch after timeout event


/*
 make the link href valid
*/

let mozilla = document.querySelector('a');

setTimeout(() => mozilla.textContent = "Mozilla Developer Network", 1000);
setTimeout(() => mozilla.href = "https://developer.mozilla.org/", 1000);

// select the element and store a reference in a variable.

// change the text inside the link with the textContent property.

// change the URL the link is pointing to:

// get a reference to the div element node

let myDiv = document.querySelector('div');

/* 
Create a new paragraph element and give it some text
*/

const para = document.createElement('p');
para.textContent = "abababababba";
myDiv.appendChild(para);



// Now append the new paragraph at the end of the div

// create a text node to the paragraph

// Grab a reference to the paragraph the link is inside and append the text node to it.

//
// Moving and removing elements
//
// to move the paragraph with the link to the bottom of the div

// to remove a node


/*
Add style
*/
// Can add inline styles directly as below
/* 
para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';
*/
// but better to add the style as a class and switch the class

/*
Build a list dynamically with javascript
*/
// create nodes to hold the list, input and button elements

const list = document.querySelector('ul');
const input = document.querySelector('#item');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const myItem = input.value;
  const listItem = document.createElement('li');

  listItem.innerHTML = myItem;
  list.appendChild(listItem);

  input.value = '';
});

