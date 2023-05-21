import React, {useState} from "react";
import Link from "next/link";
import { blogsInfo } from '../information/data';

const NewsStyleOne = ({blogNum = 3}) => {
  const [blogs, setBlogs] = useState(blogsInfo);

  return (
    <>
      <div className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Blog</span>
            <h2>Our Latest Blogs</h2>
            <p>
              Esthetix dental center provides you best dental care in dubai with advance technology and certified procedure. Keep updated with our latest news and announcement...
            </p>
          </div>

          <div className="row justify-content-center">
            {blogs && (

                            blogs.slice(0, blogNum).map(blog => (

                                <div className="col-lg-4 col-md-6">
                                    <div className="single-blog">
                                        <Link href={`/blog/${blog.id}`} style={{ minHeight: '237px' }}>
                                            <img src={blog.mainImg} alt="Image" />
                                        </Link>

                                        <span>{blog.tags[0]}</span>
                                        <div className="blog-content">
                                            <ul>
                                                <li>
                                                    <a href="#">{blog.postedBy}</a>
                                                </li>
                                                <li>Date: {blog.postedOn}</li>
                                            </ul>

                                            <Link href={`/blog/${blog.id}`}>
                                                <h3>{blog.title}</h3>
                                            </Link>

                                            <Link href={`/blog/${blog.id}`} className="read-more">
                                                Read More <i className="bx bx-plus"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsStyleOne;
