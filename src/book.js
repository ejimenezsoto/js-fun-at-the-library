function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name,age,pronouns){
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return character;
}
function saveReview(review,arr){
  if(arr.length === 0){
    return arr.push(review)
  }

  for(var i=0;i<arr.length;i++){
    if(review === arr[i]){
      return
    } else {
      return arr.push(review)
    }
  }
  
}

function calculatePageCount(bookTitle){
  
  return 20 * bookTitle.length
}

function writeBook(bookTitle,bookCharacter,genre){
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: 20 * bookTitle.length,
    genre: genre
  }
  return book
}

function editBook(book){
  book.pageCount = book.pageCount * .75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}