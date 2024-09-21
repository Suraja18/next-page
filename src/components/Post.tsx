"use client";
import React from 'react';

interface PostType {
    id?: string; title: string; content: string | null; authorName: string | null;
}

const Post: React.FC<PostType> = ({id, title, content, authorName}) => {
  return (
    <>
        <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{authorName}</h2>
            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{title}</h1>
            <p className="leading-relaxed mb-3">{content}</p>
            </div>
        </div>
    </>
  )
}

export default Post