let initialState = {
    posts: []
};

export default function reducer(state=initialState,action) {
switch(action.type){
    case 'ADD_TO_POSTS':
let posts = [...state.posts,action.payload.post]
return{
    ...state,
    posts:posts
}
case 'DELETE_CARD':
   let cards = state.posts.filter((item,index)=>(
        index !== action.payload.id
   ))
   return {
    ...state,
    posts:cards  
   }
default:
    return state;
    
}}