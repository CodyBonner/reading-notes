# Parsing: HTML, CSS, JavaScript

There are different things that happen when a website is parsed. All of which have a heiarchy in which they follow when sites are shown for us as the users. 

First things first is that HTML is the first thing parsed when a site is rendered out for us. 

## HTML

The first thing that gets parsed or in lamens terms processed for a website is the HTML markup. Well what does this mean? It means that when a website is running the first thing it does is a term called Tokenization and tree creation. We call it a tree because much like it's nature counterpart, it has a base trunk and branches that have various forms of shapes and sizes of it's information. These trees typically have tokens such as starting and ending tags, names for these branches and values inside those branches or in this case the leaves of the branch. For convenient referencing, we'll call this the DOM Tree.

### CSS(OM) 

Similar to HTML's parsing method, CSS has a tree system as well. Known as the CSSOM Tree, much like the DOm tree mentioned above, the CSSOM tree is a way for the website to create and understand the information that is being brought in from an outside source like a style sheet. Think of it as a way like you get instructions for a project from someone else but it has their notes all over it, notes you have no idea what they mean or why they are important. However you're given a key for things like certain terms. This key allows you to have useable knowledge of information you've been given and allows you to work with it.

#### JavaScript

Javascript parsing is pretty simple, it's taking all of these various trees that are created when moving from source code to a website, and passing them into the compiler. This is also known as JavaScript Compiling.