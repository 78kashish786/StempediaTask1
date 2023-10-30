import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState= [
    {id:1, title:"Enter your name"},
]

const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdd:{
            reducer(state,action){
            state.push(action.payload)
        },

        prepare(title){
            return{
                payload:{
                    id:nanoid,
                    title,
                }
            }
        }

        }
    }
})

export const selectallposts=(state)=>state.posts;

export const {postAdd}= postSlice.actions



export default  postSlice.reducer;