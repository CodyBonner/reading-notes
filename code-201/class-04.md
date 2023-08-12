# HTML Links, JS Functions, and Intro to CSS Layout

A slow intro to HTML links, Javascript Functions and Cascading Stye Sheets

## Creating Hyperlinks

To start things off when it comes to a website, we need to understand a basic fundamental and that's hyperlinks. Almost every webpage out there has a hyperlink from a menu tab to a pictured sectioni that once the image is clicked you're redirected else where. However, **how are hyperlinks created?**

To create a basic link, we wrap text or other content inside the *<a>* element. Well what is this element? This element is known as an anchor element it is often paired with the href attribute to create the established hyperlink.

Well, **what is the href attribute and what information does it contain?** In very simple terms, the href attribute is known as the Hypertext reference. What this means is this attribute will contain the webpge URL that's desired to be hyperlinked. Whether that's to another section of the website through internal referencing, or whether it's to another website all together.

**What are some ways we can ensure links on our pages are accessible to all readers?**

The most sure fire way to ensure all users can access links on pages, is to make sure that the links are designed with normal text. Key words are huge bonus when it comes to creating links for all users to understand, avoid using the URL itself as the hyperlink because they overall just look ugly on the page, especially on mobile websites. And be sure not to include words like link or link lists, it just becomes clutter. Users of all types will typically know if there's a link simply by visual cues or by color style as most links are of different color.

### CSS Layout

**What is normal flow?**

Normal flow describes the flow of the webpage to the user that's done by the webpage on default unless otherwise stylized by the developer.

**What are some key differences between block level and inline elements?**

Block level elements will be stylized on a more bulky level. Such as a block known as body, if body is stylized then anything inside the element body will take on that stylized trait, where as when it comes to inline element stylizing. If you either ID the element type and stylize that ID or inline stylize which is style in the same line as the code element itself. Then you can stylize just that section so long as the blocked section above it isn't already stylized.

**What positioning is the default for every HTML element?**

The default position for every element once created is known as static positioning. What that means is very simple, it just means put the element in a basic normal space with nothing fancy being done to it until developer decides otherwise. 

**Name a few advantages to using absolute positioning on an element.**

One of the major key advantages to using absolute positioning is that the element that is assigned to it. Essentially gets it's own layer and is free floating from the rest of the webpage completely unaffected by their stylizing. It allows us to stylize it completely independent from the rest of the elements and their styles and fixate on stylizing in it's own boxed area in relation to it's ancestor block.


**What is a key difference between fixed positioning and absolute positioning?**

Where absolute positioning positions content around the blocking system of it's ancestor block in a free floating system. Fixed positioning is done in relation to the viewport. This only works if the element doesn't have a parent that's been given a fixed positioning as it's transform value will not be 0.


#### Learning JavaScript

**Describe the difference between a function declaration and a function invocation.**

A function declaration is simply creating and placing information inside a block to be used at a later time. What this means is that we assign the function a semantic name, and place a chunk of code that we as developers don't want to retype every time we need it inside a box. Where as function invocation is the use of that function. It's what we do to call on the function when we desire the block of codes use. The semantic name we give it plays a role in this, as it's how we call on that function when desired.



##### Things I want to know more about

Fixed and absolute positioning. I want to know more about how they are used in a real sense and what can and can't be made into a free floating styled system. 

