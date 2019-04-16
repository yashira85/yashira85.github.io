console.log("app2 is running!");

$( ()=> {

const addWord = (word) => {

  //select container to add cards
  const $flexContainer = $( '.flex-container' );

  //create a card with the word
    const $card = $( '<div>' ).addClass( 'card' ).text( word);

  //add an event listner/handler that toggles the class selected for the card that is clicked
    $card.on( 'click', ( e ) => {
      $( e.target ).toggleClass( 'selected' );
    });

    //append the card to the container
    $flexContainer.append( $card );
  }
});

let randomWord = "blue"
//random word array to randomize the words 
      $.ajax({
    url:'http://words.bighugelabs.com/api/2/7ee9eb246b6c90b808629855dae0af74/'+randomWord+'/json'
}).then(
    (data)=>{
        console.log(JSON.parse(data).noun.syn);
        // loop over this array of words and pass in the current word into the previous function and it should then take the place of letter---I should be able to see all the words on the page
    },
    ()=>{
        console.log('bad request');
    }
);
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
