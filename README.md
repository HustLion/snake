# Snake
This is a browser-based game using html and javascript.

I use *Eclipse* with the plugin *HTML Editor (WTP) Luna* and *Firefox* to learn and develop it.

## Structure
The entry point is [index.htm](index.htm). It has a mininal structure with one canvas and two paragraphs on the page.

Once open the [index.htm](index.htm), click on the canvas which appears as a black box will trigger the event `onclick`, which calls the function `gamerun()` in `game.js` and starts the game.

I think it's better to draw some UML graph here but I don't have the tech yet. Maybe generate a github page? Later.

It runs like as this:

1. game.js.`gamerun()`
2. lib.js.`init()`
3. set some variables
4. lib.js.`createsnake()`
5. lib.js.`newfood()`
6. set the initial state
7. call game.js.`step()` every 100 ms and listen to keyboard events with function lib.js.`onKeyDown(evt)`



# Original README
A simple clone of the snake game, developed as my first attempt at using `canvas` and Javascript.

It was originally intended for the [0hgame jam](http://0hgame.eu), but couldn't make it on time. 

You can try it [live](http://diz.es/snake).

Thankful mention to [Bill Mill's tutorial](http://billmill.org/static/canvastutorial/), my starting point.
