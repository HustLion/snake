# learnt- Snake - Web
Browser based, really simple game as a start: [Snake](https://github.com/HustLion/snake), with this [tutorial](http://billmill.org/static/canvastutorial/index.html) which refers to more advanced material about [collision](http://www.metanetsoftware.com/technique/tutorialA.html). 

Some good resources: 
* [Web Reference](http://www.webreference.com/)
* [Mozilla Canvas Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial), which links to [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) and [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) tutorials, really helpful.
* [CodeMirror](http://codemirror.net/): CodeMirror is a versatile text editor implemented in JavaScript for the browser.
* [Firebug](http://getfirebug.com/): an essential tool for any javascript developer. 
* [jQuery UI](http://jqueryui.com/)
* [jQuery](http://jquery.com/)
* [Mako](http://www.makotemplates.org/): Mako is a template library written in Python.

Tool:
* Eclipse
* HTML Editor (WTP) Luna
* Firefox


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

## Notes

[keyCode](http://www.cnblogs.com/shyy/archive/2012/04/09/2453029.html)

Refactored the code for better reading. I put the details of `init()` into the `game.js` such that by reading `game.js` only (hopefully) one can understand the main structure of the game.

## bug found
After clicking the canvas to start, before the game ends, if you click again, the game will reload and no matter how you play your game will end soon and the "Game Over" prompt windows will prompt again and again.


# habit
Download libraries for repo but when deploy, refer to CDN.
