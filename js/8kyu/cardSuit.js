// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// My solution
function defineSuit(card) {
    const suits = {'♣': 'clubs', '♦': 'diamonds', '♥': 'hearts', '♠': 'spades'}
    return suits[card.charAt(card.length - 1)]
}