export interface ICard {
  _id?: string;
  // userId: string,
  phrase: string;
  usages: Usage[];
  description: string;
  meaning: string;
  // img: string,
  likes?: string[];
  tags: { name: string }[];
  // createdAt: Date,
  // updatedAt: Date
}

export type CardWithUser = ICard & {
  user: { _id: string; img: string; accountName: string };
};

export interface Usage {
  speaker: string;
  sentence: string;
}

export enum CARD_ACTIONS {
  SET_PHRASE = "SET_PHRASE",
  SET_USAGE = "SET_USAGE",
  SET_DESCRIPTION = "SET_DESCRIPTION",
  SET_MEANING = "SET_MEANING",
  SET_TAGS = "SET_TAGS",
}

export interface SetPhrase {
  type: CARD_ACTIONS.SET_PHRASE;
  payload: {
    phrase: string;
  };
}

export interface SetUsage {
  type: CARD_ACTIONS.SET_USAGE;
  payload: {
    usage: Usage;
  };
}

export interface SetDescription {
  type: CARD_ACTIONS.SET_DESCRIPTION;
  payload: {
    description: string;
  };
}

export interface SetMeaning {
  type: CARD_ACTIONS.SET_MEANING;
  payload: {
    meaning: string;
  };
}
export interface SetTags {
  type: CARD_ACTIONS.SET_TAGS;
  payload: {
    tag: string;
  };
}

export type cardActionType =
  | SetPhrase
  | SetUsage
  | SetMeaning
  | SetDescription
  | SetTags;
