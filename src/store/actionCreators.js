

export const fetchBlogs = () => { 

    return (dispatch) => {
        fetch('http://localhost:3080/blog')
       .then(response => response.json())
       .then(blogs => {
          dispatch({type:'BLOGS_LOADED',payload:blogs})

       })

    }    

}

