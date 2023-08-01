# How the web works
Basics of how websites work and why it's important to understand

## HTTP and why it's important

One of the main things when it comes to websites, everyone knows how to use them but not everyone knows how they work. So **what is http and how does it work with websites?** Well HTTP is also known as HyperText Transfer Protocol. It's a set of common known rules that allow the client and the website server to interact with one another. All of that is well and good but in lamens terms it's kind of like the unspoken rule of how you as a patron interact with say a grocery store clerk or a restaurant employee. You aren't given step by step instructions when you go into these places, we just instinctively know how to communicate with the person. Granted this is for those who know a corresponding verbal language and not to be misinterpreted as an inherited knowledge. We understand that we must speak to these employees in order to get what we want.

Client asks server, server verifies website, info is returned. 

While this may not make much sense it's a haiku regarding how HTTP works with websites. The client or you as the shopper, goes to the DNS server looking for the real address of the site, for example you searching google for the real address of a popular restaurant instead of just saying *Restaurant Name*. You and the client request copies of this information so that you can access it accordingly. Such as going to the restaurant to get the food instead of just saying you want food. Once the website or restaurant verifies the credentials of your request for info/food, the website/restaurant will return the info/food to you.

### Site Parsing
What is it, what uses it and why is this important?

Within websites regardless of how they are constructed, sites use a form of formatting. In some instances the formatting may be done through an external CSS reference sheet aka an index of code dedicated to visual formats of the website. It could also be inclusive of items such as external scripts through javascript using a a *script* indicator. Well what does all of this mean? **parsing** is a method of instructions that websites use to control the information that's passed through it. It takes the batch of code and sends it over the network using the DOM and CSSOM methods to help create the image that is displayed to the user. A good example is take a camera, you as the user setup a list of controls(the settings of the camera) and when you hit capture. The camera takes those settings into consideration and then creates an image based around what settings you gave it. Same principle, the website takes into account all of the rules such as style sheets or scripts considers the rules that are involved with them and then passes it through in the form of text and images on the screen for the user to see. 

[Parsing: HTML, CSS, JavaScript](parsing.md)

