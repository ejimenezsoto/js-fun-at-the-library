

function shelfBook(book,shelf){
  if(shelf.length >= 3){
    return
  } else {
    if(shelf.length === 0){
      shelf.push(book)
    } else {
      shelf.unshift(book)
    }
  }
}

function unshelfBook(bookName,shelf){
  
  for(var i=0;i<shelf.length;i++){
    if(bookName === shelf[i].title){
      shelf.splice(i,1)
    }
  }
}

function listTitles(shelf){
  var titles = []
  var len = shelf.length
  for(var i=0;i<len;i++){
    titles.push(shelf[i].title)
  }
  var joinedTitles = titles.join(', ')

  return joinedTitles
}

function searchShelf(shelf,title){
  var len = shelf.length
  for(var i=0;i<len;i++){
    if(shelf[i].title === title){
      return true
    }
  }
  return false
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};