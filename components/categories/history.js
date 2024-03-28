import React, {useEffect} from 'react';

import Image from 'next/image';

import AOS from 'aos';
// import '../../styles/vendor/aos/aos.css';

import singlepost1 from '../../public/images/prehistoric-jharkhand-900x571.jpg';
import singlepost2 from '../../public/images/modern-history.jpg';
import singlepost3 from '../../public/images/medieval-history.jpg';
import singlepost4 from '../../public/images/admin.jpg';

const HistoryCategory = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className="category-section">
    <div className="container" data-aos="fade-up">

      <div className="section-header d-flex justify-content-between align-items-center mb-5">
        <h2>History</h2>
        <div><a href={`/category/history/`} className="more">See All History</a></div>
      </div>

      <div className="row">
        <div className="col-md-9">

          <div className="d-lg-flex post-entry-2">
            <a href="single-post.html" className="me-4 thumbnail mb-4 mb-lg-0 d-inline-block">
              <Image src={singlepost2} alt="" className="img-fluid" />
            </a>
            <div>
              <div className="post-meta"><span className="date">History</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
              <h3><a href="single-post.html">Modern History of Jharkhand</a></h3>
              <p>In 1765, the region came under the control of the British East India Company when Chitrajeet Rai's nephew, Gopal Rai, betrayed him and facilitated the Patna council of the East India Company to attack the fort.</p>
              <div className="d-flex align-items-center author">
                <div className="photo"><Image src={singlepost4} alt="" className="img-fluid" /></div>
                <div className="name">
                  <h3 className="m-0 p-0">Admin</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="post-entry-1 border-bottom">
                <a href={`/blog/medieval-history-of-jharkhand`}><Image src={singlepost3} alt="" className="img-fluid" /></a>
                <div className="post-meta"><span className="date">History</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><a href={`/blog/medieval-history-of-jharkhand`}>Medieval History of Jharkhand</a></h2>
                <span className="author mb-3 d-block">Admin</span>
                <p className="mb-4 d-block">In the medieval period the first ruler, who interfered in Jharkhand, was Sher Shah. He sent his military chief Khawas Khan against Maharath Chero.</p>
              </div>

              <div className="post-entry-1">
                <div className="post-meta"><span className="date">History</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><a href={`/blog/prominent-dynasties-of-jharkhand`}>Prominent Dynasties of Jharkhand</a></h2>
                <span className="author mb-3 d-block">Admin</span>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="post-entry-1">
                <a href="single-post.html"><Image src={singlepost1} alt="" className="img-fluid" /></a>
                <div className="post-meta"><span className="date">History</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><a href={`/blog/ancient-history-of-jharkhand`}>Ancient History of Jharkhand</a></h2>
                <span className="author mb-3 d-block">Admin</span>
                <p className="mb-4 d-block">Jharkhand was covered with dense forest in pre-history period. But it was not isolated from the outside world.  It seems that the Kaimur and the Vindhya Mountains saved it from foreign invasions.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="post-entry-1 border-bottom">
            <div className="post-meta"><span className="date">History</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
            <h2 className="mb-2"><a href={`/blog/jharkhand-movement/`}>Jharkhand Movement and Formation of Jharkhand State</a></h2>
            <span className="author mb-3 d-block">Admin</span>
          </div>

          <div className="post-entry-1 border-bottom">
            <div className="post-meta"><span className="date">History</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
            <h2 className="mb-2"><a href={`/blog/tribal-revolts-jharkhand/`}>History of Tribal Revolts in Jharkhand</a></h2>
            <span className="author mb-3 d-block">Admin</span>
          </div>

          <div className="post-entry-1 border-bottom">
            <div className="post-meta"><span className="date">History</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
            <h2 className="mb-2"><a href={`/blog/revolutionaries-of-jharkhand/`}>Freedom Fighters of Jharkhand</a></h2>
            <span className="author mb-3 d-block">Admin</span>
          </div>

          <div className="post-entry-1 border-bottom">
            <div className="post-meta"><span className="date">History</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
            <h2 className="mb-2"><a href={`/blog/eminent-personalities-of-jharkhand/`}>Eminent Personalities of Jharkhand</a></h2>
            <span className="author mb-3 d-block">Admin</span>
          </div>

          <div className="post-entry-1 border-bottom">
            <div className="post-meta"><span className="date">History</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
            <h2 className="mb-2"><a href={`/blog/administrative-systems-of-jharkhand/`}>Administrative Systems of Jharkhand</a></h2>
            <span className="author mb-3 d-block">Admin</span>
          </div>

          <div className="post-entry-1 border-bottom">
            <div className="post-meta"><span className="date">History</span> <span className="mx-1">&#x2022;</span> <span>Jul 5th '22</span></div>
            <h2 className="mb-2"><a href="single-post.html">Tribals of Jharkhand</a></h2>
            <span className="author mb-3 d-block">Admin</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default HistoryCategory;

