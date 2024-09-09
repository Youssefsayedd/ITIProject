import React from 'react'
import Navbar from '../components/Navbar';
import Wrapper from '../UI/Wrapper';
import Container from './../UI/Containers/Container';
import Footer from './../components/Footer';
import ImageContainer from '../UI/Product/ImageContainer';
import AboutContainer from '../UI/Containers/AboutContainer';
import AboutWrapper from '../UI/Containers/AboutWrapper';

const About = () => {
  return (
    <Container>
      <Navbar />
      <AboutWrapper>
      <ImageContainer>
        <img src="https://www.sigma-computer.com/image/catalog/about/about-us.jpg" alt="" />
      </ImageContainer>
      <AboutContainer>
      ITI-E-Commerce is a Website specializing in retail and wholesale electronics including laptops, computers and accessories. 
      ITI-E-Commerce has been established since Oct.2022 in Egypt. It is engaged in wholesale sale, ITI as a first stage and retailing for more than 1 Month in Egypt. Toby has 3 Pages in the largest and most famous commercial centers in Egypt
      </AboutContainer>
      </AboutWrapper>
      <Footer/>
    </Container>
  )
}

export default About