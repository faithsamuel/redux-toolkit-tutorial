import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleAddTodo, handleInputChange } from '../store/slices/blogSlice';

function AddNewBlog() {

    const {blog} = useSelector(state=>state)
    const dispatch = useDispatch();


    function onChangeInput(e) {
        dispatch(handleInputChange({
            [e.target.name]: e.target.value,
        }))
    }

    function handleTodoSubmit(e) {
        e.preventDefault();
        dispatch(handleAddTodo());
    }

  return (
    <div>
       <form onSubmit={handleTodoSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
    <div className="mb-4">
        <label 
            htmlFor="title" 
            className="block text-sm font-medium text-gray-700 mb-1"
        >
            Enter Blog Title
        </label>
        <input 
            type="text"
            name="title"
            placeholder="Enter Blog Title"
            id="title"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={onChangeInput}
            value={blog?.formData?.title}
        />
    </div>
    <div className="mb-4">
        <label 
            htmlFor="description" 
            className="block text-sm font-medium text-gray-700 mb-1"
        >
            Enter Blog Description
        </label>
        <input 
            type="text"
            name="description"
            placeholder="Enter Blog Description"
            id="description"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={onChangeInput}
            value={blog?.formData?.description}
        />
    </div>
    <button 
        type="submit" 
        className="w-full bg-black-500 text-white p-2 rounded hover:bg-blue-600 transition"
    >
        Add New Blog
    </button>
</form>

    </div>
  )
}

export default AddNewBlog