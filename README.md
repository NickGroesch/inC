# inC 

## About the Project
*inC* is a minimalist composition by Terry Riley, where any number (Terry suggests 53) of performers of any kind of instrument repeat each of 53 phrases many times as desired. In the context of covid-19 regulations prohibiting performance, I am creating two UIs for a single individual to play this music.

### Composer Mode
Composer view is a react UI where the user takes full control of starting, prodding, and mixing the musicians. I eventually hope to add a backend for persisting musicians created by users.

### Phaser Game
If you've ever wanted conduct an ensemble of musicians, or its rough equivalent herd cats, this game is for you. Presently you are a star that prods musicians to the next phrase by colliding with them. I hope to replace this stub with a spritesheet of a walking conductor swinging a baton. Future additions may include pizza and beer, to attract the musicians.

## Built With
* Tone.js
I have intentionally circumvented the transport pattern of Tone.js, and replaced it with a generator/timeout callback pattern so that eventually I can have the musicians fall out of sync if they haven't been herded in too long. 
* Phaser.js
* React.js
## next steps
* master volume
* add the rest of phrases
* implement the ending
* do we need a seperate pause function, or just faders?