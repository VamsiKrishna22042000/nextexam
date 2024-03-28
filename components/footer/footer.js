import React, { useEffect } from "react";

import Image from "next/image";

import AOS from "aos";

import post1 from "../../public/images/dalma.jpg";
import post2 from "../../public/images/birsa-munda-900x571.jpg";
import post3 from "../../public/images/tribal-rebellion1.jpg";
import post4 from "../../public/images/mayurakshi-river.jpg";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <footer id="footer" className="footer" data-aos="fade-up">
        <div className="footer-content">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-4">
                <h3 className="footer-heading">About Study4JPSC</h3>
                <p>
                  Your one-stop solution for preparation of JPSC Prelims and
                  Mains
                </p>
                <p>
                  <a href="about.html" className="footer-link-more">
                    Learn More
                  </a>
                </p>
              </div>
              <div className="col-6 col-lg-2">
                <h3 className="footer-heading">Navigation</h3>
                <ul className="footer-links list-unstyled">
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right"></i> Home
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right"></i> Syllabus
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right"></i> Current Affairs
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right"></i> Prelims
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right"></i> Mains
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right"></i> About Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-lg-2">
                <h3 className="footer-heading">Categories</h3>
                <ul className="footer-links list-unstyled">
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right"></i> History
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right"></i> Geography
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right"></i> Culture
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right"></i> Economics
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right"></i> Polity
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right"></i> Science &
                      Technology
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4">
                <h3 className="footer-heading">Recent Posts</h3>

                <ul className="footer-links footer-blog-entry list-unstyled">
                  <li>
                    <a
                      href={`/blog/places-of-interest-in-jharkhand/`}
                      className="d-flex align-items-center"
                    >
                      <Image src={post1} alt="" className="img-fluid me-3" />
                      <div>
                        <div className="post-meta d-block">
                          <span className="date">Geography</span>{" "}
                          <span className="mx-1">&#x2022;</span>{" "}
                          <span>Jul 5th '22</span>
                        </div>
                        <span>Places of Interest in Jharkhand</span>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href={`/blog/freedom-fighters-of-jharkhand/`}
                      className="d-flex align-items-center"
                    >
                      <Image src={post2} alt="" className="img-fluid me-3" />
                      <div>
                        <div className="post-meta d-block">
                          <span className="date">History</span>{" "}
                          <span className="mx-1">&#x2022;</span>{" "}
                          <span>Jul 5th '22</span>
                        </div>
                        <span>Freedom Fighters of Jharkhand</span>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href={`/blog/tribal-revolts-jharkhand/`}
                      className="d-flex align-items-center"
                    >
                      <Image src={post3} alt="" className="img-fluid me-3" />
                      <div>
                        <div className="post-meta d-block">
                          <span className="date">History</span>{" "}
                          <span className="mx-1">&#x2022;</span>{" "}
                          <span>Jul 5th '22</span>
                        </div>
                        <span>History of Tribal Revolts in Jharkhand</span>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href={`/blog/rivers-of-jharkhand/`}
                      className="d-flex align-items-center"
                    >
                      <Image src={post4} alt="" className="img-fluid me-3" />
                      <div>
                        <div className="post-meta d-block">
                          <span className="date">Geography</span>{" "}
                          <span className="mx-1">&#x2022;</span>{" "}
                          <span>Jul 5th '22</span>
                        </div>
                        <span>Drainage System of Jharkhand</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-legal">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <div className="copyright">
                  © Copyright{" "}
                  <strong>
                    <span>Study4JPSC</span>
                  </strong>
                  . All Rights Reserved
                </div>
              </div>

              <div className="col-md-6">
                <div className="social-links mb-3 mb-lg-0 text-center text-md-end">
                  <a href="#" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
