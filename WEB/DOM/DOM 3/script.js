const section = document.createElement("section");
const para = document.createElement("p");
para.id = "title";
para.textContent = "some random text come here";

const additonalPara = document.createElement("p");
additonalPara.textContent = "some more text";

const link = document.createElement("a");
link.href = "https://google.com";
link.textContent = "Visit google.com";
link.target = "_blank";


// .append() method we can append multiple nodes at once
// also can append strings or text nodes

section.append(additonalPara, link, "created using string");


// in .appendChild() method we can only append only one node at a time
// only works with node only no string or text nodes
section.appendChild(para);

document.body.appendChild(section);



const span = document.createElement("span");
span.textContent = "this node will be inserted before link node";
section.insertBefore(span, link);
// .insertBefore() method add the node before the specified another another Element


// another some method like insertBefore() is .prepend() method
// can also add multiple elements or nodes
// the node are added in the order they are mentioned in there

const prependElement = document.createElement("div");
prependElement.textContent = "will be added before div";

const anotherElement = document.createElement("div");
anotherElement.textContent = "text node inside the div";
section.prepend(prependElement, anotherElement);



const removeButton = document.createElement("button");
removeButton.id = "remove-button";
removeButton.textContent = "reomove topmost element";
removeButton.addEventListener("click", function () {
    if (section.firstChild && section.firstChild.id !== removeButton.id) {
        // section.firstChild.remove();
        section.removeChild(section.firstChild);
    } else {
        alert("All elemnts removed");
    }
})

section.append(removeButton);


// difference between remove() and removeChild()

// remove child needs to be called on parent
// remove child returns the node which was removed
// romove is directly called on the element which is to be remove
// remove doesn't return anything = returns undefined


// there are two ways to remove all child nodes of an element

// innerHTML = "" - we can set it to blank
// replaceChildern() method - without any arguments  it will clear all the child nodes

const newPara = document.createElement("p");
newPara.textContent = "this will replace all existing children";

const newLink = document.createElement("a");
newLink.textContent = "New Link";
newLink.href = "https://mail.google.com";

section.replaceChildren(newPara, newLink);