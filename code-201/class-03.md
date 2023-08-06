
# HTML Lists, Control Flow with JS, and the CSS Box Model


**HTML Lists**

The first thing to discuss is lists within HTML, there's two types ordered and unordered. Unordered lists are seen typically on websites as they are visually noticed as a bulleted list. Where as an ordered list is it's counterpart seen as a numbered list. 

Well **when should you use an unordered list versus an ordered list in your HTML document?(Q1 & Q3)** 

Typically it's a very common time to use an unordered list when you're wanting to make a list that it won't matter what order the items are placed in, such as a grocery list. We never worry about whether eggs are on the top or bottom of the list so long as they are on the list. However when it comes to a numbered list such as the proper steps used to carry out a task then we do worry about what order those items end up in.

**Can you change the bullet style of an unordered list and if so how?**

Yes actually you can change the bullet style of your unordered list, the way to do this is by using the attribute known as *type* when stylizing your element. There are four options when changing the style of your bullet points. There's the standard basic *circle*, then there's *disc*, *square* and lastly *triangle* the only downside is that triangle is not universally supported so be careful when attemptingt to use this type. 

Something to note, if there's no defined style to indicate which type of bullet style to use, then it will by default use the style that it's nested to. Say for example if you wanted squares under a circle list but you did not define the square type, then the items will default to using circle as their bullet type.

**Describe two ways you can change the numbers on list items provided by an ordered list**

This one is dependent on your definition of changing the numbers, there's the uncommon way known as *reversed* which will keep the order of the items but it will reverse their order number starting with highest and going down to lowest. Or similar to our unordered list there's types that can be set up. There's *a* for lowercase letter orders, *i* for lowercase Roman numerals or the standard *1* for indicating numbers, however for this last one we don't typically have to assign this as it's usually the default for an ordered list. 

[The Box Model](sourceFiles/BoxModel.html)