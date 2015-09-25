# Angular.JS Coding Exercise: The Pinquisition!

The goal is to create an application to manage scoring for our new bowling
alley, **The Pinquisition**. I chose bowling because scoring is simple yet
non-trivial, and nobody expects the Pinquisition!

To review, the rules for scoring a tenpin bowling game are:

> Players try to score points by rolling a bowling ball down a flat lane in
  attempts to knock over objects called pins. A game of bowling consists of ten
  frames. During each frame bowlers are given two opportunities to bowl the ball
  down the lane and knock down the pins to score points. If a player knocks down
  all of the pins with their first ball of a frame, the frame is over and they
  receive a "strike", denoted by an "X" on the score sheet. If they do not knock
  down all of the pins they bowl their second ball. If a player knocks down all
  of their pins with their second ball they receive a "spare", denoted by a
  diagonal line ("/"). Players keep score by recording and adding up the number
  of pins they knock down in each frame.

> A player who earns a strike is awarded ten points, plus a bonus of whatever is
  scored with the next two balls in the following frame. A player who earns a
  spare is awarded ten points, plus a bonus of whatever is scored with the first
  ball of the next frame.

> If the bowler knocks down all ten pins in the tenth frame, the bowler is
  allowed to throw a third ball for that frame.

> *Source: http://sportsvite.com/sports/Bowling/rules*

## Setup

To get you started, I've provided a Node.JS service that uses Express that can
score games of bowling. However, it's not fully suited to The Pinquisition's
needs. To wit:

  1. The service does not handle "X" or "/" today, it expects all input to be
  numbers
  2. This service naively assumes that there is only one game with a single
  bowler in progress at any one time. Our bowling alley is small, but it has
  six lanes with concurrent play. Due to space limitations, each lane can only
  handle six bowlers at one time.
  3. The service does not record the games it scores.
  4. The service allows anyone to submit frames.

To get the service up and running:

  1. Clone this repository from GitHub to your local machine
  2. At the project root directory, run the following commands:
     * `$ npm install`
     * `$ node game.js`
     * `$ mocha` (in a separate window)
  3. The expected result is that mocha reports that all tests passed

This application creating during this exercise will be written using the MEAN
stack, specifically:

  * MongoDB, latest (or equivalent data store of your choice, being primarily a
      UI test)
  * Express, latest
  * Angular.JS, latest version of 1.x
  * Node.JS, latest

You may download, install and configure all of these components before starting
the timer on the exercise, though any application-specific work should be done
within the time allotted.

Updates to the Node.JS service should extend the current test suite. Your
Angular.JS code should be covered by tests as well. We use
[Protractor](https://angular.github.io/protractor/#/) here, but you may use
whatever testing frameworks you are comfortable with. It is up to your
discretion how much testing is adequate.

Because there are no assets included with this exercise, so feel free to use
whatever images and styling you wish, I highly recommend setting up a skeleton
web application before you begin, either from scratch or using a quick-start
tool like [Bootstrap](http://getbootstrap.com/) with a
[template](http://startbootstrap.com/template-categories/all/). If you feel so
moved, want to showcase your design skills and are looking for inspiration,
consider the
[medieval game of Kegel](http://www.forgedintime.com/bladesmithing-blog/2010/07/medieval-games-kegel-bowling-down-the-heathens/).

However, as guiding principle, the focus of this coding exercise is on the
functionality, ease of use and your codecraft. Think of this as more of a
feature demo, and not a GA release to production.

## Your Mission, Should You Choose To Accept It

With a focus on Angular.JS, create a single-page web application that does
several of the following:

  1. Indicates whether lanes are occupied or available
  2. Displays the scores in each of our six lanes, as they happen. Our bowling
  alley will have multiple games going on at once.
  3. Displays the highest score in each lane for the day, the calendar month,
  and all-time
  4. Allows a new user to register (whether and how to authenticate is up to
  you)
  5. Displays a registered user's personal best score and the date it happened
  6. Visually indicate when a registered user is beating their personal best
  score
  7. Allows a user to update their game with the results of their latest frame
  8. Allows an admin to reset a game, deleting the previous game in progress
  9. Allows an admin to edit a game in progress  
  10. Allows an admin to input an entire game, either historic or current
  11. An enhancement of your own design that showcases your talent

Enhancement of the backend service will undoubtedly be needed to accomplish
these requirements.

## Advice

Perform this exercise as you would any work assignment. Feel free to make use of
your resources (Stack Overflow, et al), but do not seek wholesale solutions to
this exercise.

You may complete the exercise without fulfilling all the requirements or
accomplishing them in order.

You may use other tools, web technologies and libraries as appropriate. Be
prepared to discuss your choices. Take care not deviate from the spirit of the
exercise, though.

## Submit to the Pinquisition

Before you prepare your reply, please make sure that your code compiles and that
all tests are green when you are done.

When you are finished, please commit your code on your local machine and then
[create a patch using git](http://git-scm.com/docs/git-format-patch). Please DO
NOT create a pull request against this repo. The final step is to send an email
to your contact:

  1. Informing the examiner that you have completed the test
  2. Indicates which of the requirements you chose to complete
  3. Including a copy of the patch file you created
  4. Including this honor pledge: "I have not given, received, or used any
  unauthorized assistance. The patch I submitted was developed using only the
  time permitted."

Time limit: 2 hours

If you feel so moved, you may continue working and submit a second patch with a
more complete solution. If you choose this option, be sure to indicate how much
time you spent on your final submission as well.

    $ npm install
    $ node game.js &
    $ mocha -w
