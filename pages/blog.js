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


    const pagination = [];

    //  6  == no of links per page

    for (let i = 0; i < blogs.length % 6; i++) {
        pagination.push(
            <li className={(i == initial) ? `page-item active` : `page-item`} onClick={() => setInitial(i * 6)}>
                <a className="page-link" >
                    {i + 1}
                </a>
            </li>
        )
    }



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

                        {/* 
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <Link href="/blog-details">
                                    <img src="/img/blog/blog2.jpg" alt="Image" />
                                </Link>

                                <span>11 May 2020</span>
                                <div className="blog-content">
                                    <ul>
                                        <li>
                                            <a href="#">Treatment</a>
                                        </li>
                                    </ul>

                                    <Link href="/blog-details">
                                        <h3>What Can I Do To Prevent Myself & prevent Disease</h3>
                                    </Link>

                                    <Link href="/blog-details" className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <Link href="/blog-details">
                                    <img src="/img/blog/blog3.jpg" alt="Image" />
                                </Link>
                                <span>13 May 2020</span>
                                <div className="blog-content">
                                    <ul>
                                        <li>
                                            <a href="#">COVID-19</a>
                                        </li>
                                    </ul>

                                    <Link href="/blog-details">
                                        <h3>CCU For Emergency Services & Medical support</h3>
                                    </Link>

                                    <Link href="/blog-details" className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <Link href="/blog-details">
                                    <img src="/img/blog/blog4.jpg" alt="Image" />
                                </Link>

                                <div className="blog-content">
                                    <ul>
                                        <li>
                                            <a href="#">Admin</a>
                                        </li>
                                        <li>Date: 14/05/2020</li>
                                    </ul>

                                    <Link href="/blog-details">
                                        <h3>The blood sample</h3>
                                    </Link>

                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Soluta, iusto. In, impedit ab quidem harum consectetur aut
                                        elit
                                    </p>

                                    <Link href="/blog-details" className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <Link href="/blog-details">
                                    <img src="/img/blog/blog5.jpg" alt="Image" />
                                </Link>

                                <div className="blog-content">
                                    <ul>
                                        <li>
                                            <a href="#">Admin</a>
                                        </li>
                                        <li>Date: 15/05/2020</li>
                                    </ul>

                                    <Link href="/blog-details">
                                        <h3>Stethoscope and notepad</h3>
                                    </Link>

                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Soluta, iusto. In, impedit ab quidem harum consectetur aut
                                        elit
                                    </p>

                                    <Link href="/blog-details" className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <Link href="/blog-details">
                                    <img src="/img/blog/blog6.jpg" alt="Image" />
                                </Link>

                                <div className="blog-content">
                                    <ul>
                                        <li>
                                            <a href="#">Admin</a>
                                        </li>
                                        <li>Date: 16/05/2020</li>
                                    </ul>

                                    <Link href="/blog-details">
                                        <h3>Doctor is scanning</h3>
                                    </Link>

                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Soluta, iusto. In, impedit ab quidem harum consectetur aut
                                        elit
                                    </p>

                                    <Link href="/blog-details" className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <Link href="/blog-details">
                                    <img src="/img/blog/blog7.jpg" alt="Image" />
                                </Link>

                                <div className="blog-content">
                                    <ul>
                                        <li>
                                            <a href="#">Admin</a>
                                        </li>
                                        <li>Date: 17/05/2020</li>
                                    </ul>

                                    <Link href="/blog-details">
                                        <h3>The ENT specialist</h3>
                                    </Link>

                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Soluta, iusto. In, impedit ab quidem harum consectetur aut
                                        elit
                                    </p>

                                    <Link href="/blog-details" className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <Link href="/blog-details">
                                    <img src="/img/blog/blog8.jpg" alt="Image" />
                                </Link>

                                <div className="blog-content">
                                    <ul>
                                        <li>
                                            <a href="#">Admin</a>
                                        </li>
                                        <li>Date: 18/05/2020</li>
                                    </ul>

                                    <Link href="/blog-details">
                                        <h3>Monitoring the pulse</h3>
                                    </Link>

                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Soluta, iusto. In, impedit ab quidem harum consectetur aut
                                        elit
                                    </p>

                                    <Link href="/blog-details" className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <Link href="/blog-details">
                                    <img src="/img/blog/blog9.jpg" alt="Image" />
                                </Link>

                                <div className="blog-content">
                                    <ul>
                                        <li>
                                            <a href="#">Admin</a>
                                        </li>
                                        <li>Date: 19/05/2020</li>
                                    </ul>

                                    <Link href="/blog-details">
                                        <h3>Admission wristband</h3>
                                    </Link>

                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Soluta, iusto. In, impedit ab quidem harum consectetur aut
                                        elit
                                    </p>

                                    <Link href="/blog-details" className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </Link>
                                </div>
                            </div>
                        </div> */}

                        <div className="col-lg-12">
                            <div className="page-navigation-area">
                                <nav aria-label="Page navigation example text-center">
                                    <ul className="pagination">
                                        {(initial >= 6) && (
                                            <li className="page-item" onClick={() => setInitial(initial-6)}>
                                                <a className="page-link page-links" href="#">
                                                    <i className="bx bx-chevrons-left"></i>
                                                </a>
                                            </li>
                                        )}

                                        {[...Array(Math.round(blogs.length / 6) + 1)].map((val, index) => (
                                            <li key={index} className={(index == initial) ? `page-item active` : `page-item`} onClick={() => setInitial(index * 6)}>
                                                <a className="page-link" >
                                                    {index + 1}
                                                </a>
                                            </li>
                                        ))}
                                        {/* todo if blogslength%6 ===  */}
                                        {/* {(initial >= 6) && ()} */}
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                <i className="bx bx-chevrons-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Subscribe />

            <Footer />
        </>
    );
};

export default BlogGrid;
