# How CSS is Structured

Some basic questions and information regarding CSS and HTML and how they are incorporated with one another.

**What are some ways we can apply CSS to our HTML?**

To understand this I need to explain what CSS means in relation to HTML. CSS also known as Cascading Style Sheets, is a nifty way of stylizing your website. So all of those pretty texts, whether it's big bold bright letters all the way down to the itty bitty fine toothed chunks of information is handled through CSS. 

The three ways we can incororate these are *internal* by setting up an internal style sheet within the same page of code even if that code is never seen on the webpage. *inline* stylizing, this one is often not preferred given that the way to use this one is in the same line of code as the codes original function, as well as an external style sheet. For obvious reasons, the external style sheet is similar to the internal style sheet in that the chunk of code isnt directly in the same spot as the functioning code. Except this style sheet is called upon from an external source and brought into our websites line of code through a scripting reference.

**Why should we avoid using inline CSS styles?**

As mentioned above this option of stylizing code is not preferred as it's done in the same line of code as the functioning code. What that means is in the same line of code that indicates the webpage to say hello and welcome to the user, we also end up with a bunch of code that styles that greeting. Now while that may sound enticing at first, keep in mind if you start deleting or changing stuff for the style you might accidently end up deleting something vital for the functioning code and not even realize it until it's too late because the line of code is just too congested with inline styling. 


**Reviewed block of code and answered questions**

h2{
  color: black;
  padding: 5px;
}

1. What is representing the selector?

  The element being used to represent the selector or what is being selected to be stylized is h2 also known as the second heading in the block of code.

2. Which components are the CSS declarations?

In this particular example the CSS declarations being used are color and padding. Color is used to change the color of the text used on the webpage while padding is used to create open space around the element's content such as space around an image or body of text as to not congest it.

3. Which components are considered properties?

Black and 5px in this case. The first property is being assigned to the color of text in the second heading turning the color of that heading black. Whiloe the padding declaration has a property value of 5px giving that heading a 5 pixel buffer so to speack around itself.

[Learning JavaScript](reading-02.md)