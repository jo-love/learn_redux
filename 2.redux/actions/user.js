const logIn = (data) => {
  //async action creator
  return (dispatch, getState) => {
    // 비동기니까 함수리턴
    dispatch(logInRequest(data));
    dispatch(logInSuccess());
  };
};

const logInRequest = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};

const logInSuccess = (data) => {
  return {
    type: "LOG_IN_SUCCESS",
  };
};

const logIn = (data) => {
  //sync action creator
  return {
    //action
    type: "LOG_IN",
    data,
  };
};
