# The Viable Alternative's Koding Hackathon Submission

[![Koding Hackathon](/images/badge.png?raw=true "Koding Hackathon")](https://koding.com/Hackathon)

This is our submission repository for the Koding hackathon. 

## Team
<img src="/2014-12-07.jpg" height="400px" width="400px">

We are a team of students at Carnegie Mellon in Pittsburgh, PA. We love web development and graphics processing and wanted to use this event as an excuse to make a fun, shiny HTML5 game.

## Description

Meowtex is an HTML5 game that teaches mutex concepts to beginner programmers in a fun way. These adorable cats will walk towards their goal, but you need to use mutual exclusion principles to keep them from stepping into the same pen as another cat or they'll tear each other apart. 
Extensive research has revealed to us that people will do/learn/master anything to save kitties. 

## How to Play

The cats are going to automatically walk along the predetermined path. The player is supposed to prevent more than one cat from entering the same pen (demarkated by fences) by putting locks in their path. When a cat walks over a lock, all locks of that color will block other cats from moving over that grid space, until the first cat (one that locked) walks over a flag of the corresponding color. 

Controls:
Click on a colored lock and click on the grid to place it. Shift-click to place a flag of that color. 

## Libraries used

[p5.js](http://p5js.org)
