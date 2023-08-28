# Forms and JS Events

**Why are forms so important in web development?**

Forms are traditionally important in web development as it's one of the key ways developers allow users to input data. Sometimes this data is pushed to a web server, other times and usually more commonly seen by the user is client side updating of the interface when user input is added. Such as inputting information to update a table or responsive imaging. 

**When designing a form, what are some key things to keep in mind when it comes to user experience?**

Keep it simple, as dull as it sounds forms don't need to be flashy or anything simple and to the point will do the job for users. If the form becomes too big and over whelming the user will feel frustrated and you'll often lose users rather than keep them. And lastly, only ask for the data necessary. There's no sense asking the user their favorite color if it's not important to their experience.

**List 5 form elements and explain their importance**

As redundent as it may sound, the first element is form itself, and what it does is define the form along with its attributes that will determine that form. Fieldset is the following element, and it often is used for creating widget sets that typically hold the same function. Following that there's the legend which is used to label and describe the purpose of the fieldset. One of the most important elements is the label element, this is considered the formal way of defining a label for an html form widget. Similarly it's how we as developers us ID to identify sections of code, the lebel identifies the widget being used. And it's complimentary element is the input, this element will often define the way the user is expected to input the desired information whether it's a text field for input or a check box.

**How would you describe events to a non-technical friend?**

Events are kind of like parties on a technical side. They go off with pre-planned requirements. Think of it kind of like new years. The new year count down ball will only count down at a specific pre determined time. Or more on the party example, confetti might go off when people scream surprise. They are things that happen when conditions are met. However those events don't always have to be good, much like when life choices aren't right you might end up with a bad event. 

**When using the addEventListener() method, what two arguments will you need to provide?**

Typically the event listener method will require the click argument, as in the listener is looking for a user click. And the other argument is typically the action desired or one that will be influenced. Such as a background color needing to be changed, the event listener will look for a user click and plan to adjust the back ground color. 

**Describe the event object. Why is the target within the event object useful?**

The event object is typically inside of an event handler. It's most commonly seen as *event*, *evt*, or *e* and what it usually does is pass the desired features or information onto the handler. Much in the way way calling a function allows for the information from a method inside an object. 

**What si the difference between event bubbling and event capturing**

Event bubbling is how the default browser will respond to the targeted events especially at the nested elements. This is typically what fires first on the inner nested level as well. Event capturing is the flip side to this, it'll fire in the same way, but instead of firing on the inner most element, it'll fire on the outermost element and work it's way inside to the inner most element. 


## Things I want to know more about

Are there any limitations on the way event's can be customized? Such as can events be triggered by a random work through of the site instead of using a check box or text field?
