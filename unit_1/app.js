console.log("app2 is running!");

$( ()=> {

const addWord = (word) => {

  //select container to add cards
  const $flexContainer = $( '.flex-container' );

  //create a card with the word
    const $card = $( '<div>' ).addClass( 'card' ).text(word);

  //add an event listner/handler that toggles the class selected for the card that is clicked

  // add some functionality later...
    // $card.on( 'click', ( e ) => {
    //   $( e.target ).toggleClass( 'selected' );
    // });

    //append the card to the container
    $flexContainer.append( $card );
  }


let randomWord = "cat"
//random word array to randomize the words
      $.ajax({
    url:'http://words.bighugelabs.com/api/2/7ee9eb246b6c90b808629855dae0af74/'+randomWord+'/json'
}).then(
    (data)=>{
      const parsedWords = JSON.parse(data).noun.syn;
      //created the variable for retrieving the parsed data
      //define a max variable, the stopping point:
      let maxLength = 0
      if(parsedWords.length < 8){
      maxLength = parsedWords.length
    } else { maxLength = 8
      };
      //.length array method for iterating through an array
      //if length of parsedWords is less than the number I established,
      //the length is always one more than
      for(i=0; i < maxLength; i++) {
      console.log(parsedWords[i]);
      addWord (parsedWords[i]);
      //goal: log each word as we are going through the loop
      //with the i referring to the words in the array
      //take addWord and call it within the for loop
    };
    //if statement before the for loop, if the length is less than I'd like, make it so the stopping point is whatever I choose. Endpoint at data.length if less than the number I establish.
      //creating for loop to iterate over the array
        console.log(JSON.parse(data).noun.syn);
        // loop over this array of words and pass in the current word into the previous function and it should then take the place of letter---I should be able to see all the words on the page

    },
    ()=>{
        console.log('bad request');
  }


);
});
// click event, search for the word according to when they click the get synoymn button


// $(()=>{
//   $('form').on('submit', (event)=>{
//
//        event.preventDefault();
//
//     $.ajax({
//         url:'https://www.dictionaryapi.com/api/v3/references/sd2/json/school?key=ca8532bf-4e74-49af-9101-a9be85dcf269'
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
