import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

const Projects: React.FC = () => {
  return (
    <Container>
      <Row>
        <h1>Projects!</h1>
        <ProjectCard title="Personal Site"
          description="I think you get it"
          imageUrl="https://smarthistory.org/wp-content/uploads/2015/08/28325957427_f94bfee3d2_o-1-870x580.jpg"
          link="https://github.com/darknessraider/personal-site" />

        <ProjectCard title="CHIP-8 Emulator"
          description="An emulator for a fake cpu architecture. Mostly just an excuse to write C."
          imageUrl="https://blog.scottlogic.com/ceberhardt/assets/chip8/emulator.png"
          link="https://github.com/darknessraider/CHIP-8" />

        <ProjectCard title="Driving GUI"
          description="A GUI for controlling FRC robots with the same controls as StarCraft II."
          imageUrl="https://blog.scottlogic.com/ceberhardt/assets/chip8/emulator.png"
          link="https://github.com/darknessraider/DrivingGUI" />

        <ProjectCard title="Coffee Maker"
          description="Admittedly a very simple project and the repos a little messed up but it controls my coffee maker remotely with an esp-32 that flips a relay."
          imageUrl="https://blog.scottlogic.com/ceberhardt/assets/chip8/emulator.png"
          link="https://github.com/darknessraider/coffee-maker" />

      </Row>
    </Container>
  );
};

export default Projects;
