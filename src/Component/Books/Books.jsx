import { useEffect, useState } from "react";
import Book from "../Book/Book";



const Books = () => {
    

const [books, setBooks] = useState([]);

useEffect(()=>{
    fetch('./categories.json')
    .then(res=>res.json())
    .then(data=>setBooks(data))

},[]);

    return (
        <div>
            <h1 className="text-5xl font-bold text-center p-4">Job Category List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
{
    books.map( book=> <Book book={book} key = {book.bookId}></Book>)
}


            </div>
        </div>
    );
};

export default Books;