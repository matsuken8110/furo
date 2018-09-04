import { connect } from "react-redux";
import EventApp from "../components/event-app";
import { inputMemberName, addMember, clearInput, deleteMember, toggleChecked, getActiveMember, getSumOfMoney, getId } from "../actions/event-appActions";

const mapStateToProps = (state) => {
  return {
    person: state.eventAppReducer.person,
    member: state.eventAppReducer.member,
    activeMember: state.eventAppReducer.activeMember,
    checkedMember: state.eventAppReducer.checkedMember,
    sumOfMoney: state.eventAppReducer.sumOfMoney,
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    inputMemberName(name){
      dispatch(inputMemberName(name));
    },
    addMember(person){
      dispatch(addMember(person));
    },
    clearInput(){
      dispatch(clearInput());
    },
    deleteMember(id){
      dispatch(deleteMember(id));
    },
    toggleChecked(id){
      dispatch(toggleChecked(id));
    },
    getActiveMember(){
      dispatch(getActiveMember());
    },
    getSumOfMoney(money){
      dispatch(getSumOfMoney(money));
    },
    getId(){
      dispatch(getId());
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(EventApp);
