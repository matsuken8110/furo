import React from "react";
import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

//idをふって修正をかける

class EventApp extends React.Component{

  render(){
    return(
      <AllLayout>
        <Card>
          <Title>event-app</Title>
          <MoneyArea>
            <InputNumberWrapper>
              <FormControl fullWidth >
                <InputLabel>一人あたりの予算</InputLabel>
                <Input
                  type="number"
                  onChange={(e) => {this.props.getSumOfMoney(e.target.value)}}
                  startAdornment={<InputAdornment position="start">¥</InputAdornment>}
                />
                </FormControl>
            </InputNumberWrapper>
            {(() => {
              if(this.props.member.length !== 0 && this.props.sumOfMoney !== 0){
                return <ShowNumberPerOne>合計金額 : {this.props.sumOfMoney*this.props.member.length}円</ShowNumberPerOne>
              }else{
                return <ShowNumberPerOne>合計金額 : 0円</ShowNumberPerOne>
              }
            })()}
            {(() => {
              if(this.props.member.length !== 0 && this.props.sumOfMoney !== 0){
                return <ShortOfMoney sum={(this.props.sumOfMoney*this.props.member.length)-(this.props.sumOfMoney*this.props.checkedMember.length)}>不足金額 : {(this.props.sumOfMoney*this.props.member.length)-(this.props.sumOfMoney*this.props.checkedMember.length)}円</ShortOfMoney>
              }else{
                return <ShortOfMoney sum={0}>不足金額 : 0円</ShortOfMoney>
              }
            })()}
          </MoneyArea>
          <ListWrapper>
            {this.props.member.map((item, i)=> {
              return(
                <List key={i}>
                  <Checkbox color="primary" checked={item.checked} onChange={() => {
                    this.props.getId();
                    this.props.toggleChecked(item.id);
                    this.props.getActiveMember();
                  }}/>
                  {item.name}
                  <DeleteButtonWrapper>
                    <Button variant="fab" aria-label="Delete" onClick={
                      () => {
                        this.props.getId();
                        this.props.deleteMember(item.id);
                        this.props.getActiveMember();
                      }
                    }>
                      <DeleteIcon />
                    </Button>
                  </DeleteButtonWrapper>
                </List>
              )
            })}
            {(() => {
              if(this.props.member.length !== 0){
                return <MembersNumber>チェックされてない人の数 : {this.props.activeMember.length}/{this.props.member.length}</MembersNumber>
              }
            })()}
          </ListWrapper>
          <InputLayout>
            <InputText type="text" placeholder="名簿に追加する人の氏名" value={this.props.person.name} onChange={(e) => this.props.inputMemberName(e.target.value)}/>
            <AddButton onClick={() =>
              {
                if(this.props.person.name !== ""){
                  this.props.addMember(this.props.person);
                  this.props.clearInput();
                  this.props.getActiveMember();
                }
              }
            }>add</AddButton>
          </InputLayout>
        </Card>
      </AllLayout>
    )
  }
}

export default EventApp;

const AllLayout = styled.div`
  text-align: center;
`

const MoneyArea = styled.div`
  position: relative;
  text-align: right;
  height: 150px;
  margin-bottom: 40px;
`

const ShortOfMoney = styled.div`
  position: absolute;
  bottom: 0;
  right: 10%;
  color: ${props => props.sum === 0 ? "skyblue" : "tomato"};
`

const InputNumberWrapper = styled.div`
  width: 50%;
  position: absolute;
  right: 10%;
  top: 0;
`

const ShowNumberPerOne = styled.div`
  position: absolute;
  bottom: 50px;
  right: 10%;
`

const Card = styled.div`
  position: relative;
  width: 100%;
  background-color: white;
  margin: auto;
  box-shadow: 2px 2px 4px;
  padding-bottom: 10%;
`

const MembersNumber = styled.div`
  margin-top: 5%;
  text-align: right;
`

const ListWrapper = styled.div`
  position: relative;
  width: 80%;
  margin: auto;
`

const List = styled.div`
  position: relative;
  text-align: left;
  padding: 15px 0;
  font-size: 20px;
  margin: 4px 0;
  border: 1px solid gray;
  box-shadow: 2px 2px 3px gray;
`

const DeleteButtonWrapper = styled.div`
  position: absolute;
  top: 12%;
  right: 3%;
`

const Title = styled.p`
  padding-top: 40px;
  font-size: 40px;
  color: skyblue;
`

const InputLayout = styled.div`
  border-top: 1px solid gray;
`

const InputText = styled.input`
  margin-top: 5%;
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

const AddButton = styled.button`
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
