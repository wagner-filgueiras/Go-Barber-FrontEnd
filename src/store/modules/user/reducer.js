import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};
// eslint-disable-next-line
export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        // eslint-disable-next-line
        draft.profile = action.payload.user;
      });
    default:
      return state;
  }
}
