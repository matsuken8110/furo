export const inputMemberName = (name) => ({
  type: "INPUT_MEMBER_NAME",
  payload:{
    name
  }
});

export const addMember = (person) => ({
  type: "ADD_MEMBER",
  payload:{
    person
  }
});

export const clearInput = () => ({
  type: "CLEAR_INPUT",
});

export const deleteMember = (id) => ({
  type: "DELETE_MEMBER",
  payload:{
    id
  }
});

export const toggleChecked = (id) => ({
  type: "TOGGLE_CHECKED",
  payload:{
    id
  }
});

export const getActiveMember = () => ({
  type: "GET_ACTIVE_MEMBER",
});

export const getSumOfMoney = (money) => ({
  type: "GET_SUM_OF_MONEY",
  payload:{
    money
  }
});

export const getId = () => ({
  type: "GET_ID",
});
