const initialState = {
  person: {
    name: "",
    checked: false,
    id: 0,
  },
  member: [],
  activeMember: [],
  checkedMember: [],
  sumOfMoney: 0,
}

export default function eventAppReducer (state = initialState, action) {
  switch(action.type){
    case "INPUT_MEMBER_NAME":
      return{
        ...state,
        person: {
          name: action.payload.name,
          checked: false,
          id: state.member.length,
        }
      }

      case "ADD_MEMBER":
        return{
          ...state,
          member: state.member.concat([action.payload.person]),
        }

      case "CLEAR_INPUT":
        return{
          ...state,
          person: {
            name: "",
            checked: false
          }
        }

      case "DELETE_MEMBER":
        return{
          ...state,
          member: (() => {
            const memberStock = state.member;
            memberStock.splice(action.payload.id, 1);
            return memberStock;
          })()
        }

      case "TOGGLE_CHECKED":
        return{
          ...state,
          member: (() => {
            const memberStock = state.member;
            memberStock[action.payload.id].checked = !memberStock[action.payload.id].checked;
            return memberStock;
          })()
        }

      case "GET_ACTIVE_MEMBER":
        return{
          ...state,
          activeMember: (() => {
            const allMember = state.member;
            const activeMember = allMember.filter(item => !item.checked);
            return activeMember;
          })(),
          checkedMember: (() => {
            const allMember = state.member;
            const checkedMember = allMember.filter(item => item.checked);
            return checkedMember;
          })(),
        }

      case "GET_SUM_OF_MONEY":
       return{
         ...state,
         sumOfMoney: action.payload.money,
       }

      case "GET_ID":
        return{
          ...state,
          member: ((item) => {
            const memberStock = state.member;
            memberStock.map((item, i) => {
              item.id = i;
            })
            return memberStock;
          })()
        }

    default:
      return state;
  }
}
