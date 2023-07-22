# Operators & Loops

**Expressions**

To first understad operators and loops we must first understand what goes into them. First and for most we have expressions. Now **what are expressions**? Expressions are a nifty way of saying an equation like in math for example *x = 5* is an expression. It denotes that the variable X is equal to the value of the number 5. Expressions at a high level of understanding, a valid unit of code that that resolves to a value. However it doesn't have to be just numbers, it can be words as well, to do an expression of text, we write *x = "five"* we simply put the amount either in words or numbers inside quotation marks. 

**Loops**

Code can be executed to run in a way where it seems like it has no end unless we as the developers give it an end. To do this we use something called *Loops*. Well **what are loops and why do we use them?** To put it simply, a loop is used to continously run a section of code until it reaches a pre-determined end. For example if you wanted a specific image to be run until it reaches a total of say six visible images. We would use a loop to say *if user inputs six, paste image six times*. However if no set limit is set, then a loop can run indefinately without end. 

**For Loops**

One of the common types of loops is known as a for loop. What this means is that the loop will continue running so long as the conditions are true. Once the loops hits a value of false then the loop will end. Example: *for(initialize loop, condition of loop, afterthought) run function* In this example, once the initialize condition is met, say a number is entered, run loop until that condition is met, otherwise fail. So for our image example *for(userNumber, paste image < userNumber, terminate) run code. In this instant it would take the users input, past the image based on number being less than user's input, then terminate.

**While Loops**

Another kind of loop is a while loop. This one is similar to a foor loop, except there's typically no end goal. This loop would  run so long as the condition remains true. Example *x = 1, while(x < 5) x++* what this example means is x starts off as 1, and while the x value is less than 5 it will add one to the x value. So it'll run from 1-5 and then it'll stop.