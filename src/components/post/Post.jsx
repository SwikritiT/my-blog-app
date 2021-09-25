import './post.css'

export default function Post() {
    return (
        <div className="post"> 
         <img
             className="postImg" 
             src="https://images.unsplash.com/photo-1598188306155-25e400eb5078?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
             alt="" 
         />
         <div className="postInfo">
             <div className="postCategory">
                 <span className="postCat">Life</span>
                 <span className="postCat">Tech</span>
             </div>
             <span className="postTitle">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
         </div>
         <p className="postDescription">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod laboriosam expedita quo ducimus quia
             , pariatur dolore asperiores deserunt debitis odit nobis illum error provident facilis explicabo
              repellat rem maiores neque.
              
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod laboriosam expedita quo ducimus quia
             , pariatur dolore asperiores deserunt debitis odit nobis illum error provident facilis explicabo
              repellat rem maiores neque.

              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod laboriosam expedita quo ducimus quia
             , pariatur dolore asperiores deserunt debitis odit nobis illum error provident facilis explicabo
              repellat rem maiores neque.
              
        </p>
        </div>
    )
}
