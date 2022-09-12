import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


function BasicExample() {
  return (
    <Form>
      <Container>
      <Card>
      <Card.Header>Register</Card.Header>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Card.Title><Form.Label>Username</Form.Label></Card.Title>
        <Form.Control type="text" placeholder="Enter username" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      </Card>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
      
      </Container>
    </Form>
  );
}

export default BasicExample;
