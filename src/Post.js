import {useState} from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'



function Post(props) {


    const [blog,setBlog]= useState({})

    const handleBlogChange = (e) =>{
       
      setBlog({
        ...blog,
        [e.target.name]:e.target.value
      })
         
    }

    const handleBlogPost = () => {

      console.log (JSON.stringify(blog))
       fetch('http://localhost:3080/blog',{
       method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(blog)
    }).then(response => response.json()).then(result=>{
       //fetch a blog
             props.onBlogsLoaded()


    })

   }

    return (
        <div>
          <form className="Post" >
        <h1>Share only The Fact </h1>
         <div>
          <input
            type="url"
            name="imageUrl"
            required
            placeholder="Share your Picture "
            onChange={handleBlogChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="title"
            required
            placeholder="Enter the title of your Article"
            onChange={handleBlogChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="body"
            required
            placeholder="Enter detail description of Your Article "
            onChange={handleBlogChange}
          />
        </div>

            <button onClick = {handleBlogPost}>Post</button>
      </form>
            
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBlogsLoaded:() => dispatch(actionCreators.fetchBlogs())
    
  }
}

export default connect (null,mapDispatchToProps) (Post)
