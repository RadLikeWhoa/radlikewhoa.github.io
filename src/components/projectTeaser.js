import React from 'react'
import PropTypes from 'prop-types'

import IconWell from './iconWell'

const ProjectTeaser = ({ project, onClickFilter }) => {
  const start = +project.frontmatter.date.split('.').splice(-1).pop()

  return (
    <article className="post-inline project-inline">
      <div data-grid>
        <div data-col="M1-3">
          <IconWell
            title={project.frontmatter.title}
            path={project.frontmatter.path}
            pattern={project.frontmatter.pattern}
            background={project.frontmatter.background}
            icon={project.frontmatter.icon.publicURL} />
        </div>
        <div data-col="M2-3">
          <h3 className="project-title">
            <a href={project.frontmatter.path}>{project.frontmatter.title}</a>
          </h3>
          <div className="project-intro">
            <p>
              <span className="faded">
                {!project.frontmatter.end && 'since '}
                {start}
                {project.frontmatter.end && project.frontmatter.end !== start && ` – ${project.frontmatter.end}`}
                {' '}—{' '}
              </span>
              {project.frontmatter.teaser}
            </p>
          </div>
          <ul data-tags>
            {project.frontmatter.tags.map(tag => (
              <li
                className="tag"
                key={tag}
                onClick={onClickFilter(tag)}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

ProjectTeaser.propTypes = {
  project: PropTypes.object.isRequired,
  onClickFilter: PropTypes.func.isRequired
}

export default ProjectTeaser
