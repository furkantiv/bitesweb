"use client";

import React from "react";
import { Calendar, ArrowRight } from "lucide-react";

interface NewsCardProps {
  date: string;
  title: string;
  description: string;
  image: string;
  timeAgo: string;
}

const NewsCard = ({
  date,
  title,
  description,
  image,
  timeAgo,
}: NewsCardProps) => (
  <div className="relative flex bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg overflow-hidden w-[700px] max-w-full">
    {/* Time on the left */}
    <div className="bg-black/20 backdrop-blur-md w-24 flex flex-col items-center justify-center text-white p-4">
      <div className="text-4xl font-bold">{timeAgo}</div>
      <div className="text-sm">Hours ago...</div>
    </div>

    {/* Image and content */}
    <div className="flex-1 flex items-center space-x-4 p-4">
      <img
        src={image}
        alt={title}
        className="w-32 h-20 rounded-md object-cover flex-shrink-0"
      />
      <div className="flex-1">
        <div className="text-sm text-blue-300 mb-1 flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {date}
        </div>
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-gray-300 text-sm line-clamp-2 mt-1">{description}</p>

        <button className="mt-3 inline-flex items-center px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm transition">
          Detail <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  </div>
);

const NewsGrid = () => {
  return (
    <div className="absolute bottom-10 right-10 z-50">
      <NewsCard
        date="23 September, 2025"
        timeAgo="07"
        title="10th of January Journalists' Day"
        description="We celebrate the 10th of January Journalists' Day of our valuable press members who ensure the public's access to information under all circumstances..."
        image="/your-image-path/news.jpg" // 🔁 Buraya gerçek görsel yolunu yaz
      />
    </div>
  );
};

export default NewsGrid;
