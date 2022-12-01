  import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
  import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
  import PhoneIcon from '@mui/icons-material/Phone';
  import PinterestIcon from '@mui/icons-material/Pinterest';
  import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
  import WhatsAppIcon from '@mui/icons-material/WhatsApp';
  import styled from "styled-components";
  

  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo >Niladri.</Logo>
          <Desc style={{color:"#999",letterSpacing:".6px",fontWeight:"600"}}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
          </Desc>
          <SocialContainer>
            <SocialIcon color="#3B5999">
              <FacebookOutlinedIcon />
            </SocialIcon>
            <SocialIcon color="#E4405F">
              <WhatsAppIcon />
            </SocialIcon>
            <SocialIcon color="#55ACEE">
              <PinterestIcon />
            </SocialIcon>
            <SocialIcon color="#E60023">
              <MailOutlineOutlinedIcon />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
         <ListContainer>
         <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
        </List>
        <List>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>My Orders</ListItem>
            <ListItem>Terms</ListItem>
          </List>
         </ListContainer>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <MeetingRoomIcon style={{marginRight:"10px",color:"#777"}}/><ListItem>Paris,New York</ListItem>
          </ContactItem>
          <ContactItem>
            <PhoneIcon style={{marginRight:"10px",color:"#777"}}/> <ListItem>+8584071291</ListItem>
          </ContactItem>
          <ContactItem>
            <MailOutlineOutlinedIcon style={{marginRight:"10px",color:"#777"}} /> <ListItem>contact@niladri.sen</ListItem>
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  

  const Container = styled.div`
  display: flex;
  @media screen and (max-width:468px)
{
        flex-direction:column;
}
`;

  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1`
  color:red;
  font-weight:600;
  text-transform:uppercase;
  `;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const ListContainer = styled.div`
  display:flex;
  gap:64px;
  align-items:center;
  justify-content:flex-start;
  `
  const Center = styled.div`
    flex: 1;
    padding: 20px;

  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
    text-transform:uppercase;
    color:red;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction:column;
  `;
  
  const ListItem = styled.li`
    // width: 50%;
    list-style:none;
    margin-bottom: 10px;
    color:#888;
    font-weight:800;
    letter-spacing:.4px;
    cursor:pointer;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
 
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
    //   width: 50%;
  `;

  export default Footer;