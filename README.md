# inC 

## About the Project
*in C.* is a minimalist composition by Terry Riley, where any number (Terry suggests 35) of performers of any kind of instrument repeat each of 53 phrases many times as desired. In the context of covid-19 regulations prohibiting performance, I am creating two UIs for a single individual to play this music.

### Composer Mode
Composer view is a react UI where the user takes full control of starting, prodding, and mixing the musicians. I am adding a backend for persisting musicians created by users.

### Phaser Game
If you've ever wanted conduct an ensemble of musicians, or its rough equivalent shepherd a flock of felines, this game is for you. Presently you are a star that prods musicians to the next phrase by colliding with them. I hope to replace this star-stub with a spritesheet of a walking conductor aggressively swinging a baton. Future additions may include pizza and beer, to attract the musicians.

## Built With
* Tone.js
I have *knowingly and naughtily* circumvented the transport pattern of Tone.js, and replaced it with a generator/timeout callback pattern to allow desyncronization and explore generators. 
* Phaser.js
* React.js
## next steps
* implement the ending