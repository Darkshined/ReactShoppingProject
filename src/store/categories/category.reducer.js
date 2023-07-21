
import { CATEGORIES_ACTION_TYPE } from "./category.types";

const INITIAL_CATEGORY_STATE = {
  currentCategories: []
};

export const categoryReducer = (
  state = INITIAL_CATEGORY_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPE.SET_CURRENT_CATEGORIES:
      return { ...state, currentCategories: payload };
    default:
      return state;
  }
};
