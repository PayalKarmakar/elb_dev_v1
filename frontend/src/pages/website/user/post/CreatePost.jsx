import React from 'react'
import PostCreate from '../../../../components/website/user/post/PostCreate'
import PostSidebar from '../../../../components/website/user/post/PostSidebar'
import PostNav from '../../../../components/website/user/post/PostNav'

const CreatePost = () => {
    
  return (
    <>
        <div className="d-flex">
            <PostSidebar />
            {/* <PostNav /> */}
            <PostCreate />
        </div>
    </>
  )
}

export default CreatePost
