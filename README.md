# Scrumble
Projet de réalisation du jeu Scrumble en relation avec le réseau Pyxis

## How to run
```sh
# run server (expressJS) :3051
cd back/server
npm start
cd ../..

# run admin (if needed) (AngularJS) :4200
cd back/front-admin
npm run start
cd ../..

# run game (custom framework) :3000
cd front-game
npm run dev

```

## TO DO 
* Create .env-example
Dev who clone project can know what environment variable the application need

* (OK) Create route loader (for keeping app.js cleaner) 
* Use .env file to store private environment variable (rather config.json)
* JWT should be placed in a middlewares.js file
* Remove useless comments to keep readable code