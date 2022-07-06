'use strict'
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }


  fix() {
  return this.state *=1.5;
  }

  set state(state) {
  if(state > 100) {
    this._state === 100;
  }
  else if(state < 0) {
    this._state === 0;
  }
  else {
    this._state = state;
  }
}

  get state() {
    return this._state;
  }
}


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super (name, releaseDate, pagesCount, state);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super (name, releaseDate, pagesCount, state);
        this.author = 'author';
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}


class Library {
  constructor(name, books) {
    this.name = name;
    this.book = [];
    }
  


addBook(book) {
  if(book.state > 30) {
    return this.books.push(book); 
  }
    return;
}

findBookBy(type, value) {
  let fullSearch = this.books.find(book => book[type] === value);
  return (typeof fullSearch === 'object') ? fullSearch : null; 
  }

  giveBookByName(bookName) {
    let lookingBook = this.books.find(book => book.name === bookName);
    if (typeof lookingBook === 'object') {
       this.books.splice(this.books.indexOf(lookingBook), 1);
        return lookingBook;
    }
    else return null;
    }
}
