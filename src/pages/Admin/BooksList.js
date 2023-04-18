import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import {  deleteBook, getAllBooks } from "../../services/api";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";


function BooksList() {
  const [books, setBooks] = useState([]);

  const renderBookRows = books.map((book) => (
    <tr key={book.id}>
      <td>{book.id}</td>
      <td width={"10%"}>
        <Image src={book.cover_image} thumbnail alt="" />
      </td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.pages}</td>
      <td>{book.releaseDate}</td>
      <td>
        <Button variant="danger" onClick={() => deleteSelectedBook(book.id)}>
          Delete
        </Button>
        <Button className="ms-2" as={Link} to={`Put-Book/${book.id}`} variant="danger" onClick={(id) => (id)}>
          Edit
        </Button>
      </td>
    </tr>
  ));
  
  const deleteSelectedBook = (id) => {
    console.log(`Deleting ${id}`);
    deleteBook(id).then((res) => {
      if (res.status == 200) {
        getAllBooks().then((res) => {
          setBooks(res.data);
        });
      }
    });
  };

  useEffect(() => {
    getAllBooks().then((res) => {
      setBooks(res.data);
    });
  }, []);
  return (
    <div className="mt-3">
      <Button as={Link} to={"add-book"} variant="danger" className="mb-3">
        {" "}
        Add New Book{" "}
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Author</th>
            <th>Pages</th>
            <th>Release Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderBookRows}</tbody>
      </Table>
    </div>
  );
}

export default BooksList;
