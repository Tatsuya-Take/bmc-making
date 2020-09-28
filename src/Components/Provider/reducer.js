export const initialState = {
  user: null,
  canvasId: 'default',
  isPremium: null
}

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
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
