# Local Storage and How to use it on Websites

**Why would a developer use local storage for a web application?**

The primary reason is to ensure that applications aren't in a perpetual stateless instance. What this means is every time the app is closed, the data resets. Local storage allows for the application to keep a log of it's most recent instance and maintain that state ensuring the user gets to continue from where they left off.

**What information should not be stored in a local storage?**

Something that was commonly used but is now widely discouraged is the allowance of cookies, which is a key that is placed on the users local machine that allows access to the domain. The main reason these are discouraged is because they are rather dated methods for accessing information but also that it allows others to spy on someone's local surfing history.

**Local storage can store what type of data? How would you convert it to that type before storing?**

Local storage will typically store converted cookie information into a more noticeable sense. Typically like objects or variables. To do this all you h ave to do is modify the localStorage object by using the setItem and getItem method. For example localStorage.setItem('favoritePizza', 'pepperoni'). If you were to call the local storage item favorite pizza it will understand the value to be pepperoni. Much like calling a variables string information using console.log

## Things I want to know

Are there any limitations on what can be stored? How do we allow user stored information to be read in, versus hard coding the stored information?