import React from "react"

const PostForm = (props) => {
  return (
    <div className="p-4">
        <div className="flex flex-col w-full">    
        <p className="text-slate-200 font-bold text-xl">Create a New Post</p>
        <p className="text-slate-300 font-medium text-md">Discuss something cool with fellow nerds!!!</p>
        </div>
        <div>
            <form className="flex flex-col gap-4">
                <label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        className="rounded-md p-2 focus:outline-none outline-none"
                    />
                </label>
            </form>
        </div>
    </div>
  )
};

export default PostForm;
