import axios from "axios";
import React, { useEffect, useState } from "react";
import service from "../services/service";
import PostCards from "./PostCard";
import { FaPlus } from "react-icons/fa";

const Posts = () => {
  const [loading, setLoading] = useState(false);
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [postObj, setPostObj] = useState(null);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    setCategoryLoading(true);
    try {
      const response = await service.fetchCategories();
      if (!response) {
        console.log("Error fetching categories");
        Process.exit(1);
      }
      setCategories(response.data);
      setCategoryLoading(false);
    } catch (error) {
      console.log("Error fetching categories: ", error.message);
    }
  };

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await service.fetchPosts();
      if (!response) {
        console.log("Error fetching posts");
        Process.exit(1);
      }
      setPostObj(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching posts: ", error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  console.log(postObj);
  return (
    <div className="bg-slate-200 flex justify-between max-w-[1600px] mx-10 lg:mx-auto p-4 rounded-xl">
      <div className="w-[80%]">
        <div className="flex items-center justify-between max-w-[1000px]">
          <p className="text-2xl font-bold text-slate-500">Recents Posts</p>
          <button className="flex items-center justify-center px-[12px] rounded-lg py-[6px] gap-2 bg-slate-800">
            <FaPlus className="text-white font-bold" />
            <span className="text-xl font-bold text-white">New Post</span>
          </button>
        </div>
        <div className="h-full max-h-[650px] py-2">
          {loading ? (
            <div className="max-w-[1000px] flex items-center justify-center">
              <p className="text-xl font-bold ">Loading...</p>
            </div>
          ) : (
            <div className="max-w-[1000px] no-scrollbar flex flex-col gap-[24px] py-6 max-h-[650px] overflow-y-auto scroll-smooth">
              {postObj?.docs.map((post) => (
                <PostCards key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="bg-white w-[20%] rounded-lg p-4">
        {categoryLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-col gap-4">
            {categories.map((category) => (
              <p key={category._id} className="text-2xl font-medium text-blue-600 ">#{category.name}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
