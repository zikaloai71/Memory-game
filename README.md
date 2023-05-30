#Memory Game
This is a multiplayer memory game that is made with socket.io, node.js and react. The game consists of different cards that you have to match in less number of turns than other players.

#How to play:
-Each room has an id that you can use to invite your friends to play with you.
-The game starts with at least two players and at most six players in each room.
-You can flip two cards at a time by clicking on them. If they match, they will stay face up. If they don’t match, they will flip back after a short delay.
-The goal is to match all the cards in the least number of turns.
-After the first player finishes the game, other players have only one minute to finish as well.
-In case of a draw in turns between two players, the first who has finished is the winner.

#How to run:
-Clone this repository to your local machine.
-Install the dependencies by running `npm install` in the root directory of both client and server.
-Start the server by running `npm start` in the root directory.
-Open your browser and go to http://localhost:3000 to play the game.