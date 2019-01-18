import PropTypes from 'prop-types'
import React from 'react'

const Footer = ({ siteTitle }) => (
  <footer class="site-footer">
    <div class="wrap">
      <div data-grid>
        <div data-col="1-3">
          <a href="/feed.xml" data-button="block dark" title="RSS feed for all articles on this site">
            <span data-icon="rss"></span><span class="label opt-label">RSS</span>
          </a>
        </div>
        <div data-col="1-3">
          <a href="#" id="topLink" data-button="dark center">
            <span class="label">Back to top</span>
          </a>
        </div>
        <div data-col="1-3">
          <a href="https://github.com/RadLikeWhoa/radlikewhoa.github.io" data-button="block dark" title="GitHub repository for this site">
            <span data-icon="github"></span><span class="label opt-label">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string
}

Footer.defaultProps = {
  siteTitle: ``
}

export default Footer
