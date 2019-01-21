import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import profile from '../images/profile.jpg'

const About = () => (
  <Layout>
    <SEO title="About" />
		<section className="content-section wrap">
	    <div className="about-header">
	      <div className="avatar-container">
	        <img
            src={profile}
            className="avatar"
            alt="Sacha Schmid" />
	      </div>
	      <p>My name is Sacha Schmid. I'm a front-end developer from Switzerland, interested in both interface design and web development. I work at <a href="https://medienmacher.com">Die Medienmacher</a> in Muttenz, Switzerland.</p>
	    </div>
	    <ul
        className="social-list clear"
        data-grid>
	      <li
          className="social-item"
          data-col="1-2">
	        <a
            href="https://github.com/RadLikeWhoa"
            data-button="center"
            title="GitHub">
	          <span className="label">
              <span data-icon="github"></span>
            </span>
	        </a>
	      </li>
	      <li
          className="social-item"
          data-col="1-2">
	        <a
            href="https://instagram.com/__marvolo"
            data-button="center"
            title="Instagram">
	          <span className="label">
              <span data-icon="instagram"></span>
            </span>
	        </a>
	      </li>
	    </ul>
	    <p>In 2017, I graduated from <a href="https://fhnw.ch/en/">University of Applied Sciences and Arts Northwestern Switzerland</a> in Brugg, Switzerland, majoring in Computer Science.</p>
      <div className="about-meta">
        <div className="small faded">2017</div>
        <div className="full small">
          Bachelor of Science FHNW in Computer Sciences with a specialisation in Design and Management<br />
          <span className="faded">Brugg-Windisch, Switzerland</span>
        </div>
      </div>
      <div className="about-meta">
        <div className="small faded">2013</div>
        <div className="full small">
          Federal Diploma of Vocational Education and Training<br />
          <span className="faded">Basel, Switzerland</span>
        </div>
      </div>
	    <p>I have gathered experience in various aspects of front-end development and project management while working with companies and private clients alike, as well as a multitude of projects at university. You can see some of that work on my <Link to="/projects">Projects</Link> page.</p>
      <div className="about-meta">
        <div className="small faded">Familiar Topics</div>
        <div className="full small">UI Design, UX Design, Web Development, Native Development, Interaction Design, Project Management, Software Architecture</div>
      </div>
	    <p>I keep up to date with the latest trends and the rapid evolution of languages and tools as much as possible, trying out new technologies on projects all the time. This interest in the industry allows me to create websites and applications that not only build on foundational principles of design, but also use cutting-edge technology.</p>
      <div className="about-meta">
        <div className="small faded">Languages</div>
        <div className="full small">HTML, CSS, JavaScript, .NET C#, Haskell, Swift, Java, PHP</div>
      </div>
      <div className="about-meta">
        <div className="small faded">Tools & Frameworks</div>
        <div className="full small">React, Redux, Angular, Ionic, Sass, Wordpress, Neos CMS</div>
      </div>
	    <p>Other than the web, I am very passionate about music, both listening to my favourite records and creating music with my guitars. Whenever I can, I like to go to concerts and festivals and just enjoy the music and the people around me.</p>
	  </section>
	  <section className="content-section wrap">
	    <h2 className="section-heading">About This Site</h2>
	    <p>This website was created with <a href="http://gatsbyjs.org">GatsbyJS</a>. <a href="https://www.entypo.com">Entypo Icons</a> are used throughout the site with iconfonts created through <a href="https://icomoon.io">icomoon</a>. The site is hosted on <a href="https://pages.github.com">GitHub Pages</a>. You can also view the site's source <a href="https://github.com/RadLikeWhoa/radlikewhoa.github.io">on GitHub</a>.</p>
	    <p>All content, unless otherwise noted, was created by Sacha Schmid. Copyright © 2013 – {new Date().getFullYear()}.</p>
		</section>
  </Layout>
)

export default About
