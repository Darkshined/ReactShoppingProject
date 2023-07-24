import { CATEGORIES_ACTION_TYPE } from "./category.types";
import { createAction } from "../../utils/reducer"


export const setCurrentCategory = (categories) => 
  createAction(CATEGORIES_ACTION_TYPE.SET_CURRENT_CATEGORIES, categories);
