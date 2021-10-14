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
    for (var genre in this.library.shelves){
      for(var i=0;i<this.library.shelves[genre].length;i++){
        if(bookName === this.library.shelves[genre][i].title){
          this.library.shelves[genre].splice(i,1)
          return `Yes, we have ${bookName}`
        } else {
          return `Sorry, we do not have ${bookName}`
        }
      }
    }
  }
  
  calculateLateFee(days){
    return Math.ceil(.25 * days)
  }

}


module.exports = Librarian;