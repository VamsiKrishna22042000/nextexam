import React, { useEffect } from "react";

import Image from "next/image";

import AOS from "aos";
// import '../styles/vendor/aos/aos.css';

import landscape1 from "../public/images/birsa-munda-900x571.jpg";
import landscape2 from "../public/images/Betla-900x571.jpg";
import landscape3 from "../public/images/Dassam_falls-900x571.jpg";
import landscape5 from "../public/images/tribal-dance-900x571.jpg";
import landscape6 from "../public/images/india-tribals-900x571.jpg";
import landscape7 from "../public/images/mayurakshi-river.jpg";
import landscape8 from "../public/images/jaipal-singh-munda.jpg";
import person1 from "../public/images/admin.jpg";

import TrendingPosts from "./trendingPosts";

const HighlightedPosts = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section id="posts" className="posts">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="post-entry-1 lg">
                <a href={`/posts/freedom-fighters-of-jharkhand/`}>
                  <Image src={landscape1} alt="" className="img-fluid" />
                </a>
                <div className="post-meta">
                  <span className="date">History</span>{" "}
                  <span className="mx-1">&#x2022;</span>{" "}
                  <span>Jul 5th '22</span>
                </div>
                <h2>
                  <a href={`/posts/freedom-fighters-of-jharkhand/`}>
                    Freedom Fighters of Jharkhand
                  </a>
                </h2>
                <p className="mb-4 d-block">
                  Jharkhand played a significant role in the Indian freedom
                  movement. It was home to a myriad of revolts against the
                  British rule. The concept of self-rule can be traced way back
                  to Jharkhand tribal movement before enunciating by Bal Ganga
                  Dhar Tilak and Mahatma Gandhi.
                </p>

                <div className="d-flex align-items-center author">
                  <div className="photo">
                    <Image src={person1} alt="" className="img-fluid" />
                  </div>
                  <div className="name">
                    <h3 className="m-0 p-0">Admin</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="row g-5">
                <div className="col-lg-4 border-start custom-border">
                  <div className="post-entry-1">
                    <a href={`/posts/national-parks-of-jharkhand/`}>
                      <Image src={landscape2} alt="" className="img-fluid" />
                    </a>
                    <div className="post-meta">
                      <span className="date">Geography</span>{" "}
                      <span className="mx-1">&#x2022;</span>{" "}
                      <span>Jul 5th '22</span>
                    </div>
                    <h2>
                      <a href={`/posts/national-parks-of-jharkhand/`}>
                        National Parks and Wildlife Sanctuaries of Jharkhand
                      </a>
                    </h2>
                  </div>
                  <div className="post-entry-1">
                    <a
                      href={`/posts/waterfalls-lakes-hotsprings-of-jharkhand/`}
                    >
                      <Image src={landscape3} alt="" className="img-fluid" />
                    </a>
                    <div className="post-meta">
                      <span className="date">Geography</span>{" "}
                      <span className="mx-1">&#x2022;</span>{" "}
                      <span>Jul 17th '22</span>
                    </div>
                    <h2>
                      <a
                        href={`/posts/waterfalls-lakes-hotsprings-of-jharkhand/`}
                      >
                        Waterfalls of Jharkhand
                      </a>
                    </h2>
                  </div>
                  <div className="post-entry-1">
                    <a href={`/posts/folk-dances-of-jharkhand/`}>
                      <Image src={landscape5} alt="" className="img-fluid" />
                    </a>
                    <div className="post-meta">
                      <span className="date">Culture</span>{" "}
                      <span className="mx-1">&#x2022;</span>{" "}
                      <span>Mar 15th '22</span>
                    </div>
                    <h2>
                      <a href={`/posts/folk-dances-of-jharkhand/`}>
                        Folk Dances of Jharkhand
                      </a>
                    </h2>
                  </div>
                </div>
                <div className="col-lg-4 border-start custom-border">
                  <div className="post-entry-1">
                    <a href={`/posts/tribals-of-jharkhand/`}>
                      <Image src={landscape6} alt="" className="img-fluid" />
                    </a>
                    <div className="post-meta">
                      <span className="date">Culture</span>{" "}
                      <span className="mx-1">&#x2022;</span>{" "}
                      <span>Jul 5th '22</span>
                    </div>
                    <h2>
                      <a href={`/posts/tribals-of-jharkhand/`}>
                        Tribes of Jharkhand
                      </a>
                    </h2>
                  </div>
                  <div className="post-entry-1">
                    <a href={`/posts/rivers-of-jharkhand/`}>
                      <Image src={landscape7} alt="" className="img-fluid" />
                    </a>
                    <div className="post-meta">
                      <span className="date">Geography</span>{" "}
                      <span className="mx-1">&#x2022;</span>{" "}
                      <span>Mar 1st '22</span>
                    </div>
                    <h2>
                      <a href={`/posts/rivers-of-jharkhand/`}>
                        Drainage System of Jharkhand
                      </a>
                    </h2>
                  </div>
                  <div className="post-entry-1">
                    <a href={`/posts/jharkhand-movement/`}>
                      <Image src={landscape8} alt="" className="img-fluid" />
                    </a>
                    <div className="post-meta">
                      <span className="date">History</span>{" "}
                      <span className="mx-1">&#x2022;</span>{" "}
                      <span>Jul 5th '22</span>
                    </div>
                    <h2>
                      <a href={`/posts/jharkhand-movement/`}>
                        Formation of Jharkhand State
                      </a>
                    </h2>
                  </div>
                </div>

                <TrendingPosts />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HighlightedPosts;
