import React, { useEffect, useState } from "react";
import { getAllBooks } from "../services/api";
import BookItem from "../components/BookItem";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const bookList = books.map((book) => (
    <Col lg={4} key={book.id} onClick={() => navigate(`/book/${book.id}`)}>
      <BookItem book={book} />
    </Col>
  ));

  const getAll = async () => {
    try {
      const res = await getAllBooks();
      setBooks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <Container>
      <Row>{bookList}</Row>
    </Container>
  );
}
