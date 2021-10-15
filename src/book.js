function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(charName,charAge,charPronouns){
  var character = {
    name: charName,
    age: charAge,
    pronouns: charPronouns
  }
  return character;
}

function saveReview(review,reviewsArr){
  if(reviewsArr.includes(review)){
    return
  } else {
    reviewsArr.push(review)
  }
}

function calculatePageCount(bookTitle){
  return 20 * bookTitle.length
}

function writeBook(bookTitle,bookCharacter,bookGenre){
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: bookGenre
  }
  return book
}

function editBook(book){
  book.pageCount *= .75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}