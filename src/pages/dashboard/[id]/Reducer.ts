import { filesType } from "@/types/files";

export type ActionType = {
    type: string;
    payload: any;
  };
  
export const fileReducer = (state: filesType | null, action: ActionType): filesType => {
    switch (action.type) {
        case "REPLACE_STATE":
            return action.payload;

        case "CHANGE_PARAGRAPH":
            let newState = { ...state };

            if (newState.content[action.payload.index]?.type === "paragraph") {
                newState.content[action.payload.index] = {
                type: "paragraph",
                text: action.payload.newText,
                };
            }
            
            return newState;

        default:
            return state;
    }
};