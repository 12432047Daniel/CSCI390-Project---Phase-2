import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../style/cards.css';
function BasicExample({ text, title, img }) {
    return (
        <Card className="d-flex flex-row justify-content-between">
            <Card.Img variant="top" src={img} width="100%" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button variant="primary" href="/contact">Contact Us</Button>
            </Card.Body>
        </Card>
    )
}

export default BasicExample;