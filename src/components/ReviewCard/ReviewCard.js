import "./ReviewCard.css";
import { Col, Card } from "react-bootstrap";

function ReviewCard({ id, title, content, date, grade, url }) {
  // const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

  return (
    <Col>
      <Card className="card-main">
        <div className="review-card-header">
          <Card.Text className="date">{date}</Card.Text>
          <Card.Title>{title}</Card.Title>
        </div>
        {/* <Card.Img variant="top" src={url} /> */}
        <div className="review-card-content">
          <Card.Text>{content}</Card.Text>
          <Card.Text>{grade}</Card.Text>
        </div>
      </Card>
    </Col>
  );
}

export default ReviewCard;
