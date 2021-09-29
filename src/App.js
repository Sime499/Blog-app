import {useEffect,useState} from 'react'
import  Post from './Post'
  
function App(props) {

  const [blogs,setBlogs]=useState([])

  useEffect(()=>{

       fetch("http://localhost:3080/blog")
       .then(response =>response.json())
       .then(blogs=>{
           setBlogs(blogs)
       })
  },[])

   
   const blogItems = blogs.map(blog => {
      return <li key ={blog.id}>{blog.title} {blog.imageUrl}</li>
   })
  return (



      <ul>

      {blogItems}
      <Post />

      </ul>
      
  );
}

export default App;
