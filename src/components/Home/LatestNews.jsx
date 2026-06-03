// src/components/LatestNews.jsx
import React from "react";

const newsData = [
  {
    date: "Jan 15, 2025",
    title: "Why Every Business Needs a Professional Website",
    description:
      "A well-designed website builds trust, improves brand visibility, and helps customers connect with your business online.",
    link: "#",
  },
  {
    date: "Jan 15, 2025",
    title: "How Mobile Apps Help Businesses Grow",
    description:
      "Mobile apps improve customer engagement, simplify services, and create a better digital experience for users.",
    link: "#",
  },
  {
    date: "Jan 15, 2025",
    title: "Digital Marketing Strategies for Better Leads",
    description:
      "Smart digital marketing helps your business reach the right audience, generate quality leads, and increase conversions.",
    link: "#",
  },
];

const LatestNews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-2">
  <span className="inline-block bg-purple-200 text-purple-700 text-xs px-3 py-1 rounded-full">
    Blog
  </span>
</div>
        <h2 className="text-2xl  text-gray-900 mb-3 font-heading text-center">Latest News</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10 font-heading">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-purple-200 h-36 w-full"></div>
              <div className="p-6">
                <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded mb-3">
                  {news.date}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 heading">
                  {news.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 ">{news.description}</p>
                <a
                  href={news.link}
                  className="text-purple-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;