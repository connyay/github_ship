
(function() {
    'use strict';

    var boatRegex = /\/\*!?(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)[ \t]*\*\//;

    var boats = [
function() {/*
             |    |    |
             )_)  )_)  )_)
            )___))___))___)\
           )____)____)_____)\\
         _____|____|____|____\\\__
---------\                   /---------
  ^^^^^ ^^^^^^^^^^^^^^^^^^^^^
    ^^^^      ^^^^     ^^^    ^^
         ^^^^      ^^^
*/},
function() {/*
     _
    /|\
   /_|_\
 ____|____
 \_o_o_o_/
~~ |     ~~~~~
___t_________ 
*/},
function() {/*
     __/\__
  ~~~\____/~~~~~~
    ~  ~~~   ~. 
*/},
function(){/*
       _~
    _~ )_)_~
    )_))_))_)
    _!__!__!_
    \_______/
  ~~ ~~~~~ ~~ ~
~~ ~~~~  ~~~~ ~~~~
*/},
function(){/*
       (`-,-,
       ('(_,( )
        _   `_'
     __|_|__|_|_
   _|___________|__
  |o o o o o o o o/   
 ~'`~'`~'`~'`~'`~'`~
*/},
function(){/*
                __/___
          _____/______|
  _______/_____\_______\_____
  \              < < <       |
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
},
function(){/*
             /|~~~
           ///|
         /////|
       ///////|
     /////////|
   \==========|===/
~~~~~~~~~~~~~~~~~~~~~
*/
},
function(){/*
    __|__ |___| |\
    |o__| |___| | \
    |___| |___| |o \
   _|___| |___| |__o\
  /...\_____|___|____\_/
  \   o * o * * o o  /
~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
},
function(){/*
         /|\
       /__| )
     /____| ))
   /______| )))
 /________|  )))
         _|____))
 \======| o o /
~~~~~~~~~~~~~~~~~~~
*/
},
function(){/*
      I\
      I \
      I  \
      I*--\
      I    \
      I     \
      I______\
 _____I__O______
  \     ( )     b  ^  ^
^^^^^^^^^^^^^^^^^    ^
*/
},
function(){/*
               /|___
             ///|   ))
           /////|   )))
         ///////|    )))
       /////////|     )))
     ///////////|     ))))
   /////////////|     )))
  //////////////|    )))
////////////////|___)))
  ______________|________
  \                    /
~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
},
function(){/*

                   ,:',:`,:'
                __||_||_||_||___
           ____[""""""""""""""""]___
           \ " '''''''''''''''''''' \
    ~~~^~^~^^~^~^~^~^~^~^~^~~^~^~^~^~~^~^
*/
},
function(){/*
       .
       |\
     _/]_\_
  ~~~"~~~~~^~~
*/
},
function(){/*
           4
       _./[][]
      / /[][][]\
      \/ [][][][]
       \=='='='=/
  ~~~~~~\______/~~~~
  ~~~~~~~~~~~~~~~~~~
*/
},
function(){/*
            .
            |\
            | \
            |  \
            |   \
            |    \
            |     \
            |      \
            |       \       ____O
            |        \     .' ./
            |   _.,-~"\  .',/~'
            <-~"   _.,-~" ~ |
^"~-,._.,-~"^"~-,._\       /,._.,-~"^"~-,._.,-~"^"~-,._
~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._
^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._
~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._

*/
}

];

    var shipImg = buildShipImage();

    var shipBtn = document.createElement('button');
    shipBtn.className = 'btn';
    shipBtn.style.float = 'left';
    shipBtn.appendChild(shipImg);

    shipBtn.onclick = function(ev) {
        ev.preventDefault();
        var commentField = document.getElementById('new_comment_field');
        // Get a random boat
        var boat = boats[Math.floor(Math.random()*boats.length)];
        // Jam it in
        var asciiBoat = boatRegex.exec(boat.toString())[1];
        var val = commentField.value;
        if (val) {
            val += '\n';
        }
        commentField.value = val + ('```\n' + asciiBoat + '\n```');
    };

    var commentBtns = document.getElementById('partial-new-comment-form-actions');
    commentBtns.appendChild(shipBtn);

    function buildShipImage() {
        var img = document.createElement('img');
        img.className = 'emoji';
        img.title= ':ship:';
        img.alt= ':ship:';
        img.src = 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a2.png';
        img.height = '20';
        img.width = '20';
        img.align = 'absmiddle';
        return img;
    }
}());