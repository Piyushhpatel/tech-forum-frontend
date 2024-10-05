import React from "react";
import { formatDistanceToNow } from "date-fns";
import { BiComment, BiDownvote, BiUpvote } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";

const PostCards = ({ post }) => {
  const timeAgo = formatDistanceToNow(new Date(post?.updatedAt), {
    addSuffix: true,
  });

  return (
    <div className="bg-white w-full rounded-lg p-6 shadow-lg cursor-pointer">
      <div className="flex flex-col gap-3">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-slate-800">
            {post?.title}
          </h2>
          <span className="text-md text-gray-500">{timeAgo}</span>
        </div>
        <p className="text-xl leading-[38px] text-slate-700">
          {post?.content.length < 80
            ? post?.content
            : `${post?.content.substr(0, 80)}...`}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <span>
            <BiUpvote className="text-2xl" />
          </span>
          <p className="text-xl font-semibold">{post?.upvotes}</p>
        </div>
        <div className="flex items-center gap-1">
          <span>
            <BiDownvote className="text-2xl" />
          </span>
          <p className="text-xl">{post?.downvotes}</p>
        </div>
        <div className="flex items-center gap-1">
          <span>
            <BiComment className="text-2xl" />
          </span>
          <p className="text-xl">{post?.totalComments}</p>
        </div>
        <div>
          <span>
            <FaShareAlt className="text-xl"/>
          </span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PostCards;
