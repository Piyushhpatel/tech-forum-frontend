import React, { useState } from "react"
import service from "../services/service";

const PostForm = ({setShowForm, categories}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "general",
  })

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        const response = await service.createPost(formData);
        if(response){
            setShowForm(false);
            window.location.reload();
        }
    } catch (error) {
        console.log("Error creating post: ", error.message);
    }

    setLoading(false);
    setFormData({
        title: "",
        content: "",
        category: "general",
    });
  }


  return (
    <div className="p-4 flex flex-col gap-6">
        <div className="flex flex-col w-full">    
        <p className="text-slate-700 font-bold text-xl">Create a New Post</p>
        <p className="text-slate-700 font-medium text-md">Discuss something cool with fellow nerds!!!</p>
        </div>
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex w-full gap-2">
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                    className="p-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-500 w-full"
                />
                <select 
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="p-2 rounded-md max-w-[200px] border border-slate-300 focus:outline-none focus:border-slate-500"
                >
                    {
                        categories.map((category) => (
                            <option key={category._id} value={category.name}>
                                {category.name.toUpperCase()}
                            </option>
                        ))
                    }
                </select>
                </div>
                <textarea
                    name="content"
                    placeholder="Content"
                    value={formData.content}
                    onChange={handleChange}
                    className="p-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-500 min-h-[100px] w-full"
                />
                <button type="submit" disabled={loading} className={`flex items-start justify-center ${loading ? "opacity-75 cursor-not-allowed" : ""} py-[6px] px-6 self-end bg-slate-700 max-w-[100px] rounded-lg text-white text-lg font-semibold`}>{loading ? "Posting..." : "Post"}</button>
            </form> 
        </div>
    </div>
  )
};

export default PostForm;
