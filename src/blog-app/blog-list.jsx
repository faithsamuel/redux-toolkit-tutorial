import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBlogListOnInitialLoad } from '../store/slices/blogSlice';

function BlogList() {

    const dispatch = useDispatch();
    const {blog} = useSelector(state=>state);
    const {blogList} = blog;

    console.log(blogList)

    useEffect(()=>{
        dispatch(setBlogListOnInitialLoad({
            blogList : JSON.parse(localStorage.getItem('blogList')) || []
        }))
    },[])

  return (
    <ul className="max-w-lg mx-auto mt-8 space-y-4">
    {
        blogList?.length > 0 ?
        blogList.map(singleBlogItem => (
            <li key={singleBlogItem?.id} className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {singleBlogItem?.title}
                </h3>
                <p className="text-gray-600">
                    {singleBlogItem?.description}
                </p>
                <div className="flex justify-end gap-2">
                    <button 
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 transition"
                        onClick={() => handleEdit(singleBlogItem?.id)}
                    >
                        Edit
                    </button>
                    <button 
                        className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 transition"
                        onClick={() => handleDelete(singleBlogItem?.id)}
                    >
                        Delete
                    </button>
                </div>
            </li>
        ))
        : (
            <h1 className="text-center text-gray-500 font-medium">
                No blog added! Please add one
            </h1>
        )
    }
</ul>
  )
}

export default BlogList