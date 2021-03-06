# Musical-Chess
Music generated by moves on a chessboard in pure Javascript. Play your own moves or paste a PGN into the text box to create a MIDI file. Each file is associated with a major key, with each square in the file corresponding to one note in the scale.

# About
This web app was primarily inspired by John Cage's piece *Reunion*, performed with Marcel Duchamp. You can read about the piece [at this link](http://www.openculture.com/2017/09/when-john-cage-marcel-duchamp-played-chess-on-a-chessboard-that-turned-chess-moves-into-electronic-music-1968.html). 

The PGN is grabbed from the Javascript chessboard and converted into music, with each square corresponding to a pre-determined note. The A file corresponds to the A major scale, the B file to the B major scale, and so on, with the H file corresponding to Bb major. 

# Other Libraries
This web app uses the following libraries for chessboard and MIDI rendering:
* [Chessboard.js](https://github.com/oakmac/chessboardjs)
* [MIDI.js](https://github.com/mudcube/MIDI.js/)
* [jsmidi (in a slightly edited form)](https://github.com/sergi/jsmidi)
