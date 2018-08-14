import React from "react";
import styled from "styled-components";

class Login extends React.Component{


  render(){
    return(
        <AllLayout>
          <Card>
            <Title>Login Page</Title>
            <InputLayout><InputText type="text" placeholder="名前" onChange={(e) => this.props.inputName(e.target.value)}/></InputLayout>
            <InputLayout><InputText type="text" placeholder="パスワード" onChange={(e) => this.props.inputPass(e.target.value)}/></InputLayout>
            <Button>Login</Button>
          </Card>
        </AllLayout>
    )
  }

}

export default Login;

const AllLayout = styled.div`
  text-align: center;
`

const Card = styled.div`
  width: 80%;
  background-color: white;
  margin: auto;
  box-shadow: 2px 2px 4px;
  padding-bottom: 10%;
`

const Title = styled.p`
  padding: 40px 0 ;
  font-size: 40px;
  color: skyblue;
`

const InputLayout = styled.div`
  margin-bottom: 50px;
`

const InputText = styled.input`
  width: 80%;
  height: 40px;
  border: none;
  border-bottom: 2px solid #99FFFF;
  font-size: 18px;
  color: gray;
  &:hover{
    border-bottom: #99FFCC solid;
    transition: border-bottom .3s;
  }
  &:focus{
    outline: 0;
  }
`

const Button = styled.button`
  border: #99FFFF solid 1px;
  background-color: #99FFFF;
  width: 80%;
  height: 40px;
  font-size: 20px;
  color: white;
  margin-top: 5%;
  &:hover{
    background-color: white;
    color:#99FFFF;
  }
  &:focus{
    outline: 0;
  }
`
