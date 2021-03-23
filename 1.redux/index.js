const { createStore } = require("redux");
// 기본 reducer 원리
// const reducer = (prevState, action) => {
//   switch (action.type) {
//     case "CHANGE_COMP_A":
//       return {
//         compA: action.data,
//         compB: 10,
//         compC: null,
//       };
//       case 'CHANGE_COMP_B':
//       return {
//         compA: "a",
//         compB: action.data,
//         compC: null,
//       };
//   }
// };

//반복되는 코드 전개연산자로 없애기
const reducer = (prevState, action) => { //새로운 state 만들어주기
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        ...prevState,
        compA: action.data,
      };
    case "CHANGE_COMP_B":
      return {
        ...prevState,
        compB: action.data,
      };
      case "CHANGE_COMP_C":
      return {
        ...prevState,
        compC: action.data,
      };
      default:
          return prevState;
          //오타나서 switch문으로 안들어가면 return하는 곳이 없기때문에 기본으로 만들어준다.
  }
};
const initialState = {
  compA: "a",
  compB: 10,
  compC: null,
};

const nextState = {
  ...initialState,
  compA: action.data,
};
// 1. 스토어 만들기(첫번째 인자는 Reducer,두번째는 상태값)
const store = createStore(Reducer, initialState);
// 2. 스토어의 스테이트 불러오기
console.log(store.getState());

// action: type은 액션의 이름
const changeCompA = {
  type: "CHANGE_COMP_A",
  data: "b",
};

const changeCompAtoC = {
  type: "CHANGE_COMP_A_TO_C",
  data: "c",
};
// 바꾸려는 값이 d,e,f...일 때마다 새로운 객체를 만들어줘야한다.

const ChangeCompA = (data) => {
  return {
    //함수는 action을 만들어내는 액션생성자 역할, 객체가 action
    type: "CHANGE_COMP_A",
    data,
  };
};

store.dispatch(changeCompA(b));
// = store.dispatch({ type: "CHANGE_COMP_A", data: "b" });
console.log(stroe.getState());
