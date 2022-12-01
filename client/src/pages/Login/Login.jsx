import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { login } from "../../store/apiCalls";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
background-color:#111;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #111;
  border-radius:10px;
  border: 2px solid #212529;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 1px 29px 0px;

  @media screen and (max-width:468px)
{
width:70%;
}

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align:center;
  font-weight:600;
  color:#fff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align:center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  background-color:#212529;
  border-radius:4px;
  border:2px solid #E51A8D;
  color:#fff;
  &:focus
  {
    outline:none;
  }
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-image: linear-gradient(to right , #e51a8d, #e11b93, #dc1d99, #d7209f, #d124a5, #d023ac, #ce23b3, #cb24bb, #cb20c6, #ca1dd1, #c81cdd, #c51de9);
  color: white;
  border-radius:10px;
  cursor: pointer;
  margin-bottom: 10px;
  text-align:center;
`;

const LinkN = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color:#fff;

`;

const Login = () => {

  const [formData,setFormData] = useState({
    email:"",
    password:""
  })

  const handleFormData = (e) =>{
    setFormData(prevFormData=>{
      return {
        ...prevFormData,
        [e.target.name]:e.target.value,
      }
    })
  }

  const dispatch = useDispatch()

  const handleLogin = (e) =>{
    e.preventDefault();
    login(dispatch,formData)
  }

  
  return (
    <Container>
      <Wrapper>
        <Title>LOG IN</Title>
        <Form>
          <Input placeholder="username" name="email" onChange={(e)=>handleFormData(e)}/>
          <Input placeholder="password" name="password" onChange={(e)=>handleFormData(e)}/>
          <Button onClick={e=>handleLogin(e)}>LOGIN</Button>
          <LinkN>FORGOT PASSWORD ?</LinkN>
          <Link to="/register" style={{textDecoration:"underline",color:"#fff",fontSize:"12px",marginTop:"8px"}}>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;