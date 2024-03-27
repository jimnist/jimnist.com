var yellows = [
  {x: 6, y: 0, c: '#d4bfaa'},
  {x: 7, y: 0, c: '#ffdfaa'},
  {x: 8, y: 0, c: '#ffbf55'},
  {x: 9, y: 0, c: '#d4bf55'},
  {x: 10, y: 0, c: '#ffbf55'},
  {x: 11, y: 0, c: '#ffdfaa'},
  {x: 12, y: 0, c: '#d4bfaa'},
  {x: 5, y: 1, c: '#ffdf55'},
  {x: 6, y: 1, c: '#ffbf55'},
  {x: 7, y: 1, c: '#ffdf55'},
  {x: 8, y: 1, c: '#ff5'},
  {x: 9, y: 1, c: '#ff5'},
  {x: 10, y: 1, c: '#ffdf55'},
  {x: 11, y: 1, c: '#ffdf55'},
  {x: 12, y: 1, c: '#ffbf55'},
  {x: 13, y: 1, c: '#d4bf55'},
  {x: 3, y: 2, c: '#d4bfaa'},
  {x: 4, y: 2, c: '#7f1f00'},
  {x: 5, y: 2, c: '#551f00'},
  {x: 6, y: 2, c: '#551f00'},
  {x: 7, y: 2, c: '#d49f55'},
  {x: 8, y: 2, c: '#ff5'},
  {x: 9, y: 2, c: '#ffdf55'},
  {x: 10, y: 2, c: '#ff5'},
  {x: 11, y: 2, c: '#d4bf55'},
  {x: 12, y: 2, c: '#551f00'},
  {x: 13, y: 2, c: '#7f1f00'},
  {x: 14, y: 2, c: '#551f00'},
  {x: 15, y: 2, c: '#d4bfaa'},
  {x: 2, y: 3, c: '#ffdfaa'},
  {x: 3, y: 3, c: '#7f1f00'},
  {x: 4, y: 3, c: '#d4bf55'},
  {x: 5, y: 3, c: '#ff5'},
  {x: 6, y: 3, c: '#d4bf55'},
  {x: 7, y: 3, c: '#551f00'},
  {x: 8, y: 3, c: '#ffdf55'},
  {x: 9, y: 3, c: '#ff5'},
  {x: 10, y: 3, c: '#ff5'},
  {x: 11, y: 3, c: '#551f00'},
  {x: 12, y: 3, c: '#d49f55'},
  {x: 13, y: 3, c: '#ff5'},
  {x: 14, y: 3, c: '#d4bf55'},
  {x: 15, y: 3, c: '#7f1f00'},
  {x: 16, y: 3, c: '#d4dfaa'},
  {x: 2, y: 4, c: '#d4bf55'},
  {x: 3, y: 4, c: '#ff5'},
  {x: 4, y: 4, c: '#ff5'},
  {x: 5, y: 4, c: '#ffdfaa'},
  {x: 6, y: 4, c: '#ff5'},
  {x: 7, y: 4, c: '#ff5'},
  {x: 8, y: 4, c: '#ff5'},
  {x: 9, y: 4, c: '#ffa'},
  {x: 10, y: 4, c: '#ffdf55'},
  {x: 11, y: 4, c: '#ff5'},
  {x: 12, y: 4, c: '#ff5'},
  {x: 13, y: 4, c: '#ffdf55'},
  {x: 14, y: 4, c: '#ffdf55'},
  {x: 15, y: 4, c: '#ffdf55'},
  {x: 16, y: 4, c: '#d49f55'},
  {x: 17, y: 4, c: '#d4bfaa'},
  {x: 1, y: 5, c: '#ffdf55'},
  {x: 2, y: 5, c: '#ff5'},
  {x: 3, y: 5, c: '#ffbf55'},
  {x: 4, y: 5, c: '#aa9f55'},
  {x: 5, y: 5, c: '#aa7f55'},
  {x: 6, y: 5, c: '#aa9f55'},
  {x: 7, y: 5, c: '#d4bf55'},
  {x: 8, y: 5, c: '#ff5'},
  {x: 9, y: 5, c: '#ffdf55'},
  {x: 10, y: 5, c: '#ff5'},
  {x: 11, y: 5, c: '#d4bf55'},
  {x: 12, y: 5, c: '#aa7f55'},
  {x: 13, y: 5, c: '#aa9f55'},
  {x: 14, y: 5, c: '#aa7f55'},
  {x: 15, y: 5, c: '#ffbf55'},
  {x: 16, y: 5, c: '#ffbf55'},
  {x: 17, y: 5, c: '#d4bf55'},
  {x: 0, y: 6, c: '#d4bfaa'},
  {x: 1, y: 6, c: '#ffbf55'},
  {x: 2, y: 6, c: '#ff5'},
  {x: 3, y: 6, c: '#aa7f55'},
  {x: 7, y: 6, c: '#aa7f55'},
  {x: 8, y: 6, c: '#ff5'},
  {x: 9, y: 6, c: '#ff5'},
  {x: 10, y: 6, c: '#ffdf55'},
  {x: 11, y: 6, c: '#aa9f55'},
  {x: 15, y: 6, c: '#aa9f55'},
  {x: 16, y: 6, c: '#ffdf00'},
  {x: 17, y: 6, c: '#d49f55'},
  {x: 18, y: 6, c: '#ffdfaa'},
  {x: 0, y: 7, c: '#ffdfaa'},
  {x: 1, y: 7, c: '#ffdf55'},
  {x: 2, y: 7, c: '#ff5'},
  {x: 3, y: 7, c: '#aa9f55'},
  {x: 7, y: 7, c: '#aa7f55'},
  {x: 8, y: 7, c: '#ff5'},
  {x: 9, y: 7, c: '#ffdf55'},
  {x: 10, y: 7, c: '#ff5'},
  {x: 11, y: 7, c: '#aa7f55'},
  {x: 15, y: 7, c: '#aa9f55'},
  {x: 16, y: 7, c: '#ffbf55'},
  {x: 17, y: 7, c: '#d4bf55'},
  {x: 18, y: 7, c: '#d4bfaa'},
  {x: 0, y: 8, c: '#ffbf55'},
  {x: 1, y: 8, c: '#ffdf55'},
  {x: 2, y: 8, c: '#ff5'},
  {x: 3, y: 8, c: '#aa7f55'},
  {x: 7, y: 8, c: '#aa9f55'},
  {x: 8, y: 8, c: '#ff5'},
  {x: 9, y: 8, c: '#ff5'},
  {x: 10, y: 8, c: '#ffdf55'},
  {x: 11, y: 8, c: '#aa9f55'},
  {x: 15, y: 8, c: '#aa7f55'},
  {x: 16, y: 8, c: '#ffbf00'},
  {x: 17, y: 8, c: '#ffbf00'},
  {x: 18, y: 8, c: '#aa9f55'},
  {x: 0, y: 9, c: '#ffbf55'},
  {x: 1, y: 9, c: '#ff5'},
  {x: 2, y: 9, c: '#ffdf55'},
  {x: 3, y: 9, c: '#d4df55'},
  {x: 4, y: 9, c: '#aa7f55'},
  {x: 5, y: 9, c: '#aa9f55'},
  {x: 6, y: 9, c: '#aa7f55'},
  {x: 7, y: 9, c: '#d4bf55'},
  {x: 8, y: 9, c: '#ffdf55'},
  {x: 9, y: 9, c: '#ff5'},
  {x: 10, y: 9, c: '#ffdf55'},
  {x: 11, y: 9, c: '#ffbf55'},
  {x: 12, y: 9, c: '#aa9f55'},
  {x: 13, y: 9, c: '#aa7f55'},
  {x: 14, y: 9, c: '#aa9f55'},
  {x: 15, y: 9, c: '#d4bf55'},
  {x: 16, y: 9, c: '#ffbf55'},
  {x: 17, y: 9, c: '#ffbf55'},
  {x: 18, y: 9, c: '#aa9f55'},
  {x: 0, y: 10, c: '#d4bf55'},
  {x: 1, y: 10, c: '#ffdf55'},
  {x: 2, y: 10, c: '#ff5'},
  {x: 3, y: 10, c: '#ffdf55'},
  {x: 4, y: 10, c: '#ff5'},
  {x: 5, y: 10, c: '#ffdf55'},
  {x: 6, y: 10, c: '#ff5'},
  {x: 7, y: 10, c: '#ff5'},
  {x: 8, y: 10, c: '#ff5'},
  {x: 9, y: 10, c: '#ffdf55'},
  {x: 10, y: 10, c: '#ff5'},
  {x: 11, y: 10, c: '#ffdf55'},
  {x: 12, y: 10, c: '#ffdf55'},
  {x: 13, y: 10, c: '#ffdf55'},
  {x: 14, y: 10, c: '#ffdf55'},
  {x: 15, y: 10, c: '#ffbf55'},
  {x: 16, y: 10, c: '#ffbf00'},
  {x: 17, y: 10, c: '#ffbf55'},
  {x: 18, y: 10, c: '#aa9f55'},
  {x: 0, y: 11, c: '#ffdfaa'},
  {x: 1, y: 11, c: '#ffdf55'},
  {x: 2, y: 11, c: '#ffdf55'},
  {x: 3, y: 11, c: '#ff5'},
  {x: 4, y: 11, c: '#ffdf55'},
  {x: 5, y: 11, c: '#ff5'},
  {x: 6, y: 11, c: '#ffdf55'},
  {x: 7, y: 11, c: '#ffdf55'},
  {x: 8, y: 11, c: '#ffdf55'},
  {x: 9, y: 11, c: '#ffdf55'},
  {x: 10, y: 11, c: '#ffdf55'},
  {x: 11, y: 11, c: '#ffdf55'},
  {x: 12, y: 11, c: '#ffdf55'},
  {x: 13, y: 11, c: '#ffbf00'},
  {x: 14, y: 11, c: '#ffdf55'},
  {x: 15, y: 11, c: '#ffbf00'},
  {x: 16, y: 11, c: '#ffbf55'},
  {x: 17, y: 11, c: '#d49f00'},
  {x: 18, y: 11, c: '#d4bfaa'},
  {x: 0, y: 12, c: '#d4bfaa'},
  {x: 1, y: 12, c: '#ffbf55'},
  {x: 2, y: 12, c: '#ffdf55'},
  {x: 3, y: 12, c: '#ffdf55'},
  {x: 4, y: 12, c: '#ffdf55'},
  {x: 5, y: 12, c: '#ffdf55'},
  {x: 6, y: 12, c: '#ffdf55'},
  {x: 7, y: 12, c: '#ffdf55'},
  {x: 8, y: 12, c: '#ffdf55'},
  {x: 9, y: 12, c: '#ff5'},
  {x: 10, y: 12, c: '#ffdf55'},
  {x: 11, y: 12, c: '#ffdf55'},
  {x: 12, y: 12, c: '#ffdf55'},
  {x: 13, y: 12, c: '#ffdf55'},
  {x: 14, y: 12, c: '#ffbf00'},
  {x: 15, y: 12, c: '#ffbf55'},
  {x: 16, y: 12, c: '#d4bf00'},
  {x: 17, y: 12, c: '#d49f55'},
  {x: 18, y: 12, c: '#d4bfaa'},
  {x: 1, y: 13, c: '#d4bf55'},
  {x: 2, y: 13, c: '#ffdf55'},
  {x: 3, y: 13, c: '#ffdf55'},
  {x: 4, y: 13, c: '#ffdf55'},
  {x: 5, y: 13, c: '#ff5'},
  {x: 6, y: 13, c: '#ffdf55'},
  {x: 7, y: 13, c: '#ffdf55'},
  {x: 8, y: 13, c: '#ffdf55'},
  {x: 9, y: 13, c: '#ffdf55'},
  {x: 10, y: 13, c: '#ffdf55'},
  {x: 11, y: 13, c: '#ffdf00'},
  {x: 12, y: 13, c: '#ffbf55'},
  {x: 13, y: 13, c: '#ffbf55'},
  {x: 14, y: 13, c: '#ffbf55'},
  {x: 15, y: 13, c: '#ffbf00'},
  {x: 16, y: 13, c: '#d4bf55'},
  {x: 17, y: 13, c: '#aa9f55'},
  {x: 2, y: 14, c: '#d4bf00'},
  {x: 3, y: 14, c: '#ffdf55'},
  {x: 4, y: 14, c: '#ffdf55'},
  {x: 5, y: 14, c: '#ffdf55'},
  {x: 6, y: 14, c: '#ffdf55'},
  {x: 7, y: 14, c: '#ffdf55'},
  {x: 8, y: 14, c: '#ffdf55'},
  {x: 9, y: 14, c: '#ffdf55'},
  {x: 10, y: 14, c: '#ffdf55'},
  {x: 11, y: 14, c: '#ffbf00'},
  {x: 12, y: 14, c: '#ffdf55'},
  {x: 13, y: 14, c: '#ffdf55'},
  {x: 14, y: 14, c: '#d4bf00'},
  {x: 15, y: 14, c: '#ffbf55'},
  {x: 16, y: 14, c: '#d47f55'},
  {x: 17, y: 14, c: '#d4dfaa'},
  {x: 2, y: 15, c: '#ffdfaa'},
  {x: 3, y: 15, c: '#d4bf55'},
  {x: 4, y: 15, c: '#ffdf00'},
  {x: 5, y: 15, c: '#ffbf55'},
  {x: 6, y: 15, c: '#ffdf55'},
  {x: 7, y: 15, c: '#ffdf55'},
  {x: 8, y: 15, c: '#ffdf55'},
  {x: 9, y: 15, c: '#ffbf55'},
  {x: 10, y: 15, c: '#ffbf55'},
  {x: 11, y: 15, c: '#ffbf55'},
  {x: 12, y: 15, c: '#ffbf55'},
  {x: 13, y: 15, c: '#ffbf00'},
  {x: 14, y: 15, c: '#ffbf55'},
  {x: 15, y: 15, c: '#d49f00'},
  {x: 16, y: 15, c: '#d4bfaa'},
  {x: 3, y: 16, c: '#d4bfaa'},
  {x: 4, y: 16, c: '#d49f55'},
  {x: 5, y: 16, c: '#ffbf00'},
  {x: 6, y: 16, c: '#ffbf55'},
  {x: 7, y: 16, c: '#ffbf00'},
  {x: 8, y: 16, c: '#d4bf55'},
  {x: 9, y: 16, c: '#ffbf00'},
  {x: 10, y: 16, c: '#ffbf55'},
  {x: 11, y: 16, c: '#d4bf00'},
  {x: 12, y: 16, c: '#ffbf55'},
  {x: 13, y: 16, c: '#d4bf55'},
  {x: 14, y: 16, c: '#aa7f00'},
  {x: 15, y: 16, c: '#d4bfaa'},
  {x: 16, y: 16, c: '#d4bfaa'},
  {x: 4, y: 17, c: '#d4bfaa'},
  {x: 5, y: 17, c: '#d4bf55'},
  {x: 6, y: 17, c: '#d49f55'},
  {x: 7, y: 17, c: '#d4bf00'},
  {x: 8, y: 17, c: '#ffbf55'},
  {x: 9, y: 17, c: '#ffbf00'},
  {x: 10, y: 17, c: '#ffbf55'},
  {x: 11, y: 17, c: '#d4bf00'},
  {x: 12, y: 17, c: '#d49f00'},
  {x: 13, y: 17, c: '#aa9f55'},
  {x: 14, y: 17, c: '#d4dfaa'},
  {x: 6, y: 18, c: '#ffdfaa'},
  {x: 7, y: 18, c: '#d4bfaa'},
  {x: 8, y: 18, c: '#aa9f55'},
  {x: 9, y: 18, c: '#aa9f55'},
  {x: 10, y: 18, c: '#aa9f55'},
  {x: 11, y: 18, c: '#d4bfaa'},
  {x: 12, y: 18, c: '#d4dfff'},
]

var lefts = [
  {x: 0, y: 0, c: '#d4dfaa'},
  {x: 1, y: 0, c: '#fff'},
  {x: 2, y: 0, c: '#ffdfaa'},
  {x: 0, y: 1, c: '#fff'},
  {x: 1, y: 1, c: '#fff'},
  {x: 2, y: 1, c: '#fff'},
  {x: 0, y: 2, c: '#d4dfaa'},
  {x: 1, y: 2, c: '#fff'},
  {x: 2, y: 2, c: '#d4dfaa'},
]

var rights = [
  {x: 0, y: 0, c: '#d4dfaa'},
  {x: 1, y: 0, c: '#fff'},
  {x: 2, y: 0, c: '#d4dfaa'},
  {x: 0, y: 1, c: '#fff'},
  {x: 1, y: 1, c: '#fff'},
  {x: 2, y: 1, c: '#fff'},
  {x: 0, y: 2, c: '#d4dfaa'},
  {x: 1, y: 2, c: '#fff'},
  {x: 2, y: 2, c: '#c0dcc0'},
]

