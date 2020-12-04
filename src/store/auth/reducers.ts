
  const initialState = {
    message: null,
  };
  
  export const authReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {
      case '1':
        return { ...state };
      case '2':
        return { ...state };
      case '3':
        return { ...state };
      default:
        return state;
    }
  };
  