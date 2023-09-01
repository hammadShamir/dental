import React, { useState } from "react";
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import { blogsInfo } from '../components/information/data';

const BlogGrid = () => {

    const [blogs, setBlogs] = useState(blogsInfo);

    const [initial, setInitial] = useState(0);
    const [cut, setCut] = useState(6);

    return (
        <>
            <Navbar />
            <PageBanner
                pageTitle="Our Blogs"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Blog"
                imgClass="bg-blog"
            />
            <div className="blog-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="top-title">Blogs</span>
                        <h2>Our Latest Blogs</h2>
                        <p>
                            Esthetix dental center provides you best dental care in dubai with advance technology and certified procedure. Keep updated with our latest news and announcement...
                        </p>
                    </div>
                    <div className="row">
                        {blogs && (

                            blogs.slice(initial, initial + cut).map((blog, index) => (

                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="single-blog">
                                        <Link href={`/blog/${blog.title.replace(/\s/g, '')}`} style={{ minHeight: '237px' }}>
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

                                            <Link href={`/blog/${blog.title.replace(/\s/g, '')}`}>
                                                <h3>{blog.title}</h3>
                                            </Link>

                                            <Link href={`/blog/${blog.title.replace(/\s/g, '')}`} className="read-more">
                                                Read More <i className="bx bx-plus"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                        <div className="col-lg-12">
                            <div className="page-navigation-area">
                                <nav aria-label="Page navigation example text-center">
                                    <ul className="pagination">
                                        <li className="page-item"
                                            onClick={(e) =>
                                                initial != 0 ? setInitial(initial - cut) : e.preventDefault()
                                            }>
                                            <a className="page-link page-links" >
                                                <i className="bx bx-chevrons-left"></i>
                                            </a>
                                        </li>

                                        {[...Array(Math.ceil(blogs.length / cut))].map((val, index) => (
                                            <li key={index} className={(index * cut == initial) ? `page-item active` : `page-item`} onClick={() => setInitial(index * cut)}>
                                                <a className="page-link" >
                                                    {index + 1}
                                                </a>
                                            </li>
                                        ))}


                                        <li className="page-item"
                                            onClick={
                                                (e) => ((blogs.length - initial) > cut ? setInitial(initial + cut) : e.preventDefault())
                                            } >
                                            <a className="page-link">
                                                <i className="bx bx-chevrons-right"></i>
                                            </a>
                                        </li>

                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <Subscribe />

            <Footer />
        </>
    );
};

export default BlogGrid;
