import React from "react";
import { Card, Button } from "react-bootstrap";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ProjectCard: React.FC<CardProps> = ({ title, description, imageUrl, link }) => {
  return (<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imageUrl} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <Button variant="primary" href={link}>View Project</Button>
    </Card.Body>
  </Card>)
}

export default ProjectCard

