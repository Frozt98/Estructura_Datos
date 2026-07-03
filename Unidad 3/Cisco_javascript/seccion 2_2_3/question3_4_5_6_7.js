/*We have three books and want to prepare a list of them. 
We will store three pieces information about each book: title, author, and number of pages:
Speaking JavaScript, Axel Rauschmayer, 460;
Programming JavaScript Applications, Eric Elliott, 254;
Understanding ECMAScript 6, Nicholas C. Zakas, 352.*/

let libros = [{
        titulo: "Speaking JavaScript",
        autor: "Axel Rauschmayer",
        paginas: 460
    },
    {
        titulo: "Programming JavaScript Applications",
        autor: "Eric Elliott",
        paginas: 254
    },
    {
        titulo: "Understanding ECMAScript 6",
        autor: "Nicholas C. Zakas",
        paginas: 352
    }
];

console.log(libros);

// question 4:  Add a new book to the collection: Learning JavaScript Design Patterns, by Addy Osmani, 254 pages.
let nuevoLibro = {
    titulo: "Learning JavaScript Design Patterns",
    autor: "Addy Osmani",
    paginas: 254
};
libros.push(nuevoLibro);
console.log(libros.length);
console.log(libros[0].titulo);
console.log(libros[1].titulo);
console.log(libros[2].titulo);
console.log(libros[3].titulo);

//question 5:Use the slice command to copy the last two books to the new array. 
let selectedBooks = books.slice(-2);
console.log(selectedBooks);

//question 6: Remove the first book from the collection.
libros.shift();
console.log(libros.length);
console.log(libros[0].titulo);
console.log(libros[1].titulo);
console.log(libros[2].titulo);

//question 7: Calculate the total number of pages in the collection and display it in the console.
let sum = libros[0].paginas + libros[1].paginas + libros[2].paginas;
console.log(`paginas: ${sum}`);