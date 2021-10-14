class Librarian {
  constructor(name,library) {
    this.name = name;
    this.library = library
  }
  greetPatron(name,isMorning) {
    if(isMorning === undefined){
      this.isMorning = false
    } else {
      this.isMorning = isMorning
    }
    if(this.isMorning === true ){
      return `Good morning, ${name}!`
    }
    return `Hello, ${name}!`
  }
  findBook(bookName){
    
  }
}


module.exports = Librarian;