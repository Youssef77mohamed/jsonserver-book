
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getBookById } from "../../services/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function BookDetails() {

  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  const getBook = async () => {
    try {
      const res = await getBookById(id);
      console.log(res.data);
      setTitle(res.data.title);
      setCoverImage(res.data.cover_image);
      setAuthor(res.data.author);
      setPages(res.data.pages);
      setReleaseDate(res.data.releaseDate);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  


  const Update = async (e) => {
    e.preventDefault();
    const data ={
      title,
      cover_image: coverImage,
      author,
      pages,
      releaseDate
    };
    console.log("data",data);


    axios.put(`http://localhost:9000/books/${id}`, data)
    .then(
      navigate("/admin")
    )
  };
  return (
    <Form className="mt-3" onSubmit={Update}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="cover_image">
        <Form.Label>Cover Image</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add Image Url"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          
    
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="author">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add Book Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}

        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="pages">
        <Form.Label>pages</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add Book Pages Count"
          value={pages}
          onChange={(e) => setPages(e.target.value)}

        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="releaseDate">
        <Form.Label>Release Date</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add Book Release Date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
      </Form.Group>

      <Button variant="danger" type="submit" >
        Update Book
      </Button>
    </Form>
  );
}

export default BookDetails;