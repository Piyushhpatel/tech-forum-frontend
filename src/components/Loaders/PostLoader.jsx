import React from "react";

const PostLoader = () => {
  return (
    <div className="bg-slate-300 w-full rounded-lg p-6 shadow-lg overflow-hidden">
      <div className="flex flex-col gap-3">
        {/* Shimmer Effect for Title */}
        <div className="h-6 bg-slate-700 rounded w-3/4 animate-shimmer" />
        <div className="h-3 bg-slate-700 rounded w-1/2 animate-shimmer" />

        {/* Shimmer Effect for Content */}
        <div className="h-4 bg-slate-700 rounded w-full animate-shimmer" />

        {/* Bottom Section Shimmer Effect */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="h-6 w-8 bg-slate-700 rounded-full animate-shimmer" />
            <div className="h-6 bg-slate-700 rounded w-1/4 animate-shimmer" />
          </div>
          <div className="flex items-center gap-1">
            <div className="h-6 w-8 bg-slate-700 rounded-full animate-shimmer" />
            <div className="h-6 bg-slate-700 rounded w-1/4 animate-shimmer" />
          </div>
          <div className="flex items-center gap-1">
            <div className="h-6 w-8 bg-slate-700 rounded-full animate-shimmer" />
            <div className="h-6 bg-slate-700 rounded w-1/4 animate-shimmer" />
          </div>
          <div>
            <div className="h-6 w-8 bg-slate-700 rounded-full animate-shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostLoader;
