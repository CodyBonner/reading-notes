# How the web works
Basics of how websites work and why it's important to understand

## HTTP and why it's important

One of the main things when it comes to websites, everyone knows how to use them but not everyone knows how they work. So **what is http and how does it work with websites?** Well HTTP is also known as HyperText Transfer Protocol. It's a set of common known rules that allow the client and the website server to interact with one another. All of that is well and good but in lamens terms it's kind of like the unspoken rule of how you as a patron interact with say a grocery store clerk or a restaurant employee. You aren't given step by step instructions when you go into these places, we just instinctively know how to communicate with the person. Granted this is for those who know a corresponding verbal language and not to be misinterpreted as an inherited knowledge. We understand that we must speak to these employees in order to get what we want.

Client asks server, server verifies website, info is returned. 

While this may not make much sense it's a haiku regarding how HTTP works with websites. The client or you as the shopper, goes to the DNS server looking for the real address of the site, for example you searching google for the real address of a popular restaurant instead of just saying *Restaurant Name*. You and the client request copies of this information so that you can access it accordingly. Such as going to the restaurant to get the food instead of just saying you want food. Once the website or restaurant verifies the credentials of your request for info/food, the website/restaurant will return the info/food to you.

### Site Parsing
What is it, what uses it and why is this important?

Within websites regardless of how they are constructed, sites use a form of formatting. In some instances the formatting may be done through an external CSS reference sheet aka an index of code dedicated to visual formats of the website. It could also be inclusive of items such as external scripts through javascript using a a *script* indicator. Well what does all of this mean? **parsing** is a method of instructions that websites use to control the information that's passed through it. It takes the batch of code and sends it over the network using the DOM and CSSOM methods to help create the image that is displayed to the user. A good example is take a camera, you as the user setup a list of controls(the settings of the camera) and when you hit capture. The camera takes those settings into consideration and then creates an image based around what settings you gave it. Same principle, the website takes into account all of the rules such as style sheets or scripts considers the rules that are involved with them and then passes it through in the form of text and images on the screen for the user to see. 

[Parsing: HTML, CSS, Javascript](parsing.md)

**Adding Images to a website**

There are a couple ways to add an image to your website, you can do it internally by allowing the image to be in the same directory as your source code and referencing it. Or you can reference it from it's origin source such as a website.


#### Strings and Numbers in JavaScript

To add a string inside of java we will type the variable type such as *let* give the variable a name such as *string* equals(=) *"Info desired to be a string"* combined it looks like *let stringName = "String information";*. Similar to a string numbers are assigned using most of the same information. For numbers it's *let Number = 5;* only difference is we don't include the quotation marks and it's a number versus a string.

**What is a variable and why are they important?** 

As mentioned above we use a variable for a majority of our code. Well what is a variable? it's quite simple, similar to how we learned in school, a variable is simply something we assign something to. Example: X = 5, X is the variable name. For things such as strings though we might use stringName as the variable name for a string. Variables are very important when it comes to setting up code in Javascript because it not only ensures that we edit the correct code when working on it, but it also ensures that code is used properly when storing information based on the websites functionality.

[Introduction to HTML](HTML.md)

##### Miscellaneous

**What is the first step in making a website?** 

Answer: Brainstorm!, You must first sit down and either with yourself or preferably with a group work out what you want your website to not only do but what you want it to look like. If you can't put it down on paper, or up in black and white, then no amount of expert coding will make a successful website.

**What is the most important question to answer when designing a Website?** 

Answer: How and will this website help me achieve my goal? If your goal is to open a restaurant, will making a website help that? Yes it could if done right, a website could be a phenomenal tool for showcasing a new restaurant!

**Why should you use an <h1> element over a <span> element to display a top level heading?**

Answer: The reason why you would want to use the h1 element versus a span element is that a h1 refers to a header, where as span is defined as an inlend section of code typically used for giving style to the line of text it preceeds. However an h1 has a default style for headers. Another notion is that h1 will be classified as the top level header on the site, and thus no other text unless forcefully made to do so through a specific style format, will preceed it's boldness to the website.

**What are the benefits of using semantic tags in our HTML?**

Semantics much like variables are a nifty way of explaining what a section of code does. As explained above the h1 will systematically make the following text take on the pre styled characteristics of a top level header. So h1 will signify that the text is the largest and boldest text on the screen unless otherwised styled by extra code. This helps seperate certain aspects especially ones that share similar intentions such as multiple paragraphs or multiple headers.

**Describe two things that *require* Javascript in a browser**

Something commonly seen on websites that requires Javascript is an interactive map such as google maps. Things such as animated images such as gifs, or 3D renditions that appear on screen also use Javascript to show on the site. Javascript is commonly used for all aspects of a website as it's the third building block of website building following HTML and CSS, HTML for site creation, CSS for style and Javascript to make it all work together and run!

[Check out this cool site!](lab-01.html)


**Things I want to know more about**

Which types of meta data is important and which isn't?

Can the parsing sequence break and if so, how do we fix it?

Is there a way to know when it's appropriate to use an image versus explaining in text format?

