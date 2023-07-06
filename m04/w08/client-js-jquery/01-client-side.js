console.log('Welcome to client-side JS! 🤠');

/**
 * Window contains everything related
 * to the tab open in the browser
 */
console.log(window);

/**
 * Inside the window object, we find
 * NAVIGATOR and DOCUMENT objects...
 */

/**
 * The NAVIGATOR object allow me to get data
 * about the USER AGENT, which is the browser
 * being used by the client!
 */
console.log('🐱 Navigator object:', window.navigator);

/**
 * The DOCUMENT object allows JavaScript
 * to access and modify any element in my
 * website (html elements, css...)
 */

console.log(window.document);

const titleHeading = document.querySelector("h1");
titleHeading.innerHTML = "Another text!"

const image = document.querySelector("img");
image.src = "https://miro.medium.com/v2/resize:fit:1074/1*Vh7kARkibQHQjYaJX_v7Sw.jpeg";

const subtitleHeading = document.querySelector(".heading-style");
console.log(subtitleHeading)

const paragraph = document.querySelector("#one");
console.log(paragraph);
paragraph.innerHTML = "another text goes here!"

/**
 * By using document.querySelector()
 * you can access elements by:
 * 1) element name ("h1") ("p") ("img")
 * 2) class name (".heading-style") (".my-class")
 * 3) id value ("#one") ("#my-id")
 */

const documentChildren = document.children;
const htmlElement = documentChildren[0];
const bodyElement = htmlElement.children[1];
const paragraphElement = bodyElement.children[2];

console.log(bodyElement.children[4])