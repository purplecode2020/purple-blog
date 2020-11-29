import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'

import './index.scss'

export const ThumbnailItem = ({ node }) => (
  <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
    <div key={node.fields.slug}>
      <Title>{node.frontmatter.title || node.fields.slug}</Title>
      <time className="thumbnail-date" dateTime={node.frontmatter.date}>
        {node.frontmatter.date}
      </time>
      <Description dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    </div>
  </Link>
)

const Title = styled.h3`
  margin-bottom: 2px;
`

const Description = styled.p`
  margin-top: 3px;
`
