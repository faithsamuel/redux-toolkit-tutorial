import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formData : {
        title : '',
        description : ''
    }
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
    }
});

export const {handleInputChange} = blogSlice.actions

export default blogSlice.reducer;