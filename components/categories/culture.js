import React, {useEffect} from 'react';

import Image from 'next/image';

import AOS from 'aos';
// import '../assets/styles/vendor/aos/aos.css';

import singlepost1 from '../../public/images/shravani-mela.jpg';
import singlepost2 from '../../public/images/admin.jpg';
import singlepost3 from '../../public/images/administrative-systems.jpg';
import singlepost4 from '../../public/images/tribal-dance.jpg';
import singlepost5 from '../../public/images/art-form.jpg';
import singlepost6 from '../../public/images/folk-music.jpg';
import singlepost7 from '../../public/images/sarhul.jpg';
import singlepost8 from '../../public/images/jharkhand-literature.jpg';

const CultureCategory = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className="category-section">
    <div className="container" data-aos="fade-up">

      <div className="section-header d-flex justify-content-between align-items-center mb-5">
        <h2>Culture</h2>
        <div><a href={`/category/culture/`} className="more">See All Culture</a></div>
      </div>

      <div className="row g-5">
        <div className="col-lg-4">
          <div className="post-entry-1 lg">
            <a href={`/blog/festivals-of-jharkhand`}><Image src={singlepost7} alt="" className="img-fluid" /></a>
            <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
            <h2><a href={`/blog/festivals-of-jharkhand`}>Festivals of Jharkhand</a></h2>
            <p className="mb-4 d-block">A number of festivals and fairs are held in Jharkhand along with the regular festivals like Holi, Dussehra, Diwali and Eid which are common in all parts of India. Festivals are an occasion to pray, meet and greet, socialize and strengthen bonds in society.</p>

            <div className="d-flex align-items-center author">
              <div className="photo"><Image src={singlepost2} alt="" className="img-fluid" /></div>
              <div className="name">
                <h3 className="m-0 p-0">Admin</h3>
              </div>
            </div>
          </div>

          <div className="post-entry-1 border-bottom">
            <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
            <h2 className="mb-2"><a href={`/blog/tribals-of-jharkhand`}>Tribals of Jharkhand</a></h2>
            <span className="author mb-3 d-block">Admin</span>
          </div>

          <div className="post-entry-1">
            <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
            <h2 className="mb-2"><a href={`/blog/sadan-of-jharkhand`}>Sadan of Jharkhand</a></h2>
            <span className="author mb-3 d-block">Admin</span>
          </div>

        </div>

        <div className="col-lg-8">
          <div className="row g-5">
            <div className="col-lg-4 border-start custom-border">
              <div className="post-entry-1">
                <a href={`/blog/administrative-systems-of-jharkhand`}><Image src={singlepost3} alt="" className="img-fluid" /></a>
                <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
                <h2><a href={`/blog/administrative-systems-of-jharkhand`}>Administrative Systems of Jharkhand</a></h2>
              </div>
              <div className="post-entry-1">
                <a href={`/blog/folk-dances-of-jharkhand`}><Image src={singlepost4} alt="" className="img-fluid" /></a>
                <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&#x2022;</span> <span>Jul 17th '22</span></div>
                <h2><a href={`/blog/folk-dances-of-jharkhand`}>Folk dances of Jharkhand</a></h2>
              </div>
              <div className="post-entry-1">
                <a href={`/blog/art-forms-of-jharkhand`}><Image src={singlepost5} alt="" className="img-fluid" /></a>
                <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&#x2022;</span> <span>Mar 15th '22</span></div>
                <h2><a href={`/blog/art-forms-of-jharkhand`}>Art forms of Jharkhand</a></h2>
              </div>
            </div>
            <div className="col-lg-4 border-start custom-border">
              <div className="post-entry-1">
                <a href="single-post.html"><Image src={singlepost6} alt="" className="img-fluid" /></a>
                <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
                <h2><a href="single-post.html">Musical Instruments of Jharkhand</a></h2>
              </div>
              <div className="post-entry-1">
                <a href={`/blog/fairs-of-jharkhand`}><Image src={singlepost1} alt="" className="img-fluid" /></a>
                <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&#x2022;</span> <span>Mar 1st '22</span></div>
                <h2><a href={`/blog/fairs-of-jharkhand`}>Fairs of Jharkhand</a></h2>
              </div>
              <div className="post-entry-1">
                <a href={`/blog/literature-and-litterateurs-of-jharkhand`}><Image src={singlepost8} alt="" className="img-fluid" /></a>
                <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
                <h2><a href={`/blog/literature-and-litterateurs-of-jharkhand`}>Literature and Litterateurs of Jharkhand</a></h2>
              </div>
            </div>
            <div className="col-lg-4">

              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><a href="single-post.html">Paintings of Jharkhand</a></h2>
                <span className="author mb-3 d-block">Admin</span>
              </div>

              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><a href={`/blog/santhals/`}>Religion and Social structure of Santhals</a></h2>
                <span className="author mb-3 d-block">Admin</span>
              </div>

              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><a href={`/blog/mundas/`}>Religion and Social structure of Mundas</a></h2>
                <span className="author mb-3 d-block">Admin</span>
              </div>

              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><a href={`/blog/oraons/`}>Religion and Social structure of Oraons</a></h2>
                <span className="author mb-3 d-block">Admin</span>
              </div>

              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><a href={`/blog/hos/`}>Religion and Social structure of Hos</a></h2>
                <span className="author mb-3 d-block">Admin</span>
              </div>

              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><a href={`/blog/traditional-jewellery-of-jharkhand/`}>Traditional Jewellery of Jharkhand</a></h2>
                <span className="author mb-3 d-block">Admin</span>
              </div>

            </div>
          </div>
        </div>

      </div> 
    </div>
  </section>
  );
};

export default CultureCategory;