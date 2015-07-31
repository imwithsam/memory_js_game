$(document).ready(function() {
  initializeBoard();

  var $firstCard = null;

  $(".square").on("click", function() {
    $(this).addClass("face-up");

    if ($firstCard) {
      // TODO: Refactor into a isMatch function
      if ($firstCard.text() === $(this).text()) {
        $firstCard = null;
      } else {
        setTimeout(function() {
          turnFaceUp($firstCard, $(this));
          $firstCard = null;
        }.bind(this), 1000);
      }
    } else {
      $firstCard = $(this);
    }
  })
});

// TODO: Add shuffle cards function

// TODO: Add win condition

function turnFaceUp(/* args */) {
  var cards = Array.prototype.slice.call(arguments);

  cards.forEach(function(card) {
    card.removeClass("face-up");
  });
}

// Build up default board state
function initializeBoard() {
  for (var i = 1; i <= 16; i++) {
    var $div = $('<div>', {
      class: 'square',
      text: i % 8
    });

    $("div.root").append($div);
  }
}

// First card => store in variable
// 2nd card => compare to first click
// Win <= all cards have face-up class


