import React, {useMemo} from "react";
import Link from "next/link";

import { blogsInfo } from "../../components/information/data"

const BlogSidebar = (props) => {

  const blog = useMemo(() => blogsInfo)
  return (
    <>
      <div className="widget-area" id="secondary">
        {/* <div className="widget widget_search">
          <h3 className="widget-title">Search Now</h3>
          <div className="post-wrap">
            <form className="search-form">
              <label>
                <span className="screen-reader-text">Search for:</span>
                <input
                  type="search"
                  className="search-field"
                  placeholder="Search..."
                />
              </label>
              <button type="submit">
                <i className="bx bx-search"></i>
              </button>
            </form>
          </div>
        </div> */}

        <div className="widget widget-peru-posts-thumb">
          <h3 className="widget-title">Popular Posts</h3>
          <div className="post-wrap">


          {blog.slice(1,4).map(blog => (

            <div className="item">
              <Link href={`/blog/${blog.id}`} className="thumb">
                {/* <span className="fullimage cover bg1" role="img"></span> */}
                 <img src={blog.mainImg} className="fullimage cover" ></img>
              </Link>
              <div className="info">
                <span className="time">{blog.postedOn}</span>
                <h4 className="title usmall">
                  <Link href={`/blog/${blog.id}`}>
                    {blog.title}
                  </Link>
                </h4>
              </div>
              <div className="clear"></div>
            </div>
))}
            {/* <div className="item">
              <Link href="/blog-details" className="thumb">
                <span className="fullimage cover bg2" role="img"></span>
              </Link>
              <div className="info">
                <span className="time">April 21, 2020</span>
                <h4 className="title usmall">
                  <Link href="/blog-details">
                    What Can I Do To Prevent Myself & prevent Disease
                  </Link>
                </h4>
              </div>
              <div className="clear"></div>
            </div>

            <div className="item">
              <Link href="/blog-details" className="thumb">
                <span className="fullimage cover bg3" role="img"></span>
              </Link>
              <div className="info">
                <span className="time">April 22, 2020</span>
                <h4 className="title usmall">
                  <Link href="/blog-details" className="thumb">
                    Blackpool Polices Hunt For David Schwinger
                  </Link>
                </h4>
              </div>
              <div className="clear"></div>
            </div>

            <div className="item">
              <Link href="/blog-details" className="thumb">
                <span className="fullimage cover bg4" role="img"></span>
              </Link>
              <div className="info">
                <span className="time">April 23, 2020</span>
                <h4 className="title usmall">
                  <Link href="/blog-details">
                    CCU For Emergency Services & Medical support
                  </Link>
                </h4>
              </div>
              <div className="clear"></div>
            </div> */}
          </div>
        </div>

        {/* <div className="widget widget_categories">
          <h3 className="widget-title">Archives</h3>
          <div className="post-wrap">
            <ul>
              <li>
                <a href="#">
                  January <span>2020</span>
                </a>
              </li>
              <li>
                <a href="#">
                  February <span>2020</span>
                </a>
              </li>
              <li>
                <a href="#">
                  March <span>2020</span>
                </a>
              </li>
              <li>
                <a href="#">
                  April <span>2020</span>
                </a>
              </li>
              <li>
                <a href="#">
                  May <span>2020</span>
                </a>
              </li>
              <li>
                <a href="#">
                  June <span>2020</span>
                </a>
              </li>
            </ul>
          </div>
        </div> */}

        {/* <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>
          <div className="post-wrap">
            <ul>
              <li>
                <Link href="/blog-grid">
                  Antibiotic <span>(10)</span>
                </Link>
              </li>
              <li>
                <Link href="/blog-grid">
                  Diseases <span>(20)</span>
                </Link>
              </li>
              <li>
                <Link href="/blog-grid">
                  Health Care <span>(10)</span>
                </Link>
              </li>
              <li>
                <Link href="/blog-grid">
                  Heart Rate <span>(12)</span>
                </Link>
              </li>
              <li>
                <Link href="/blog-grid">
                  Hospital <span>(16)</span>
                </Link>
              </li>
              <li>
                <Link href="/blog-grid">
                  Infectious <span>(17)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div> */}

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>
          <div className="post-wrap">
            <div className="tagcloud">
            {props.tags && (
            props.tags.map(tag => (<Link href='/'>{tag}</Link>))
            )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
