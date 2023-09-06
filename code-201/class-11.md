# Audio, Video, Images

**Explain how the ability to use video and audio on the web has evolved since the early 2000s**

First thing to note is that the original plug-in based system of including audio and videos to websites involved using technology known as Flash and Silverlight, while good for their time, they also came with countless security and accessibility risks. Again at the time this wasn't a major issue as the internet hadn't fully popped off and wasn't heavy on data storage of individual users involving the internet, but as it became more and more of the norm. This system became outdated and needed changing. 

**Describe the use of the src and controls attributes in the video element.**

Src otherwise known as source is considered in the same way as we utilize images, it's the source file we intend to use whether thats an online video link, or a stored asset on our local hosted machine. Controls, while not needed to carry out the video showcasing, it is still typically necessary when utilizing the video as it allows for user control over the video which makes it invaluble to those with disorders who might need to suddenly pause the video for a certain reason, or for those who may not be able to hear the video might need to adjust the volume.

**Why is it important to have fallback content inside the video element?**

The fall back content is typically desired as it will give the user some indication of what the video was intended to show on the rare off chance the browser is unable to support the video content or player that it was provided with. So say for example if you have a video of a bear catching a fish out of a river, while lengthy this could be fall back content so that way the user can visualize or search up a similar video to get the idea of the message you were trying to convey to them.

**Write a very short story where audio and video are characters**

Audio: Where is the screen?
Video: Over here!
Audio: What!?! I can't here you!
Video: Over here!! Just look over here!!
Audio:.....
Video: Do you see it?
Audio: What!?! Sorry I can't hear you!!
Video: Can you not see it?
Audio: Sorry, I can't see anything, I don't have vision like Video, I can only hear things that have audio.
Video: Oh that explains things, I can only show things but usually have no audio.

**How does Grid layout differ from Flex**

Flex can be used to position items according to developer desire which can be setup to look similar to a Grid, however Grid will by default build the items in grid format and cannot be changed to be layed out differently than a grid. However typically with a Grid you must indicate a beginning and an end to simulate your output, where as flex can have no set end and can even have items just spliced inbetween other items at will. 

**Grid container, grid item, and grid line are a few important terms to understand when using Grid. Please describe these terms in a few sentences.**

The grid container much like any other container is what will be defined to hold the corresponding grid information. Much like a box designed for holding keys or nickknacks. Grid Item is considered the children of the grid container or the keys and nickknacks for references sake. Grid line will be what helps define structure of the grid or in our case it will be what divies up the space inside our box so we know what's in each section. 

**Besides making a site visually appealing across different screen sizes. Why should developers make images responsive?**

Responsive images are very important because we as developers need to consider the idea that all users who visit our site, won't always be on a computer to fully see the images that appear as they are described to be. So we need a responsive image that will take into account the change in need like splitting the image up or cropping it to fit the format so that way it still maintains it's visual appeal even if the screen is much smaller.

**Define the following img, attributes srcset and sizes. Write an example of how they are used.**

srcset will define the set of images we as developers will allow the browser to choose between. This is often used when selecting from a source of multiple images. Kind of like creating a picture book and then displaying only a couple at a time. Sizes will define the conditions typically like screen width and will indicate what size the image would be best to choose from when certain conditions are true. Such as picking an appropriate image from our library based on the size of the screen given to the generator.

**How is srcset more helpful for responsive images than CSS or JavaScript?**

Srcset is kind of like creating the library structure around the books we want to hold, without having to go into the empty library and create a shelf for ever book we want, or cutting out a space for each book to go on that shelf . Srcset will just know typically based on parameters set up by the developer how long or how tall that book shelf needs to be.


## Things I want to know

Can this srcset be used to display a library of videos instead of images? And if so how responsive is it compared to the images?