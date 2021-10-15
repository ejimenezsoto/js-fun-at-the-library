function createLibrary(name){
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library
}

function addBook(library,book){
  library.shelves[book.genre].push(book)
}

function checkoutBook(library, bookName, genre){
  var len = library.shelves[genre].length;
  for(var i=0;i<len;i++){
    var bookTitle = library.shelves[genre][i].title
    if(bookName === bookTitle){
      library.shelves[genre].splice(i,1)
      return `You have now checked out ${bookName} from the ${library.name}`
    }
  }
  return `Sorry, there are currently no copies of ${bookName} available at the ${library.name}`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};