# Readings: Object-Oriented Programming, HTML Tables

Information regarding Object Oriented programming, and HTML tables, as well as what they are and how to read them.

**Explain why we need domain modeling.**

Domain modeling in an essence is the visualization model of the developers code into something a user can read and understand. The model represents the different attributes as well as how the website acts and functions and yes this also includes it's limitations of what it can and cannot do. 

Something to keep in mind though is that there is a term often used called Object Oriented Model, and what this means is the overall container of the different data, methods and properties that go into the visual representation of the website.

**Why should tables not be used for page layouts?**

The first and foremost reason not to use a table for webpage layout is that the accessibility to data is greatly reduced especially for those visually impaired. Tables also have a habit of creating what is frequently known as *tag soup*, which in lamens terms is there's so many terms that semantic styling for tags and IDs because nill and it's just a big mess of tags that you won't know your right from your left. And lastly these tables are not readily responsive unlike CSS styling for information. Tags like in CSS typically by default respond to 100% of the webpage, where as tables do not, they will only display as big as the content that's added to them.

**List and describe 3 different semantic HTML elements used in an HTML table.**

The first and most obvious element for an HTML table is *table*, this element is used similarly to the other elements where information is stored inside, this is essentially the container that holds everything related to the table. Second is *td* and this stands for table data, and as obvious as it may sound, it is just that the information that's going into the a cell of the table, such as a string or number. To get multiple rows/columns of information you need multiple lines of the element td to do so. And lastly to stop our table from ever growing to garganchuan sizes, we use the *tr* which stands for table row, and this will effectively put a break in the table so it stops at that cell that comes right before it.

**What is a constructor and what are some advantages to using it?**

A constructor is an effective way to do a similar scenario to an object literal however it's basically turning an object literal into a function layout so that we don't have to write endless code over and over we can just define the object literal one time and then use new constructors to copy the way the literal is done with new information. Similar to calling a normal function when assigning a new variable, we can do the same thing with object literals.

**How does the term this differ when used in an object literal versus when used in a constructor?**

The difference between using this in an object literal and this in a constructor is that when used in object literals it refers to the object it's being written inside of which is fine if you're using multiple object literals. However when we only have one object literal to refer to like with constructors it's not as useful. This in this sense is allowing the developer to use the same method definition for every object they plan to create going forward. 

**Explain prototypes and inheritance via an analogy from your previous work experience.**

Prototypes are the basis of the idea of create and reuse. Instead of having to create new instances or variables for each individual type of method we want to pass through, prototype allows us to create it once and then share that information across anything else. Kind of like instead of having one handbook for every new person that comes in and it being custom built to them, using a general template book that applies to all and allowing each new employee to use it as reference. Now when it comes to inheritance, going back to the handbook analogy. Let's say for example you bring in a new cook and he doesn't know every single receipe that the restaurant has come up with. This handbook(prototype) has the library of receipes(methods) on standby and any time we bring in a new cook we simple call it, const richard = new cook and richard will instantly be granted the inherited knowledge of being a cook by referencing back to the prefilled knowledge from the prototype. Doing this makes sure that any time information is needed for a specific task, that it follows the library of preset functions and ensures they all have following data types. 

### Things I want to know

I want to know how to do a mix of tables creation using an array information. Especially to carry over from a previous assignment.