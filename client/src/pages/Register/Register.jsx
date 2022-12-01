import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color:#111;
  display: flex;
  align-items: center;
  justify-content: center;
  color:#fff;
  text-align:center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #111;
  border-radius:10px;
  border: 2px solid #212529;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 1px 29px 0px;
    @media screen and (max-width:468px)
    {
      width:90%;
      padding:8px 16px 20px;
    }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 80%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  background-color:#212529;
  border:2px solid #E51A8D;
  color:#fff;
  border-radius:4px;
  &:focus
  {
    outline:none;
  }
  
`;

const Agreement = styled.section`
  font-size: 12px;
  margin: 20px 0px;
  text-align:center;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  background-image: linear-gradient(to right , #e51a8d, #e11b93, #dc1d99, #d7209f, #d124a5, #d023ac, #ce23b3, #cb24bb, #cb20c6, #ca1dd1, #c81cdd, #c51de9);
  border-radius:6px;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE  ACCOUNT</Title>
        <Form>
          <Input placeholder="First name" />
          <Input placeholder="Last name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Agreement style={{display:"block",width:"100%"}}>Already Have an Account ? <Link to="/login" style={{textDecoration:"none",color:"#fff"}}>LOGIN</Link></Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;