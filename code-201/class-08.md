# CSS Layouts

General information about CSS layouts, what they are and how we use them.

**Flexbox is designed for one-dimensional content. Explain what this means.**

It's typically ideal for side bars on webpages, the best way to reference one you've probably already seen are the ads on the left and right of a webpage, or sometimes depending on the site it may hold side notes, hotlinks, or extra images to really drive home the point of the website. When it comes to text, if there isn't any room for the text to appear, the flexbox will automatically call the information down to the next line without having to set up margins or padding by hand.

**Explain the difference between the main axis and cross axis.**

Main axis to give it a relative instance is kind of like the pre-made boarder you give for information. You can have it run along a row(horizontal) or you can have it run along the column(vertical). This will typically control the flow of the information. Where as the cross axis will run in tangent to the main axis but on the opposite scale. So if your row is column, then expect cross to run along the row. On this axis you're given the option to run the flex items either individually or as a group. Another neat thing is if those items have flex lines, they'll inherit transormation information from the flex lines.

**How can using certain properties of flexbox negatively impact accessibility?**

The major thing that's most common with using flex box and it ending up negatively is that it's often used carelessly to the point that the order of items in the flex box, don't follow the order of items in the HTML document. Resulting in information not being accessed in the order that's desired. Kind of like you have a string of information from A to Z, but inbetween you decide that X goes before B and C comes after M, and now you're all confused as to which set of information goes to which topic and if it's even relevent to one another.

**What are some advantages of using flexbox over float?**

Some major things that are an advantage to using flexbox over float, is one of the most common things like adjusting position of a block inside it's parent. As typically trying to do so, the child just inherits the information of the parent. Or one of the most frustrating is making columns in a table inherit the same height and width of each cell regardless of how much information is in one. 

**How does this topic connect with your long term goals?**

This content will help with long term goals as it'll help me with controlling visual layout of the webpage on a more specific level, and I can also start including side bars in my webpages so that way they don't just look like plain informational webpages. They can actually look professional and appealing to the future user.
