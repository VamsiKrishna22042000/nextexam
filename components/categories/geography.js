import React, {useEffect} from 'react';

import Image from 'next/image';

import AOS from 'aos';
// import '../assets/styles/vendor/aos/aos.css';

import landscape7 from '../../public/images/mayurakshi-river.jpg';
import singlepost2 from '../../public/images/admin.jpg';
import singlepost3 from '../../public/images/dalma2.jpg';
import singlepost4 from '../../public/images/industries.jpg';

const GeographyCategory = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className="category-section">
    <div className="container" data-aos="fade-up">

      <div className="section-header d-flex justify-content-between align-items-center mb-5">
        <h2>Geography</h2>
        <div><a href={`/category/geography/`} className="more">See All Geography</a></div>
      </div>

      <div className="row">
        <div className="col-md-9 order-md-2">

          <div className="d-lg-flex post-entry-2">
            <a href="single-post.html" className="me-4 thumbnail d-inline-block mb-4 mb-lg-0">
              <Image src={landscape7} alt="" className="img-fluid" />
            </a>
            <div>
              <div className="post-meta"><span className="date">Geography</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
              <h3><a href={`/blog/rivers-of-jharkhand/`}>Drainage System of Jharkhand</a></h3>
              <p>Jharkhand state is blessed with a myriad of meandering and deep
                cutting young rivers like Damodar.</p>
              <div className="d-flex align-items-center author">
                <div className="photo"><Image src={singlepost2} alt="" className="img-fluid" /></div>
                <div className="name">
                  <h3 className="m-0 p-0">Admin</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="post-entry-1 border-bottom">
                <a href="single-post.html"><Image src={singlepost3} alt="" className="img-fluid" /></a>
                <div className="post-meta"><span className="date">Geography</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><a href="single-post.html">Places of Interest in Jharkhand</a></h2>
                <span className="author mb-3 d-block">Admin</span>
                <p className="mb-4 d-block">Jharkhand is covered with beautiful views, greenery,
                  landscape, with great colors around and is famous for its
                  culture.</p>
              </div>

              <div className="post-entry-1">
                <div className="post-meta"><span className="date">Geography</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><a href={`/blog/climate-of-jharkhand/`}>Climate of Jharkhand</a></h2>
                <span className="author mb-3 d-block">Admin</span>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="post-entry-1">
                <a href={`/blog/major-industries-of-jharkhand/`}><Image src={singlepost4} alt="" className="img-fluid" /></a>
                <div className="post-meta"><span className="date">Geography</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><a href={`/blog/major-industries-of-jharkhand/`}>Major Industries and Industrial Development in Jharkhand</a></h2>
                <span className="author mb-3 d-block">Admin</span>
                <p className="mb-4 d-block">The state of Jharkhand has enormous potentialities for industrialization. With its large deposits of minerals, it provides a solid launching pad for all kinds of industries.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="post-entry-1 border-bottom">
            <div className="post-meta"><span className="date">Geography</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
            <h2 className="mb-2"><a href={`/blog/waterfalls-lakes-hotsprings-of-jharkhand/`}>Waterfalls, Lakes and Hot Springs in Jharkhand</a></h2>
            <span className="author mb-3 d-block">Admin</span>
          </div>

          <div className="post-entry-1 border-bottom">
            <div className="post-meta"><span className="date">Geography</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
            <h2 className="mb-2"><a href={`/blog/mineral-resources-of-jharkhand`}>Mineral resources in Jharkhand</a></h2>
            <span className="author mb-3 d-block">Admin</span>
          </div>

          <div className="post-entry-1 border-bottom">
            <div className="post-meta"><span className="date">Geography</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
            <h2 className="mb-2"><a href={`/blog/national-parks-of-jharkhand/`}>National Parks and Wildlife Sanctuaries of Jharkhand</a></h2>
            <span className="author mb-3 d-block">Admin</span>
          </div>

          <div className="post-entry-1 border-bottom">
            <div className="post-meta"><span className="date">Geography</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
            <h2 className="mb-2"><a href={`/blog/disaster-management-in-jharkhand/`}>Disaster Management in Jharkhand</a></h2>
            <span className="author mb-3 d-block">Admin</span>
          </div>

          <div className="post-entry-1 border-bottom">
            <div className="post-meta"><span className="date">Geography</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
            <h2 className="mb-2"><a href={`/blog/hills-in-jharkhand`}>Hills in Jharkhand</a></h2>
            <span className="author mb-3 d-block">Admin</span>
          </div>

          <div className="post-entry-1 border-bottom">
            <div className="post-meta"><span className="date">Geography</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
            <h2 className="mb-2"><a href={`/blog/soil-of-jharkhand`}>Soil Types in Jharkhand</a></h2>
            <span className="author mb-3 d-block">Admin</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default GeographyCategory;