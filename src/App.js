import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(135deg, #232526 0%, #414345 100%);
    color: #fff;
    min-height: 100vh;
  }
  a { color: #00e6e6; text-decoration: none; }
`;

const Glass = styled.div`
  background: rgba(34, 34, 34, 0.7);
  border-radius: 24px;
  box-shadow: 0 8px 32px 0 #0006;
  backdrop-filter: blur(8px);
  padding: 40px 32px;
  margin: 32px 0;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 16px;
`;

const Hero = styled(motion.section)`
  position: relative;
  text-align: center;
  margin-bottom: 60px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BgShapes = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  top: 0; left: 0;
  pointer-events: none;
  overflow: hidden;
  svg {
    position: absolute;
    opacity: 0.18;
    filter: blur(2px);
  }
`;

const Avatar = styled(motion.img)`
  width: 130px;
  border-radius: 50%;
  border: 5px solid #00e6e6;
  margin-bottom: 18px;
  z-index: 1;
`;

const Name = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 10px;
  letter-spacing: 2px;
  z-index: 1;
`;

const Subtitle = styled.h2`
  font-weight: 400;
  color: #00e6e6;
  margin-bottom: 18px;
  z-index: 1;
`;

const Socials = styled.div`
  margin-top: 12px;
  z-index: 1;
  a {
    margin: 0 10px;
    font-size: 1.7rem;
    transition: color 0.2s;
    &:hover { color: #fff; }
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #00e6e6;
  margin-bottom: 18px;
`;

const AboutText = styled.p`
  font-size: 1.15rem;
  line-height: 1.7;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 24px;
`;

const SkillCard = styled(Glass)`
  padding: 24px 18px;
  text-align: center;
`;

const SkillName = styled.h3`
  margin-bottom: 10px;
  font-size: 1.1rem;
`;

const ProgressBar = styled(motion.div)`
  background: #222;
  border-radius: 8px;
  height: 14px;
  margin-bottom: 6px;
  overflow: hidden;
`;

const Progress = styled(motion.div)`
  background: linear-gradient(90deg, #00e6e6 0%, #00b3b3 100%);
  height: 100%;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(36, 36, 62, 0.85);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 16px #0004;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  &:hover { transform: translateY(-6px) scale(1.03); }
`;

const ProjectImg = styled(motion.img)`
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: filter 0.3s;
  ${ProjectCard}:hover & {
    filter: brightness(0.85) blur(1px);
  }
`;

const ProjectContent = styled.div`
  padding: 18px;
  flex: 1;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 8px 0;
  color: #00e6e6;
`;

const ProjectDesc = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #23243e;
  color: #fff;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #23243e;
  color: #fff;
  font-size: 1rem;
  min-height: 90px;
`;

const Button = styled.button`
  background: linear-gradient(90deg, #00e6e6 0%, #00b3b3 100%);
  color: #181818;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #00b3b3; color: #fff; }
`;

const Footer = styled.footer`
  text-align: center;
  color: #aaa;
  margin-top: 40px;
  font-size: 0.95rem;
`;

const skills = [
  { name: "React", level: 95 },
  { name: "JavaScript (ES6+)", level: 92 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind.css", level: 98 },
  { name: "Next.js", level: 90 },
  { name: "MongoDB", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Figma", level: 80 },
];

const projects = [
  {
    title: "Animated Portfolio",
    desc: "A modern, animated portfolio with glassmorphism, built using React, styled-components, and Framer Motion.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/",
  },
  {
    title: "Weather App",
    desc: "A beautiful weather app with animated transitions, dark mode, and real-time data.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/",
  },
  {
    title: "E-commerce Website",
    desc: "A responsive e-commerce website with product animations and cart functionality.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/",
  },
];

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Hero
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <BgShapes>
            <svg width="400" height="400" style={{top: -60, left: -60}}>
              <circle cx="200" cy="200" r="180" fill="#00e6e6" />
            </svg>
            <svg width="300" height="300" style={{bottom: -80, right: -80}}>
              <rect width="300" height="300" rx="80" fill="#00b3b3" />
            </svg>
          </BgShapes>
          <Avatar
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
            alt="profile"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
          />
          <Name>Amrita Yadav</Name>
            <Subtitle>Full Stack Developer and Designer</Subtitle>
          <Socials>
            <a href="https://github.com/Yadavvamrita" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/amrita-yadav-05716b2ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="ayadav9095@gmail.com"><FaEnvelope /></a>
          </Socials>
        </Hero>

        <Glass as={motion.section}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle>About Me</SectionTitle>
          <AboutText>
            Hey! I’m Amrita Yadav, a passionate Full Stack Developer and Designer who likes  building beautiful, performant web apps. I specialize in React, JavaScript, Node.js,express.js and many more and love crafting seamless user experiences with animation and design. I thrive on solving problems, collaborating with teams, and learning new technologies. Let’s build something amazing together!
          </AboutText>
        </Glass>

        <Glass as={motion.section}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle>Skills</SectionTitle>
          <SkillsGrid>
            {skills.map((skill, i) => (
              <SkillCard key={skill.name}
                as={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <SkillName>{skill.name}</SkillName>
                <ProgressBar>
                  <Progress
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.1, delay: 0.2 }}
                  />
                </ProgressBar>
                <span>{skill.level}%</span>
              </SkillCard>
            ))}
          </SkillsGrid>
        </Glass>

        <Glass as={motion.section}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle>Projects</SectionTitle>
          <ProjectsGrid>
            {projects.map((p, i) => (
              <ProjectCard
                key={p.title}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  <ProjectImg
                    src={p.img}
                    alt={p.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
                <ProjectContent>
                  <ProjectTitle>{p.title}</ProjectTitle>
                  <ProjectDesc>{p.desc}</ProjectDesc>
              
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </Glass>

        <Glass as={motion.section}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle>+91 7054201207</SectionTitle>
          <ContactForm
            action="https://formspree.io/f/mnqkzqzv"
            method="POST"
            as={motion.form}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Input type="text" name="name" placeholder="Amrita Yadav" required />
            <Input type="email" name="email" placeholder="ayadav9095@gmail.com" required />
            <TextArea name="message" placeholder="Your Message" required />
            <Button type="submit">Send Message</Button>
          </ContactForm>
        </Glass>

        <Footer>
          &copy; {new Date().getFullYear()} Amrita Yadav &mdash; Designed & Coded with React & Framer Motion
        </Footer>
      </Container>
    </>
  );
}

export default App;