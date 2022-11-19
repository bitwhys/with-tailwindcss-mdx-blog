import React from "react";

export type PostPreviewCardProps = {
  title: string
  datetime: any
  date: any
  description: string
  href: string
}

const PostPreviewCard = ({ title, date, datetime, description, href }: PostPreviewCardProps) => {
  return (
    <div key={title} className="flex flex-col overflow-hidden rounded-lg shadow-sm p-4 border ">
      <p className="text-sm text-gray-500">
        <time dateTime={datetime}>{date}</time>
      </p>
      <a href="#" className="mt-2 block">
        <p className="font-heading text-xl font-semibold text-gray-900">{title}</p>
        <p className="mt-3 text-base text-gray-500">{description}</p>
      </a>
      <div className="mt-3">
        <a href={href} className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
          Read full story
        </a>
      </div>
    </div>
  );
};

export default PostPreviewCard;
