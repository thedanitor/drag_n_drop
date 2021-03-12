# Drag N Drop

https://thedanitor.github.io/drag_n_drop/

This project is from the Day 21 code along video from Udemy's 50 projects in 50 days series focused on web development. I have added some comments to the CSS and JavaScript to make notes to myself why certain choices are being made and what particular lines of code do.

Photo by <a href="https://unsplash.com/@pietrozj?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pietro Jeng</a> on <a href="/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

### Overall Impression

So glad to finally learn how to effectively use the drag and drop feature! Would never have thought to prevent default on dragover/dragenter.
### Things Learned

* Get random unsplash image with url "https://source.unsplash.com/random/150x150" Can specify size.
* There are many "drag" events: dragstart, dragend, dragover... that can be used as event listeners.
* Can use setTimeout with 0 ms. Will trigger function after other functions