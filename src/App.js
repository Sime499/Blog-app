import { useEffect } from 'react'
import  Post from './Post'
import {connect} from 'react-redux'
import * as actionCreators from './store/actionCreators'

  
function App(props) {

  //const [blogs,setBlogs]=useState([])

  useEffect(()=>{

        props.onBlogsLoaded()
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

const mapDispatchToProps = (dispatch) => {
  return {
    onBlogsLoaded:() => dispatch(actionCreators.fetchBlogs())
    
  }
}

const mapStateToProps = (state) =>{
  return{
    blogs:state.blogs
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

