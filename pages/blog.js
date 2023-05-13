import React, { useState } from "react";
import Navbar from "../components/_App/NavbarFour"
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import { blogsInfo } from '../components/information/data';

const BlogGrid = () => {

    const [blogs, setBlogs] = useState(blogsInfo);

    const [initial, setInitial] = useState(0)

    return (
        <>
            <Navbar />
            <PageBanner
                pageTitle="Blog Grid"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Blog Grid"
                imgClass="bg-2"
            />
            <div className="blog-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="top-title">News</span>
                        <h2>Our Latest News</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                            ipsum suspendisse ultrices gravida. Risus
                        </p>
                    </div>
                    <div className="row">
                        {blogs && (

                            blogs.slice(initial, initial + 6).map(blog => (

                                <div className="col-lg-4 col-md-6">
                                    <div className="single-blog">
                                        <Link href={`/blog/${blog.id}`}>
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

                                            <Link href="/blog-details">
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
                        <div className="col-lg-12">
                            <div className="page-navigation-area">
                                <nav aria-label="Page navigation example text-center">
                                    <ul className="pagination">
                                        <li className="page-item"
                                            onClick={(e) =>
                                                initial != 0 ? setInitial(initial - 6) : e.preventDefault()
                                            }>
                                            <a className="page-link page-links" >
                                                <i className="bx bx-chevrons-left"></i>
                                            </a>
                                        </li>
                                        {[...Array(Math.round(blogs.length / 6) + 1)].map((val, index) => (

                                            <li key={index} className={(index == initial) ? `page-item active` : `page-item`} onClick={() => setInitial(index * 6)}>
                                                <a className="page-link" >
                                                    {index + 1}
                                                </a>
                                            </li>
                                        ))}
                                        {/* todo if blogslength%6 ===  */}
                                        {/* {(initial >= 6) && ()} */}
                                        <li className="page-item" >
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
