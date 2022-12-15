import { ICard, cardActionType, CARD_ACTIONS } from "../../../types/card.d";

function cardReducer(state: ICard, action: cardActionType): ICard {
    switch (action.type) {
      case CARD_ACTIONS.SET_PHRASE:
        return {
          ...state,
          phrase: action.payload.phrase,
        };
      case CARD_ACTIONS.SET_USAGE:
        return {
          ...state,
          usages: [...state.usages, action.payload.usage],
        };
      case CARD_ACTIONS.SET_DESCRIPTION:
        return {
          ...state,
          description: action.payload.description,
        };
      case CARD_ACTIONS.SET_MEANING:
        return {
          ...state,
          meaning: action.payload.meaning,
        };
      case CARD_ACTIONS.SET_TAGS:
        return {
          ...state,
          tags: [...state.tags, action.payload.tag],
        };
      default:
        return state;
    }
  }
  
export default cardReducer;