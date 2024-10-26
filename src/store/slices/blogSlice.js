import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    formData : {
        title : '',
        description : ''
    },
    blogList : []
}

export const blogSlice = createSlice({
    name : 'blog',
    initialState,
    reducers : {
        handleInputChange: (state, action)=> {
            console.log(action)
            let cpyFormData = {...state.formData};
            cpyFormData = {
                // "...cpyFormData," <-- this action allows data to persits when multiple form fields are been field
                ...cpyFormData,
                // "...action.payload" the payload provides the key and value/that is the name and value inputted in the text field
                ...action.payload
            }

            state.formData = cpyFormData;
        },

        handleAddTodo: (state,action)=> {
            console.log(action);
            state.blogList.push({
                id : nanoid(),
                ...state.formData,
            });

            state.formData = {
                title: "",
                description: "", 
            }; 

            localStorage.setItem('blogList', JSON.stringify(state.blogList))
        },

        setBlogListOnInitialLoad : (state, action)=> {
            //pass the list of blogs from the localStorage to the payload
            state.blogList = action.payload.blogList;
        }
    }
});

export const {handleInputChange, handleAddTodo, setBlogListOnInitialLoad} = blogSlice.actions

export default blogSlice.reducer;