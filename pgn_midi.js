var array2 = [];
var array_notes = [];
var array5 = []

var globalVariable;
var delay;

var result_ = []

function find_replace() {

array5 = array5.map(function(x){ return x.replace(/N/g,"") });
array5 = array5.map(function(x){ return x.replace(/B/g,"") });
array5 = array5.map(function(x){ return x.replace(/Q/g,"") });
array5 = array5.map(function(x){ return x.replace(/R/g,"") });
array5 = array5.map(function(x){ return x.replace(/K/g,"") });
array5 = array5.map(function(x){ return x.replace(/x/g,"") });

array5 = array5.map(function(x){ return x.replace(/a1/g,"A1") });
array5 = array5.map(function(x){ return x.replace(/a2/g,"A2") });
array5 = array5.map(function(x){ return x.replace(/a3/g,"A3") });
array5 = array5.map(function(x){ return x.replace(/a4/g,"A4") });
array5 = array5.map(function(x){ return x.replace(/a5/g,"A5") });
array5 = array5.map(function(x){ return x.replace(/a6/g,"A6") });
array5 = array5.map(function(x){ return x.replace(/a7/g,"A7") });
array5 = array5.map(function(x){ return x.replace(/a8/g,"A8") });

array5 = array5.map(function(x){ return x.replace(/b1/g,"B1") });
array5 = array5.map(function(x){ return x.replace(/b2/g,"B1") });
array5 = array5.map(function(x){ return x.replace(/b3/g,"B1") });
array5 = array5.map(function(x){ return x.replace(/b4/g,"B1") });
array5 = array5.map(function(x){ return x.replace(/b5/g,"B1") });
array5 = array5.map(function(x){ return x.replace(/b6/g,"B1") });
array5 = array5.map(function(x){ return x.replace(/b7/g,"B1") });
array5 = array5.map(function(x){ return x.replace(/b8/g,"B1") });

array5 = array5.map(function(x){ return x.replace(/c1/g,"C1") });
array5 = array5.map(function(x){ return x.replace(/c2/g,"C2") });
array5 = array5.map(function(x){ return x.replace(/c3/g,"C3") });
array5 = array5.map(function(x){ return x.replace(/c4/g,"C4") });
array5 = array5.map(function(x){ return x.replace(/c5/g,"C5") });
array5 = array5.map(function(x){ return x.replace(/c6/g,"C6") });
array5 = array5.map(function(x){ return x.replace(/c7/g,"C7") });
array5 = array5.map(function(x){ return x.replace(/c8/g,"C8") });

array5 = array5.map(function(x){ return x.replace(/d1/g,"D1") });
array5 = array5.map(function(x){ return x.replace(/d2/g,"D2") });
array5 = array5.map(function(x){ return x.replace(/d3/g,"D3") });
array5 = array5.map(function(x){ return x.replace(/d4/g,"D4") });
array5 = array5.map(function(x){ return x.replace(/d5/g,"D5") });
array5 = array5.map(function(x){ return x.replace(/d6/g,"D6") });
array5 = array5.map(function(x){ return x.replace(/d7/g,"D7") });
array5 = array5.map(function(x){ return x.replace(/d8/g,"D8") });

array5 = array5.map(function(x){ return x.replace(/e1/g,"E1") });
array5 = array5.map(function(x){ return x.replace(/e2/g,"E2") });
array5 = array5.map(function(x){ return x.replace(/e3/g,"E3") });
array5 = array5.map(function(x){ return x.replace(/e4/g,"E4") });
array5 = array5.map(function(x){ return x.replace(/e5/g,"E5") });
array5 = array5.map(function(x){ return x.replace(/e6/g,"E6") });
array5 = array5.map(function(x){ return x.replace(/e7/g,"E7") });
array5 = array5.map(function(x){ return x.replace(/e8/g,"E8") });

array5 = array5.map(function(x){ return x.replace(/f1/g,"F1") });
array5 = array5.map(function(x){ return x.replace(/f2/g,"F2") });
array5 = array5.map(function(x){ return x.replace(/f3/g,"F3") });
array5 = array5.map(function(x){ return x.replace(/f4/g,"F4") });
array5 = array5.map(function(x){ return x.replace(/f5/g,"F5") });
array5 = array5.map(function(x){ return x.replace(/f6/g,"F6") });
array5 = array5.map(function(x){ return x.replace(/f7/g,"F7") });
array5 = array5.map(function(x){ return x.replace(/f8/g,"F8") });

array5 = array5.map(function(x){ return x.replace(/g1/g,"G1") });
array5 = array5.map(function(x){ return x.replace(/g2/g,"G2") });
array5 = array5.map(function(x){ return x.replace(/g3/g,"G3") });
array5 = array5.map(function(x){ return x.replace(/g4/g,"G4") });
array5 = array5.map(function(x){ return x.replace(/g5/g,"G5") });
array5 = array5.map(function(x){ return x.replace(/g6/g,"G6") });
array5 = array5.map(function(x){ return x.replace(/g7/g,"G7") });
array5 = array5.map(function(x){ return x.replace(/g8/g,"G8") });

array5 = array5.map(function(x){ return x.replace(/h1/g,"H1") });
array5 = array5.map(function(x){ return x.replace(/h2/g,"H2") });
array5 = array5.map(function(x){ return x.replace(/h3/g,"H3") });
array5 = array5.map(function(x){ return x.replace(/h4/g,"H4") });
array5 = array5.map(function(x){ return x.replace(/h5/g,"H5") });
array5 = array5.map(function(x){ return x.replace(/h6/g,"H6") });
array5 = array5.map(function(x){ return x.replace(/h7/g,"H7") });
array5 = array5.map(function(x){ return x.replace(/h8/g,"H8") });


remove_lowercase();
}

function remove_lowercase() {

//remove lowercase letters and '+' from strings

array5 = array5.map(function(x){ return x.replace(/a/g,"") });
array5 = array5.map(function(x){ return x.replace(/b/g,"") });
array5 = array5.map(function(x){ return x.replace(/c/g,"") });
array5 = array5.map(function(x){ return x.replace(/d/g,"") });
array5 = array5.map(function(x){ return x.replace(/e/g,"") });
array5 = array5.map(function(x){ return x.replace(/f/g,"") });
array5 = array5.map(function(x){ return x.replace(/g/g,"") });
array5 = array5.map(function(x){ return x.replace(/h/g,"") });

array5 = array5.map(function(x){ return x.replace(/\+/g,"") });
array5 = array5.map(function(x){ return x.replace(/\=/g,"") });
}


function saveMIDI() {
    var noteEvents = [];

    var arrayLength = array5.length;
    for (var i = 0; i < arrayLength; i++) {
    [array5[i]].forEach(function(note) {
    Array.prototype.push.apply(noteEvents, MidiEvent.createNote(note));
      });
    var track = new MidiTrack({ events: noteEvents });
    var song  = MidiWriter({ tracks: [track] });

}
    song.save();
}

function spitMIDI() {
    
    var arrayLength = array2.length;
    console.log(arrayLength);
    
    // A File
     
      if (array2.includes("a1")) {
          var a = array2.indexOf("a1");
          //array5.push("A2");
        
          delay = a;
          var note = 45; // A2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(0, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};
        
                    
      if (array2.includes("a2")) {
       var a = array2.indexOf("a2");
          //array5.push("B2");
          delay = a;
          var note = 47; // B2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(0, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};
    


      if (array2.includes("a3")) {
       var a = array2.indexOf("a3");
       
         // array5.push("Db3");
          delay = a;
          var note = 49; // C#3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(0, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};
            



      if (array2.includes("a4")) {
          var a = array2.indexOf("a4");
          var delay = a; // play one note every quarter second
          array5.push("D3");
          var note = 50; // D3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};
            
            


      if (array2.includes("a5")) {
          var a = array2.indexOf("a5");
          
          array5.push('"E3"');
          var delay = a; // play one note every quarter second
          var note = 52; // E3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};
            


      if (array2.includes("a6")) {
          var a = array2.indexOf("a6");
          array5.push('"Gb3"');
          var delay = a; // play one note every quarter second
          var note = 54; // F#3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};
            

      if (array2.includes("a7")) {
          var a = array2.indexOf("a7");
          array5.push('"Ab3"');
          var delay = a; // play one note every quarter second
          var note = 56; // G#3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};


      if (array2.includes("a8")) {
          var a = array2.indexOf("a8");
          array5.push('"A3"');
          var delay = a; // play one note every quarter second
          var note = 57; // A3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

      // B File
      
    
      if (array2.includes("b1")) {
          var a = array2.indexOf("b1");
          var delay = a; // play one note every quarter second
          var note = 47; // B2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};
            

      if (array2.includes("b2")) {
          var a = array2.indexOf("b2");
          var delay = a; // play one note every quarter second
          var note = 49; // C#2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};
        
    
   
      if (array2.includes("b3")) {
          var a = array2.indexOf("b3");
          var delay = a; // play one note every quarter second
          var note = 51; // D#3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};


      if (array2.includes("b4")) {
          var a = array2.indexOf("b4");
          var delay = a; // play one note every quarter second
          var note = 52; // E3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};


      if (array2.includes("b5")) {
          var a = array2.indexOf("b5");
          var delay = a; // play one note every quarter second
          var note = 54; // F#3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

      if (array2.includes("b6")) {
          var a = array2.indexOf("b6");
          var delay = a; // play one note every quarter second
          var note = 56; // G#3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};


      if (array2.includes("b7")) {
          var a = array2.indexOf("b7");
          var delay = a; // play one note every quarter second
          var note = 57; // A3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

 
      if (array2.includes("b8")) {
          var a = array2.indexOf("b8");
          var delay = a; // play one note every quarter second
          var note = 59; // B3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};


// C File

      if (array2.includes("c1")) {
          var a = array2.indexOf("c1");
          var delay = a; // play one note every quarter second
          var note = 36; // C2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};


      if (array2.includes("c2")) {
          var a = array2.indexOf("c2");
          var delay = a; // play one note every quarter second
          var note = 38; // D2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

 
      if (array2.includes("c3")) {
          var a = array2.indexOf("c3");
          var delay = a; // play one note every quarter second
          var note = 40; // E2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

 
      if (array2.includes("c4")) {
          var a = array2.indexOf("c4");
          var delay = a; // play one note every quarter second
          var note = 41; // F2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

 
      if (array2.includes("c5")) {
          var a = array2.indexOf("c5");
          var delay = a; // play one note every quarter second
          var note = 43; // G2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

      if (array2.includes("c6")) {
          var a = array2.indexOf("c6");
          var delay = a; // play one note every quarter second
          var note = 45; // A2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

 
      if (array2.includes("c7")) {
          var a = array2.indexOf("c7");
          var delay = a; // play one note every quarter second
          var note = 47; // B2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

      if (array2.includes("c8")) {
          var a = array2.indexOf("c8");
          var delay = a; // play one note every quarter second
          var note = 48; // C3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

// D File

      if (array2.includes("d1")) {
          var a = array2.indexOf("d1");
          var delay = a; // play one note every quarter second
          var note = 38; // D2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};


      if (array2.includes("d2")) {
          var a = array2.indexOf("d2");
          var delay = a; // play one note every quarter second
          var note = 40; // E2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};


      if (array2.includes("d3")) {
          var a = array2.indexOf("d3");
          var delay = a; // play one note every quarter second
          var note = 42; // F#2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

      if (array2.includes("d4")) {
          var a = array2.indexOf("d4");
          var delay = a; // play one note every quarter second
          var note = 43; // G2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};


      if (array2.includes("d5")) {
          var a = array2.indexOf("d5");
          var delay = a; // play one note every quarter second
          var note = 45; // A2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};


      if (array2.includes("d6")) {
          var a = array2.indexOf("d6");
          var delay = a; // play one note every quarter second
          var note = 47; // B2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};


      if (array2.includes("d7")) {
          var a = array2.indexOf("d7");
          var delay = a; // play one note every quarter second
          var note = 49; // C#3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

      if (array2.includes("d8")) {
          var a = array2.indexOf("d8");
          var delay = a; // play one note every quarter second
          var note = 50; // D3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

     // E File
    
      if (array2.includes("e1")) {
          var a = array2.indexOf("e1");
          var delay = a; // play one note every quarter second
          var note = 40; // E2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};


      if (array2.includes("e2")) {
          var a = array2.indexOf("e2");
          var delay = a; // play one note every quarter second
          var note = 42; // F#2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(0, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};
    
      if (array2.includes("e3")) {
          var a = array2.indexOf("e3");
          var delay = a; // play one note every quarter second
          var note = 44; // G#2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(0, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};
   
      
        if (array2.includes("e4")) {
        var a = array2.indexOf("e4");
          var delay = a; // play one note every quarter second
          var note = 45; // A2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(0, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};
 
    
        if (array2.includes("e5")) {
        var a = array2.indexOf("e5");
          var delay = a; // play one note every quarter second
          var note = 47; // B2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(0, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};
 
 
        if (array2.includes("e6")) {
        var a = array2.indexOf("e6");
          var delay = a; // play one note every quarter second
          var note = 49; // C#2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(0, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};
 

        if (array2.includes("e7")) {
        var a = array2.indexOf("e7");
          var delay = a; // play one note every quarter second
          var note = 51; // D#2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(0, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};
 
   
        if (array2.includes("e8")) {
        var a = array2.indexOf("e8");
          var delay = a; // play one note every quarter second
          var note = 52; // E3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(0, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};
 
    
    // F File
   
      if (array2.includes("f1")) {
          var a = array2.indexOf("f1");
          var delay = a; // play one note every quarter second
          var note = 41; // F2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

 
      if (array2.includes("f2")) {
          var a = array2.indexOf("f2");
          var delay = a; // play one note every quarter second
          var note = 43; // G2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

   
      if (array2.includes("f3")) {
          var a = array2.indexOf("f3");
          var delay = a; // play one note every quarter second
          var note = 45; // A2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};


      if (array2.includes("f4")) {
          var a = array2.indexOf("f4");
          var delay = a; // play one note every quarter second
          var note = 46; // Bb2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

      if (array2.includes("f5")) {
          var a = array2.indexOf("f5");
          var delay = a; // play one note every quarter second
          var note = 48; // C3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

 
      if (array2.includes("f6")) {
          var a = array2.indexOf("f6");
          var delay = a; // play one note every quarter second
          var note = 50; // D3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

 
      if (array2.includes("f7")) {
          var a = array2.indexOf("f7");
          var delay = a; // play one note every quarter second
          var note = 52; // E3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

 
      if (array2.includes("f8")) {
          var a = array2.indexOf("f8");
          var delay = a; // play one note every quarter second
          var note = 53; // F3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};



// G File
 
      if (array2.includes("g1")) {
          var a = array2.indexOf("g1");
          var delay = a; // play one note every quarter second
          var note = 43; // G2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

 
      if (array2.includes("g2")) {
          var a = array2.indexOf("g2");
          var delay = a; // play one note every quarter second
          var note = 45; // A2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};
 
      if (array2.includes("g3")) {
          var a = array2.indexOf("g3");
          var delay = a; // play one note every quarter second
          var note = 47; // B2
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};


      if (array2.includes("g4")) {
          var a = array2.indexOf("g4");
          var delay = a; // play one note every quarter second
          var note = 48; // C3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

 
      if (array2.includes("g5")) {
          var a = array2.indexOf("g5");
          var delay = a; // play one note every quarter second
          var note = 50; // D3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};


      if (array2.includes("g6")) {
          var a = array2.indexOf("g6");
          var delay = a; // play one note every quarter second
          var note = 52; // E3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

 
      if (array2.includes("g7")) {
          var a = array2.indexOf("g7");
          var delay = a; // play one note every quarter second
          var note = 54; // F#3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

      if (array2.includes("g8")) {
          var a = array2.indexOf("g8");
          var delay = a; // play one note every quarter second
          var note = 55; // G3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};


// H File


      if (array2.includes("h1")) {
          var a = array2.indexOf("h1");
          var delay = a; // play one note every quarter second
          var note = 57; // A3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

 
      if (array2.includes("h2")) {
          var a = array2.indexOf("h2");
          var delay = a; // play one note every quarter second
          var note = 59; // B3
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};


      if (array2.includes("h3")) {
          var a = array2.indexOf("h3");
          var delay = a; // play one note every quarter second
          var note = 61; // C#4
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

 
      if (array2.includes("h4")) {
          var a = array2.indexOf("h4");
          var delay = a; // play one note every quarter second
          var note = 62; // D4
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

 
      if (array2.includes("h5")) {
          var a = array2.indexOf("h5");
          var delay = a; // play one note every quarter second
          var note = 64; // E4
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

 
      if (array2.includes("h6")) {
          var a = array2.indexOf("h6");
          var delay = a; // play one note every quarter second
          var note = 66; //F#4
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};


      if (array2.includes("h7")) {
          var a = array2.indexOf("h7");
          var delay = a; // play one note every quarter second
          var note = 68; //G#4
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

      if (array2.includes("h8")) {
          var a = array2.indexOf("h8");
          var delay = a; // play one note every quarter second
          var note = 69; //A4
          var velocity = 127; // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127);
            MIDI.noteOn(a, note, velocity, delay);
            MIDI.noteOff(0, note, delay + 0.75)};

};



$("#save-file").click( function() {
    saveMIDI();
});


$("#btn-save").click( function() {
  var text = $("#TextArea").val();
  var array = text.split(" ");
 
  var search_term = '1.';
  var search_term2 = '2.';
  var search_term3 = '3.';
  var search_term4 = '4.';
  var search_term5 = '5.';
  var search_term6 = '6.';
  var search_term7 = '7.';
  var search_term8 = '8.';
  var search_term9 = '9.';
  var search_term10 = '10.';
  var search_term11 = '11.';
  var search_term12 = '12.';
  var search_term13 = '13.';
  var search_term14 = '14.';
  var search_term15 = '15.';
  var search_term16 = '16.';
  var search_term17 = '17.';
  var search_term18 = '18.';
  var search_term19 = '19.';
  var search_term20 = '20.';
  var search_term21 = '21.';
  var search_term22 = '22.';
  var search_term23 = '23.';
  var search_term24 = '24.';
  var search_term25 = '25.';
  var search_term26 = '26.';
  var search_term27 = '27.';
  var search_term28 = '28.';
  var search_term29 = '29.';
  var search_term30 = '30.';
  var search_term31 = '31.';
  var search_term32 = '32.';
  var search_term33 = '33.';
  var search_term34 = '34.';
  var search_term35 = '35.';
  var search_term36 = '36.';
  var search_term37 = '37.';
  var search_term38 = '38.';
  var search_term39 = '39.';
  var search_term40 = '40.';
  var search_term41 = '41.';
  var search_term42 = '42.';
  var search_term43 = '43.';
  var search_term44 = '44.';
  var search_term45 = '45.';
  var search_term46 = '46.';    
  var search_term47 = '47.';
  var search_term48 = '48.';
  var search_term49 = '49.';
  var search_term50 = '50.';  
 
 
 
  for (var i=array.length-1; i>=0; i--) {
      if (array[i] === search_term) {
          array.splice(i, 1);
    }
      if (array[i] === search_term2) {
          array.splice(i, 1);
    }
     if (array[i] === search_term3) {
          array.splice(i, 1);
    }
     if (array[i] === search_term4) {
          array.splice(i, 1);
    }
     if (array[i] === search_term5) {
          array.splice(i, 1);
    }
     if (array[i] === search_term6) {
          array.splice(i, 1);
    }
     if (array[i] === search_term7) {
          array.splice(i, 1);
    }
     if (array[i] === search_term8) {
          array.splice(i, 1);
    }
     if (array[i] === search_term9) {
          array.splice(i, 1);
    }
     if (array[i] === search_term10) {
          array.splice(i, 1);
    }
     if (array[i] === search_term11) {
          array.splice(i, 1);
    }
      if (array[i] === search_term12) {
          array.splice(i, 1);
    }
      if (array[i] === search_term13) {
          array.splice(i, 1);
    }
      if (array[i] === search_term14) {
          array.splice(i, 1);
    }
      if (array[i] === search_term15) {
          array.splice(i, 1);
    }
       if (array[i] === search_term16) {
          array.splice(i, 1);
    }
       if (array[i] === search_term17) {
          array.splice(i, 1);
    }
       if (array[i] === search_term18) {
          array.splice(i, 1);
    }
       if (array[i] === search_term19) {
          array.splice(i, 1);
    }
        if (array[i] === search_term20) {
          array.splice(i, 1);
    }
        if (array[i] === search_term21) {
          array.splice(i, 1);
    }
       if (array[i] === search_term22) {
          array.splice(i, 1);
    }
       if (array[i] === search_term23) {
          array.splice(i, 1);
    }
       if (array[i] === search_term24) {
          array.splice(i, 1);
    }
       if (array[i] === search_term25) {
          array.splice(i, 1);
    }
       if (array[i] === search_term26) {
          array.splice(i, 1);
    }
       if (array[i] === search_term27) {
          array.splice(i, 1);
    }
       if (array[i] === search_term28) {
          array.splice(i, 1);
    }
       if (array[i] === search_term29) {
          array.splice(i, 1);
    }
       if (array[i] === search_term30) {
          array.splice(i, 1);
    }
}
 
  console.log(array);
  array2.length = 0;
 array.forEach(function(entry) {
    array2.push(entry);
});
  array2.forEach(function(entry) {
    array5.push(entry);
});
 spitMIDI();
 find_replace();
 saveMIDI()
 
});
