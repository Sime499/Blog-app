import { useEffect } from 'react'
import  Post from './Post'
import {connect} from 'react-redux'
  
function App(props) {

  //const [blogs,setBlogs]=useState([])

  useEffect(()=>{

       fetch("http://localhost:3080/blog")
       .then(response =>response.json())
       .then(blogs=>{
           //setBlogs(blogs)
           props.onBlogsLoaded(blogs)
       })
  },[])

   
   const blogItems = props.blogs.map(blog => {
      return <li key ={blog.id}>{blog.title} {blog.imageUrl}</li>
   })

  return (

      <ul>

      {blogItems}
      <Post />

      </ul>
      
  );
}

const mapDispatchToProps = (dispatch) =>{
  return {
    onBlogsLoaded:(blogs) => dispatch({type:'BLOGS_LOADED',payload:blogs})
  }
}

const mapStateToProps = (state) =>{
  return{
    blogs:state.blogs
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

