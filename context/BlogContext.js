import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST':
      return [...state, {id:Math.floor(Math.random()*9999),title: action.payload.title,content:action.payload.content}];
    case "DELETE_POST":
      return state.filter((blogPost)=>blogPost.id !== action.payload)
    case "EDIT_POST":
      return state.map((blogPost)=>{
        if(blogPost.id===action.payload.id){
          return action.payload
        }else{
          return blogPost
        }
      })
      default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title,content,callBack)=>{
    
    dispatch({type: 'ADD_BLOGPOST',payload:{title,content}});
    callBack()
  }
};

const deleteBlogPost=(dispatch)=>{
  return(id)=>{
    dispatch({type:"DELETE_POST",payload:id})
  }
}

const editBlogPost=dispatch=>{
  return(id,title,content,callBack)=>{
    dispatch({type:"EDIT_POST",payload:{id,title,content}})
    callBack()
    }
}

 export const {Context,Provider}=createDataContext(blogReducer,{addBlogPost,deleteBlogPost,editBlogPost},[{title:"Test Post",content:"This is Test post",id:1}])
 