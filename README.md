# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Rogelio A Tarin**

Time spent: **5** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)
Link: https://glitch.com/edit/#!/adaptive-ash-check

## Required Functionality

The following **required** functionality is complete:

* [y] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [y] "Start" button toggles between "Start" and "Stop" when clicked. 
* [y] Game buttons each light up and play a sound when clicked. 
* [y] Computer plays back sequence of clues including sound and visual cue for each button
* [y] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [y] User wins the game after guessing a complete pattern
* [y] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [y] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [y] Buttons use a pitch (frequency) other than the ones in the tutorial
* [y] More than 4 functional game buttons
* [y] Playback speeds up on each turn
* [y] Computer picks a different pattern each time the game is played
* [y] Player only loses after 3 mistakes (instead of on the first mistake)
* [n] Game button appearance change goes beyond color (e.g. add an image)
* [n] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [n] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](http://g.recordit.co/WnJt5dRJhw.gif)
![](http://g.recordit.co/HeFBDNbOqJ.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://theglitchy.com/en/tools/html-colors/hex/2c5463 (website used to learn about rgb colors)
https://www.w3schools.com/html/html5_audio.asp (though I didn't make any audio I tried to understand the basics of it)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[The most challenging part was probably creating the logic for the guess function, it was one thing to understand how the logic would work but actually 
implementing it in order to follow functionality is a different story. The best way for me to overcome it was to go back and review the logic for the play
clue sequence and understand how the guess counter and progress variables flow and change throughout the for loop. It also helped to take out some pen and
paper in order to trace through the code while keeping track of the variables and function calls on the side. Another challenge was trying to understand
the tone functions in order to create new frequencies. In my few years of programming I have never had to handle sound before, so this was definitely
a surprise but a pleasant one at least. Even though we were given the proper functions for the tones already I wanted to know how and why we need these functions
in order to play sound. For these functions my best bet was to turn towards the internet in order to look over a few examples that others have made and it 
was then that I was able to understand just how much you can do with web development and sound, these tones and frequencies are just the tip of the iceberg
and I look forward to attempting to create an audio player application in the future.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[After completing this introductory project I find myself curious as to how to make the site more interactive with the user with javascript. For example
I would like to learn about how to detect whether or not the mouse is hovering over specific text or a certain button. Knowing this would allow me to 
further learn about more specific tasks like getting text to change color if the user hovers over it or making usable links to other sites. I would also
like to know about the true extent of what the backgrounds of the application could be, such as using a series of images that fade in and out of the background 
or some sort of slideshow that changes images as the user scrolls through the site. Both of these aspects seem important to helping make the site more
visually appealing to potential users but I am also curious about the backend of the site. I would like to ask about the time and space complexity for 
some of the functions in order to better grasp the trade-offs for specific features, like if having a moving background would be worth more bandwidth 
and longer loading times. In summary this assignment has me interested in web development and I would like to expand my knowledge of it as a whole.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[Given more time, I would have loved to include some sort of difficulty settings. Such as adding more buttons that would allow the user to choose how
long of a sequence they would like to participate in. Another way of adding difficulty I would try to implement is by having the buttons shift positions
before giving the sequence, this would make sure the user is paying attention to the order of the colors and simply the positions that light up. And of course
I wasn't able to implement the timer at this time but it is definitely worth attempting to implement in my free time so that I may learn about keeping track
of time and displaying it to the user. In terms of refactoring I would try to have the buttons play a common buzzer frequency if the user enters an incorrect 
guess in conjunction with having the game over message to make the game feel more interactive. Lastly it would be cool to add some sort of scoring system that
displays how many games have been won versus lost in a given session and potentially having users enter in a nickname to mimic an arcade style of keeping high
scores.]



## License

    Copyright [Rogelio A Tarin]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
