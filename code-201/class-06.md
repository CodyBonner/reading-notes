# Problem Domain, Objects, and the DOM

A small introduction to Javascript Objects, problem domains and an insight to DOM with a list of questions and answers.

**How would you describe an object to a non-technical friend you grew up with?**

The best way to describe what a Javaqscript Object is first defining what it is. An obecject is considered a collection of similar data or functionality. Typically a mix of variables of functions also known as properties and methods. To put it into perspective, when you're moving from one house to the next you typically put items into a box based off of either their functionality or where they belong in the house, say the kitchen, the items inside may have different functions(methods) but they all belong to one collection known as the kitchen.

**What are some advantages to creating object literals?**

One of the main advantages to creating object literals is that it allows for a pretty nice layout of information so that it's easy for others to read and distinguish the content inside the object, so long as semantic naming conventions are used. Another benefit to using object literals is when we try to call on the information of these objects we can use dot notation both inside and outside of the object. If it's inside the object then we can use *this.information needed* or if it's outside the object we can use *ObjectName.informationNeeded*. It's also common to use object literals because of the fact they use key/value pairs.

**How do objects differ from arrays?**

One of the key differences between objects and arrays is how we call on the information inside of them. For an array we call on the information by an index value. So in arrays we call on index value zero, one, two and so forth until we get the information we need. However in an objects we aren't calling the information by an index value, we essentially are calling the information by name. To put it in a more literal sense, if you have a group of ten people in a room, you can call on one through ten from left to right and know nothing about them, but if you call on someone by a name, say phil then you instantly get the information associated with phile versus cycling through looking for information that matches. However it is worth noting that objects are often called associative arrays. Objects will link strings(text) to values where as arrays will typically link numbers to values.

**Give an example for when you would need to use bracket notation to access an objects property instead of dot notation.**

Typically dot notation is the preferred method for accessing an objects information simply for how clean and easy it looks. However an instance of when you cannot use dot notation and must use bracket notation is when the information is being stored by a variable. Usually this way is done when setting up functions to call on information inside of the object. For example, if using person as the object name, and you want to access the age of the person to use it under a function we would use (person[arrgument]). Using it in this way with a precurrsor such as console.log will access the object person and look for an argument type, so when we use it later and request age it'll look for something with the argument name age in the object and display the information.

**Evaluate the code below. What does the term *this* refer to and what is the advantage to using *this*?**

const dog = {
  name: 'Spot',
  age: 2,
  color: 'white with black spots'
  humanAge: function(){
    console.log('${this.name} is ${this.age*7}cin human years');
  }
}

Looking at the above section the use of the term this is referring to the current obbject that the function is within. It takes the attribute name looking for it inside of the object and displays the appropriate information. It's often used to help make sure to use the appropriate information that's being called inside of the object and is also semantically pleasing to use to know where the information is being called from.

## Introduction To The DOM

**What is the DOM?** 

Officially named the Document Object Model, is an interface that can be programmed for web documents. It is considered the page of the webpage where programs interact with it. These programs will often change the documents structure, style and content. Web pages are documents that can be displayed either in browser windows or as the HTML's source code. In both cases it's the same document but the DOM allows it to be manipulated. Such as CSS manipulating style to the HTML content.

**Briefly describe the relationship between the DOM and JavaScript**

The DOM is considered the inebetween of the document and the elements of JavaScript. Javascript is the programming language used for creating certain things inside of the HTML content. However the DOM is what reads and understands the two languages and displays the information for the user to see. Kind of like a television, it takes in the signal(Javascript language) and outputs a visual display after reading and understanding that information.

### Things I want to know more about

This section is one of the main ones I want to learn about, I personally want to invest in learning how to incorporate images with prompts and alerts to make unique user experiences. 