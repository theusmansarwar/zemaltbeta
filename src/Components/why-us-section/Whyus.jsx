import React from 'react'
import './Whyus.css'
import '../BlogSection/BlogSection.css'
import { TiSpiral } from "react-icons/ti";
const Whyus = () => {
  return (
    <section class="why-us-section">
   <div className="blog-header">
        <div className="header-left">
          <h2>
            Digital Marketing & SEO Services That Grow Traffic & Increase Revenue
          </h2>
        </div>
        <div className="header-right">
          <p>
            We are the top digital marketing agency for branding corp. We offer a
            full range of services to help clients improve their search engine
            rankings and drive more traffic to their websites.
          </p>
          <button className="see-more">See more</button>
        </div>
      </div>

<div className="whyus-area">
    <div className="why-usleft">
       <img src='/left.png'/>
        <div className="outer-area1">
 <div class="card">
      <div class="icon-area"><TiSpiral /></div>
      <div class="card-body">
        <h4>Heading Here</h4>
        <p>An award-winning SEO agency with disciplines in digital marketing, design, and website development. Focused on understanding you.</p>
      </div>
    </div>
    </div>
   <div className="outer-area1">
    <div class="card">
      <div class="icon-area"><TiSpiral /></div>
      <div class="card-body">
        <h4>Heading Here</h4>
        <p>An award-winning SEO agency with disciplines in digital marketing, design, and website development. Focused on understanding you.</p>
      </div>
    </div>
    </div>
    </div>
<div className="why-usright">
  <img src='/right.png'/>
    <div className="outer-area1">
 <div class="card">
      <div class="icon-area"><TiSpiral /></div>
      <div class="card-body">
        <h4>Heading Here</h4>
        <p>An award-winning SEO agency with disciplines in digital marketing, design, and website development. Focused on understanding you.</p>
      </div>
    </div>
    </div>
   <div className="outer-area1">
    <div class="card">
      <div class="icon-area"><TiSpiral /></div>
      <div class="card-body">
        <h4>Heading Here</h4>
        <p>An award-winning SEO agency with disciplines in digital marketing, design, and website development. Focused on understanding you.</p>
      </div>
    </div>
    </div>
    </div>
</div>
   

</section>

  )
}

export default Whyus