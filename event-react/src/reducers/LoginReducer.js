const initialState = {
  name: "",
  pass: "",
  data: ""
}

export default function loginReducer (state = initialState, action) {
  switch(action.type){
    case "INPUT_NAME":
      return{
        ...state,
        name: action.payload.name
      }

    case "INPUT_PASS":
      return{
        ...state,
        pass: action.payload.pass
      }

    case "LOGIN_ACCOUT":
      return{
        ...state,
        data: {
          name: action.payload.name,
          id: action.payload.id
        }
      }

    default:
      return state;
  }
}
