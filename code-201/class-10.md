# Debugging

**Name some key differences between a Syntax Error and a Logic Error.**

One of the most obvious differences between the two errors is exactly what each error means. A syntax error will refer to issues with the code naming convention, such as saying boat instead of boats for a naming convention.These are often accompanied with an error message in the console telling you where the issue occured. A logical error is when the naming convention is actually correct but it's implimentation such as with arithmitic does not actually work.Whether that's using the operation incorrectly or that the operation is not available to the provided syntax'd item. These are considered the hardest to solve as there's no obvious error code telling you something is wrong but that the code just isnt working as anticipated.

**List a few types of errors that you have encountered in past lab assignments and explain how you were able to correct them.**

I have actually encountered both types of errors both syntax and logical, the syntax is often accompanied by my changing a semantic name and forgetting to change it where i've implimented it. However I do often encounter a numerous amount of times of logical errors where I'll write up a code thinking it'll do what I want it to, only to not get my results and be stumped as to what the issue is. It's often found out that I'm using the right semantic name but not fully using it's type such as writing cookies instead of cookies[i] or cookies.perhour. They are rather frustrating given that I never know exactly where the issue is. So I will typically console log the information i'm trying to display to root out where the problem is.

**How will this topic continue to influence your long term goals?** 

It will influence long term goals as these are common issues regardless of how skilled you become as a developer. No one is perfect so having proper naming conventions is a must as well as including comments from time to time to help root out the problems.

**How would you describe the JavaScript Debugger tool and how it works to someone just starting out in software development?**

The debugger allows for almost real world implimentation of the site so that you can see values and assign breakpoints within your code. This is often used to set points in the code to try and find the issue of bugs that developers have that may result in not ideal results. Kind of like with a car using the ignition to set a point of where something may be wrong. Or running the hose knowing it leaks so that you can see where the leak occurs so you know how to fix it.


**Define what a breakpoint is.**

A breakpoint is a set point in the code where you as the developer want the code to stop. It's often used to help stop code early when debugging especially if you see after point X the code breaks and loops for example, you'd set a breakpoint just before that so you could investigate what happened to cause it and try and stop it before it loops again.

**What is the call stack?**

A call stack is a section of code that has already run, it will often be seen on the console because it is paired with a code line to indicate where the code made it up to before something went wrong or where the code stopped producing valid results.