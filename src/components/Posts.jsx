import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import service from "../services/service";
import PostCards from "./PostCard";
import { FaPlus } from "react-icons/fa";
import InfiniteScroll from "react-infinite-scroll-component";
import PostLoader from "./Loaders/PostLoader";
import CategoryLoader from "./Loaders/CategoryLoader";
import { Transition, TransitionChild } from "@headlessui/react";
import PostForm from "./PostForm";


const Posts = () => {
  const [loading, setLoading] = useState(false);
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [postObj, setPostObj] = useState(null);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const fetchCategories = async () => {
    setCategoryLoading(true);
    try {
      const response = await service.fetchCategories();
      if (!response) {
        console.log("Error fetching categories");
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
      }
      setPostObj(response.data);
      setPosts(response.data.docs);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching posts: ", error.message);
    }
  };

  const fetchMorePosts = async (uri) => {
    try {
      const response = await service.fetchMorePosts(uri);
      if (!response) {
        console.log("Error fetching posts");
      }
      setPostObj(response.data);
      setPosts([...posts, ...response.data.docs]);
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
    <div className="bg-slate-200 overflow-hidden max-h-[84vh] flex justify-between max-w-[1200px] mx-10 lg:mx-auto p-4 rounded-xl">
      <div className="w-full lg:w-[75%]">
        <div className="flex items-center justify-between max-w-[1000px]">
          <p className="text-2xl font-bold text-slate-500">Recents Posts</p>
          <button
            className="flex items-center justify-center px-[12px] rounded-lg py-[4px] gap-2 bg-slate-800 hover:scale-105 transition-all duration-200 ease-in-out"
            onClick={() => setShowForm(!showForm)}
          >
            <FaPlus className="text-white font-bold" />
            <span className="text-lg font-semibold text-white">New Post</span>
          </button>
        </div>
        <div className="h-full max-h-[650px] py-2">
          {loading ? (
            <div className="max-w-[1000px] flex flex-col gap-[24px] items-center justify-center">
              <PostLoader />
              <PostLoader />
              <PostLoader />
            </div>
          ) : posts.length > 0 ? (
            <div
              id="scrollableDiv"
              className="max-w-[1000px] pb-28 no-scrollbar flex flex-col gap-[24px] pt-4 max-h-[650px] overflow-y-auto scroll-smooth"
            >
              <InfiniteScroll
                dataLength={posts.length}
                next={() => fetchMorePosts(postObj?.nextPage)}
                hasMore={postObj?.hasNextPage}
                loader={<div className="loader" />}
                endMessage={
                  <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
                scrollableTarget="scrollableDiv"
                className="flex flex-col gap-4"
              >
                {posts.map((post) => (
                  <PostCards key={post._id} post={post} />
                ))}
              </InfiniteScroll>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-xl font-bold text-slate-500">No Posts Yet</p>
            </div>
          )}
        </div>
      </div>
      <div className="bg-white hidden lg:block w-[20%] h-fit rounded-lg p-4">
        {categoryLoading ? (
          <div className="flex flex-col gap-4">
            <CategoryLoader />
            <CategoryLoader />
            <CategoryLoader />
            <CategoryLoader />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {categories.map((category) => (
              <div key={category._id} className="bg-slate-300 p-1 rounded-md">
                <p className="text-xl font-medium text-slate-600 cursor-pointer selection:">
                  #{category.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Post Form Transition */}
      <Transition
        show={showForm}
        as={Fragment}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <TransitionChild>
          <div className="absolute p-4 max-w-[400px] max-h-fit lg:max-w-[800px] w-full lg:max-h-fit h-full z-10 bg-slate-300/75 backdrop-blur-md rounded-md border border-slate-700">
            <button
              className="absolute text-slate-900 font-medium right-0 top-0 px-2 py-2"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
            <PostForm setShowForm={setShowForm} categories={categories} />
          </div>
        </TransitionChild>
      </Transition>
    </div>
  );
};
export default Posts;
