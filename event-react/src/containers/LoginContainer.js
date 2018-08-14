import { connect } from "react-redux";
import Login from "../components/Login";
import { inputName, inputPass, loginAccount } from "../actions/LoginActions";

const mapStateToProps = (state) => {
  return {
    name: state.loginReducer.name,
    pass: state.loginReducer.pass,
    id: state.loginReducer.id
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    inputName(name){
      dispatch(inputName(name));
    },
    inputPass(pass){
      dispatch(inputPass(pass));
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
