import React from 'react'

import Container from '../UI/Footer/Container'
import Left from '../UI/Footer/Left'
import { Middle, List, ListItem } from '../UI/Footer/Middle'
import Right from '../UI/Footer/Right'
import Logo from '../UI/Logo'
import Description from '../UI/Footer/Description';
import { MailOutline, Phone } from '@mui/icons-material';
import ContactItem from '../UI/Footer/ContactItem';
import Title from '../UI/Title';
import SocialMedia from './SocialMedia'

function Footer() {
  return (
    <Container>
      <Left>
        <Logo style={{ textAlign: 'left' }}>ITI-Commerce</Logo>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam vero in asperiores, iste doloribus ipsa possimus tenetur ex unde sunt cum eum impedit rem nostrum iure, omnis voluptatum quia natus quisquam recusandae ipsum quam? Aperiam pariatur aliquid earum iusto quaerat repellat sit qui eum unde quibusdam, vel reprehenderit dolorem ipsa.
        </Description>
        <SocialMedia />
      </Left>
      <Middle>
        <Title>Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>PCs</ListItem>
          <ListItem>Phones</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Tabs</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Middle>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Phone />
          + 0123456789
        </ContactItem>
        <ContactItem>
          <MailOutline />
          Youssef@mail.com
        </ContactItem>
      </Right>
    </Container>
  )
}

export default Footer