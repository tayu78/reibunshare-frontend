import {ChangeEvent} from "react"
import {  CARD_ACTIONS,SetPhrase,SetMeaning,SetDescription,SetTags,SetUsage, Usage } from "../../../types/card.d";


export const setPhraseAction = (e: ChangeEvent<HTMLInputElement>) : SetPhrase => {
    return {
        type: CARD_ACTIONS.SET_PHRASE,
        payload: {
          phrase: e.target.value,
        },
      }
}

export const setMeaningAction = (e: ChangeEvent<HTMLTextAreaElement>): SetMeaning => {
    return {
        type: CARD_ACTIONS.SET_MEANING,
        payload: {
            meaning: e.target.value
        }
    }
}
export const setDescriptionAction = (e: ChangeEvent<HTMLTextAreaElement>): SetDescription => {
    return {
        type: CARD_ACTIONS.SET_DESCRIPTION,
        payload: {
            description: e.target.value
        }
    }
}

export const setUsageAction = (usage:Usage) :SetUsage=> {
    return {
        type: CARD_ACTIONS.SET_USAGE,
        payload: {
          usage
        },
      }
}

export const setTagsAction = (tag: string): SetTags => {
    return {
        type: CARD_ACTIONS.SET_TAGS,
        payload: {
            tag
        }
    }
}

