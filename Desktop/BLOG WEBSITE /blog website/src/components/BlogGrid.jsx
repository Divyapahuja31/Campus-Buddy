import React from 'react';
import BlogCard from './BlogCard';

const dummyBlogs = [
  {
    title: 'Mastering React in 30 Days',
    excerpt: 'A step-by-step guide to becoming a React expert from scratch.',
    image: 'https://media.licdn.com/dms/image/v2/D4D12AQH4_slzWZgtOg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1665586047227?e=2147483647&v=beta&t=EYthV_LwHSV3UOwQ23DrstYKTwiD8O7Hu0ugA7j9Cco',
    author: 'Divya Pahuja',
    date: 'April 30, 2025',
  },
  {
    title: 'CSS Tips & Tricks',
    excerpt: 'Learn how to make your website stand out with modern CSS.',
    image: 'https://www.webfx.com/wp-content/uploads/2021/10/unnamed-file.CSS-1.jpg',
    author: 'John Doe',
    date: 'April 25, 2025',
  },
  {
    title: 'Why JavaScript is Everywhere',
    excerpt: 'Explore how JavaScript powers the web, mobile, and beyond.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDb4YLtgaMs8qOY2nOZaK3S_PsbOXgSSDg7Q&s',
    author: 'Jane Smith',
    date: 'April 20, 2025',
  },
];

const BlogGrid = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">Latest Blog Posts</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {dummyBlogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
