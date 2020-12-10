import * as React from 'react'
import {Skeleton, Typography, Layout, Row} from 'antd'
import styles from 'styles/pages/learn.module.css'

const {Content} = Layout
const {Title} = Typography

const howToItems = [
  {
    content: 'How to Use Livewell.ai for Mind Recovery',
  },
  {
    content: 'How to Use Livewell.ai for Body Recovery',
  },
]

const scienceResearchItems = [
  {
    content: 'FAQ',
  },
  {
    content: 'Learn More',
  },
]

const Item = ({content}) => {
  return (
    <a>
      <Skeleton.Image style={{width: 80, height: 80}} />
      <Title level={4}>{content}</Title>
    </a>
  )
}

const Learn = () => {
  return (
    <Content>
      <div className={styles.section}>
        <Title className={styles.section_name}>How-To Guides</Title>
        <Row className={styles.items} justify="center">
          {howToItems.map(({content}) => (
            <Item key={content} content={content} />
          ))}
        </Row>
        <Title className={styles.section_name}>Science and Research</Title>
        <Row className={styles.items} justify="center">
          {scienceResearchItems.map(({content}) => (
            <Item key={content} content={content} />
          ))}
        </Row>
      </div>
    </Content>
  )
}

export default Learn
