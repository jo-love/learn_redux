const { createStore, applyMiddleware } = require("redux");
const reducer = require("./reducer");

const { createStore } = require("redux");

// 로그인안하고, 게시글도 없는 초기상태
const initialState = {
  user: null,
  isLoggingIn: true,
  posts: [],
  comments: [],
  favorites: [],
  likes: [],
  followers: [],
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

const firstMiddleware = (store) => (dispatch) => (action) => {
  console.log("액션 로깅", action);
  // 디스패하기 전 - 기능 추가
  dispatch(action);
  // 디스패치 후 - 기능추가
  console.log("액션 끝");
};

// 리덕스썽크
const thunkMiddleware = (store) => (dispatch) => (action) => {
  typeof action === "function"
    ? // 비동기 코드
      action(store.dispatch, store.getState)
    : dispatch(action);
};

const enhancer = applyMiddleware(firstMiddleware, thunkMiddleware);
//enhancer 추가
const store = createStore(Reducer, initialState, enhancer);

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
