const initialState = {
  sysMessage: [],
  errorMessage: [],
  utils: {
    setMessage: (dispatch, message) => {
      dispatch({
        type: 'SET_SYS_MESSAGE',
        payload: {
          message,
        },
      });
      setTimeout(() => {
        dispatch({
          type: 'REMOVE_SYS_MESSAGE',
          payload: false,
        });
      }, 5000);
    },
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_SYS_MESSAGE':
      return {
        ...state,
        sysMessage: [...state.sysMessage, action.payload.message],
      };
    case 'REMOVE_SYS_MESSAGE':
      return {
        ...state,
        sysMessage: [],
      };
    case 'SET_ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: [...state.errorMessage, action.payload.message],
      };
    case 'REMOVE_ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: [],
      };

    default:
      return state;
  }
}

export { reducer, initialState };
