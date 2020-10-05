export const initialState = {
  user: null,
  email: null,
  userHash: null,
  canvasId: null,
  isOnline: false
}

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
        email: action.email,
        userHash: action.userHash,
        isOnline: action.isOnline
      }
    case 'SET_CANVAS':
      return {
        ...state,
        canvasId: action.canvasId
      }
    default:
      return state;
  }
}

export default reducer;
