import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';


const AllNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://inshorts.me/news/all?offset=0&limit=21'; // API link for all news

    axios.get(apiUrl)
      .then(response => {
        const newsData = response.data.data.articles;
        setNews(newsData);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        {news.map((article, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              {article.imageUrl && (
                <Card.Img
                  variant="top"
                  src={article.imageUrl}
                  style={{ maxHeight: '200px', objectFit: 'cover' }}
                />
              )}
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.content}</Card.Text>
                <Card.Link href={article.sourceUrl} target="_blank">
                  Read more
                </Card.Link>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Published by {article.authorName} on {new Date(article.createdAt).toLocaleString()}
                  <br />
                  Source: <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer">{article.sourceName}</a>
                </small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllNews;
