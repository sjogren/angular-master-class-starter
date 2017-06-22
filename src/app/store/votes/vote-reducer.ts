import {VoteActions} from './vote-actions'
import {INITIAL_VOTES_STATE} from './vote-state'

export const voteReducer = (state = INITIAL_VOTES_STATE, action) => {

  switch(action.type) {

    case VoteActions.YES:

      return {
        ...state,
        counter: state.counter + 1
      }

    case VoteActions.NO:

      return {
        ...state,
        counter: state.counter - 1
      }

    default: return state;

  }

}
