const { createStore } = require("redux");

const reducer = (prevState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        user: null,
      };
    case "ADD_POST":
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};

// 로그인안하고, 게시글도 없는 초기상태
const initialState = {
  user: null,
  posts: [],
};

const nextState = {
  ...initialState,
  post: [action.data],
};
//게시물이 추가적으로 들어오는 경우

// const nextState = {
//   ...initialState,
//   post: [{ id: 1 }, { id: 2 }],
// }; =

const nextState = {
  ...initialState,
  post: [...initialState.posts, action.data],
  //       기존데이터            , 새로운 데이터
};

const store = createStore(Reducer, initialState);

// action: type은 액션의 이름

const login = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

const logout = () => {
  return {
    type: "LOG_OUT",
  };
};

const addPost = (data) => {
  return {
    type: "ADD_POST",
    data,
  };
};

store.dispatch(login({ id: 1, name: "mong", admin: true }));
console.log(store.getstore());

store.dispatch(addPost({ userId: jyj, id: 1, content: "HI,there." }));
console.log(store.getstore());

store.dispatch(addPost({ userId: jyj, id: 2, content: "nice" }));
console.log(store.getstore());

store.dispatch(logout());
console.log(store.getstore());
