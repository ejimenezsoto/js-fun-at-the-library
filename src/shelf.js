function shelfBook(book,shelf){
  if(shelf.length >= 3){
    return
  }
  if(shelf.length === 0){
    return shelf.push(book)
  } else {
    shelf.unshift(book)
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
  var titles = ""
  for(var i=0;i<shelf.length;i++){
    if(i === 0){
      titles += shelf[i].title
    } else {
      titles += ", " + shelf[i].title
    }
  }
  return titles
}

function searchShelf(shelf,title){

  for(var i=0;i<shelf.length;i++){
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