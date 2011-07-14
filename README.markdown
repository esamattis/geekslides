
# Geek Slides

These slides were made for my introductory Node.js talk at [Geek Collision][geek]
Jyväskylä. They also served as a code example within the talk.

This is like any another HTML based slide system, but there is also clever web
server written with Node.js that allows presenter to remote control the slides
from a mobile web app. So anyone in the audience can view the slides and the
slides are immediately switched on their screens as the presenter goes on with
the slides.


## Demo

The original slides are hosted here for now:
http://melmacian.net:1337/#/slide/1

navigate with arrow keys


The remote controller interface can be found from here:
http://melmacian.net:1337/manage

But beware! There might be several people controlling the slides! :)


## Installing and hacking

If the demo is already down you can install the slides locally.

Install [Node.js][] and [NPM][] and run

    git clone https://github.com/epeli/geekslides.git
    cd geekslides
    npm install
    node app.js


You can modify the slides from views/slides.jade


If you are creating your own slides on top these, please fork this project so we
can track its usage, thanks :)


[Node.js]: http://nodejs.org/
[NPM]: http://npmjs.org/
[geek]: http://www.geekcollision.org/2011/06/v041-nodejs-change-of-location.html

