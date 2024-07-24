class Book {
   constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
      this.title = title;
      this.author = author;
      this.copyright = copyright;
      this.isbn = isbn;
      this.pages = pages;
      this.timesCheckedOut = timesCheckedOut;
      this.discarded = discarded;
   }

   checkout(uses=1) {
      this.timesCheckedOut += uses;
   }
}

class Manual extends Book {
   constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
      super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
   }

   dispose(currentYear){
      if (currentYear-this.copyright > 5) {
         this.discarded = 'Yes';
      }
   }
}

class Novel extends Book {
   constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded, authorjerk){
      super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
      this.authorjerk = authorjerk;
   }

   dispose(){
      if (this.timesCheckedOut > 100) {
         this.discarded = 'Yes';
      }
   }
}
                                                                                            // author jerk
let Novel2 = new Novel('Pride and Prejudice','Jane Austen',1813,'1111111111111',432,32,'No','Yes');
console.log(`Author is a jerk?: ${Novel2.authorjerk}`);



// Declare the objects for exercises 2 and 3 here:
// let novel = new Novel('Pride and Prejudice','Jane Austen',1813,'1111111111111',432,32,'No');
// console.log(novel);

// let manual  = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No");
// console.log(manual);

// Code exercises 4 & 5 here:

// // novel.checkout(1);
// console.log(`Times checked out: ${novel.timesCheckedOut}`);
// manual.dispose();
// console.log(`Discarded or not?: ${manual.discarded}`);

let Novel2 = new Novel('Pride and Prejudice','Jane Austen',1813,'1111111111111',432,32,'No','Yes');
console.log(`Author is a jerk?: ${Novel2.authorjerk}`);