import { filesType } from "@/types/files";

export type ActionType = {
    type: string;
    payload: any;
  };

export const initialFileState: filesType = {
    id: "",
    title: "",
    usersAccessIDs: [],
    content: [],
};
  
export const fileReducer = (state: filesType, action: ActionType): filesType => {
    switch (action.type) {
        case "REPLACE_STATE":
            return action.payload;
        
        case "UPDATE_PARAGRAPH":
            return {
                ...state,
                content: state.content.map((contentItem, index) => {
                    if (index === action.payload.index && contentItem.type === 'paragraph') {
                        return { ...contentItem, text: action.payload.newText };
                    }
                    return contentItem;
                }),
            };

        default:
            return state;
    }
};