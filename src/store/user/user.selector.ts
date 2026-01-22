import { UserState } from './user.reducer';

export const selectCurrentUser = (state: { user: UserState }) => state.user.currentUser;