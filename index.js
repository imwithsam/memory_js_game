$(document).ready(function() {
  initializeBoard();
  bindCards();
  play();
});

// Build up default board state
function initializeBoard() {
  // GOAL: create 16 divs and append them to the root element
  for (var i = 1; i <= 16; i++) {
    var $div = $('<div>', {
      class: 'square',
      "data-number": i,
      text: i
    });

    $("div.root").append($div);
  }
}

// First card => store in variable
// 2nd card => compare to first click
// Win <= all cards have face-up class

function bindCards() {
  $('div.square').on("click", function() {
    $(this).addClass("face-up");
  });
}

// Start the game
function play() {
  // set clicks = 0
  var clicks = 0;

  // set firstCard to null
  var firstCard = null;

  // while the game is still running
  // when a user clicks a card
  //   if clicks == 0
  //    set firstCard to the card's value
  //    add face-up class
  //    clicks++
  //  else
  //    if firstCard == current card's value
  //      add the face-up class
  //    else
  //      reset clicks to 0
  //      remove face-up class form both cards
}
