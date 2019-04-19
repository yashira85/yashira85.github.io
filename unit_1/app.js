console.log("app2 is running!");

$( ()=> {
  // console.log('anonymous');

  const addWord = (word) => {
    $(".carousel-synonyms").empty();

    //select container to add words---do I need flex-container?
    // const $flexContainer = $( '.flex-container' );
    // <--------------------making cards-------------->
    //create a card with the word---dont uncomment unless you want to use cards
    // const $card = $( '<div>' ).addClass( 'card' ).text(word);

    //add an event listner/handler that toggles the class selected for the card that is clicked

    // add some functionality later...
    // $card.on( 'click', ( e ) => {
    //   $( e.target ).toggleClass( 'selected' );
    // });

    // append the card to the container
    // COMMENT OUT    $flexContainer.append( $card );
    // } ****Uncomment above to see words listed on the screen******
    // <-------------basic functionality-------------->

    // let randomWord = "blue"//this is the value I need to capture
    $.ajax({
      url:'http://words.bighugelabs.com/api/2/7ee9eb246b6c90b808629855dae0af74/'+word+'/json'
      //random word array to randomize the words
    }).then(
      //(all promise objects have a .then() method as the promise is made first, and only then can the next action can take place)
      (data)=>{
        const parsedWords = JSON.parse(data).noun.syn;
        //created the variable for retrieving the parsed data
        //defined a max variable (syn generation stopping point):
        let maxLength = 0
        if(parsedWords.length < 8){
          maxLength = parsedWords.length
        } else { maxLength = 8
        };
        for (let i=0; i < 8; i++) {
          console.log(JSON.parse(data).noun.syn[i]);
          //created a jquery div element (hasn't been appended yet)
          let word = $("<div>");
          word.html(JSON.parse(data).noun.syn[i])
          $(".carousel-synonyms").append(word)
          word.addClass("button-words");
          //this (above) is how to create an html element with jquery
        }
        //remember, [i] after syn is referencing the synonym array

        // <----------------form tag--------------->

        // <---------------carousel----------------------->
        //Global Variables

        let currentWordIndex = 0;
        let numOfWords = $('.carousel-synonyms').children().length-1;
        //counting the children of carousel synonyms
        let $currentWord = $('.carousel-synonyms').children();
        //referencing the first p tag in the collection of synonyms (the first in line ) no, not doing p tags anymore, using divs now


        // <-----------carousel buttons------------------->
        //next button
        $('.next ').on('click', () => {
          console.log('next button');


          //hide the current synonym
          $currentWord.eq(currentWordIndex).hide();
          //pulling the array of divs created earlier. Eq is a jquery method that referencing the currentWordIndex--it selects an element with a specific index number. This is allowing us to touch the jquery child, not just reference it. Everything to the left of the hide jquery function is about the jquery object for the synonym and to the right we are able to hide the the current child.
          //now, increment the currentWordIndex to move forward
          if(currentWordIndex < numOfWords ) {
            currentWordIndex ++
          } else {
            currentWordIndex = 0
          }
          //show next synonym
          // $('.carousel-synonyms').children() ***make it cleaner and use $currentWord****
          $currentWord.eq(currentWordIndex).show();

        })
        //now, for the previous button:
        $('.previous').on('click', () => {
          console.log("previous button");
          // $('.carousel-synonyms').children() ***make it cleaner and use $currentWord****
          $currentWord.eq(currentWordIndex).hide();
          //now we are decrementing the currentWordIndex so we can move backward
          if(currentWordIndex > 0 ) {
            currentWordIndex --;
          } else {
            currentWordIndex = numOfWords
          }
          //now,to show the previous synonym
          $currentWord.eq(currentWordIndex).show();
          //remember $currentWord was formerly .carousel-button previous

        })

      });
    };
//only calling the function when user iput is recieved
    $('form').on('submit', () => {
      const randomWord = $('#input-box').val();
      console.log(randomWord);
      addWord(randomWord);
      //place this so the word disappears after refresh
      event.preventDefault();
      $(".carousel-synonyms").trigger('reset');
      //reference function that makes AJAX call and passes through randomWord
    });

//
//       //.length array method for iterating through an array
//       //if length of parsedWords is less than the number I established,
//       //the length is always one more than
//     COMMENT OUT THIS BLOCK for(i=0; i < maxLength; i++) {
//       console.log(parsedWords[i]);
//       addWord (parsedWords[i]);
//       //goal: log each word as we are going through the loop
//       //with the i referring to the words in the array
//       //take addWord and call it within the for loop
//   COMMENT OUT THIS  };
//     //if statement before the for loop, if the length is less than I'd like, make it so the stopping point is whatever I choose. Endpoint at data.length if less than the number I establish.
//       //creating for loop to iterate over the array
//     COMMENT OUT THIS    console.log(JSON.parse(data).noun.syn);
//         // loop over this array of words and pass in the current word into the previous function and it should then take the place of letter---I should be able to see all the words on the page
//
//     },
// COMMENT OUT THIS    ()=>{
//         console.log('bad request');
  // }


// );


// // <----------------carousel----------------------->
//
//
// $(() => {
//   //Global variables
//
// //adding click functionality through event listener and event handler
// //the next button
// let parsedWords = 0;
// let NumOfWords = $('.carousel-synonyms').children().length-1;
//
// let $currentWord = $('.carousel-synonyms').children();
// //-----------------
// //event listening
// // -----------------
// //next button
// $('.next').on('click', () => {
//
// //hide the current image
// $('.carousel-synonyms').children().eq(parsedWords.hide());
// //show the next image
// if(parsedWords < 0) {
//   parsedWords ++
// } else {
//   parsedWords = 0
// }
// // currentImgIndex++;
//
// $('.carousel-synonyms').children().eq(parsedWords).show();
//
// })
//
// $('.previous').on('click', () => {
//   // stuff will go here
//  }
//
//
//
//
//
// )
//
//   // stuff will go here
// })
//
// // click event, search for the word according to when they click the get synoymn button
//
//
// // $(()=>{
// //   $('form').on('submit', (event)=>{
// //
// //        event.preventDefault();
// //
// //     $.ajax({
// //         url:'https://www.dictionaryapi.com/api/v3/references/sd2/json/school?key=ca8532bf-4e74-49af-9101-a9be85dcf269'
//     }).then(
//         (data)=>{
//             $('#word').html(data.Word);
//             $('#syn1').html(data.Syn1);
//             $('#syn2').html(data.Syn2);
//         },
//         ()=>{
//             console.log('bad');
//         }
//     );
// })
// //
//
//
});
;
;
