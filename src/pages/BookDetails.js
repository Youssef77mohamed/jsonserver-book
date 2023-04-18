import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { getBookById } from "../services/api";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState({});

  const getBook = async () => {
    try {
      const res = await getBookById(id);
      console.log(res.data);
      setBook(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBook();
  }, []);
  return (
    <Container style={{width:"70vh"}}>
      <Card className="bg-dark text-white my-4">
        <Card.Img src={book.cover_image} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
          {book.author}
          </Card.Text>
          <Card.Text>
          {book.pages}
          </Card.Text>
          <Card.Text>{book.releaseDate}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
}

export default BookDetails;
