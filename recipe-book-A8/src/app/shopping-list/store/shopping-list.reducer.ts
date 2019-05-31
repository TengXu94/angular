import { Ingredient } from "../../shared/ingredient.model";
import { Action } from "@ngrx/store"
import * as ShoppingListActions from "./shopping-list.actions";



export interface State {
    ingredients: Ingredient[],
    editedIngredient : Ingredient,
    editedIngredientIndex: number
}

const initialState : State = {
    ingredients :  [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ],
    
    editedIngredient : null,
    editedIngredientIndex : -1,

} ;

export function shoppingListReducer(state : State = initialState, action : ShoppingListActions.ShoppingListActions) {
    switch(action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [
                    ...state.ingredients,
                    action.payload
                ]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [
                    ...state.ingredients,
                    ...action.payload
                ]
            }
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[state.editedIngredientIndex];
            const updatedIngredient = {
                ...ingredient,
                ...action.payload
            }

            const updatedIngredients = [...state.ingredients]; //object copied
            updatedIngredients[state.editedIngredientIndex] = updatedIngredient;

            return {
                ...state,
                ingredients: updatedIngredients,
                editedIngredient : null,
                editedIngredientIndex : -1
            }
        case ShoppingListActions.DELETE_INGREDIENT:
            return {
                ...state,
                ingredients : state.ingredients.filter((ig, igIndex) => {
                    return igIndex !== state.editedIngredientIndex;
                }), //filter gives back always a copy of the object

                editedIngredient : null,
                editedIngredientIndex : -1
            }

        case ShoppingListActions.START_EDIT:
            return {
                ...state,
                editedIngredientIndex : action.payload,
                editedIngredient : {...state.ingredients[action.payload]}
            }
        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedIngredient : null,
                editedIngredientIndex : -1
            }
        default:
            return state;
    }
}