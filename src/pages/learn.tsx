import React from 'react'
import {
  Skeleton,
  Typography,
  Space,
  Button,
  Layout,
  Row,
  Col,
  Image,
} from 'antd'
import styles from 'styles/pages/learn.module.css'

const {Content} = Layout
const {Title} = Typography

const howToItems = [
  {
    description: 'How to Use Livewell.ai for Mind Recovery',
  },
  {
    description: 'How to Use Livewell.ai for Body Recovery',
  },
]

const scienceResearchItems = [
  {
    description: 'FAQ',
  },
  {
    description: 'Learn More',
  },
]

const Item = ({description}) => {
  return (
    <a>
      <Skeleton.Image style={{width: 80, height: 80}} />
      <Title level={4}>{description}</Title>
    </a>
  )
}

const Learn = () => {
  return (
    <Content>
      <div className={styles.section}>
        <Title className={styles.section_name}>How-To Guides</Title>
        <Row className={styles.items} justify="center">
          {howToItems.map(({description}) => (
            <Item key={description} description={description} />
          ))}
        </Row>
        <Title className={styles.section_name}>Science and Research</Title>
        <Row className={styles.items} justify="center">
          {scienceResearchItems.map(({description}) => (
            <Item key={description} description={description} />
          ))}
        </Row>
        {/* <div className={styles.space_align_container}>
          <div className={styles.space_align_block}>
            <Space align="center">
              center
              <Button type="primary">Primary</Button>
              <span className={styles.mock_block}>Block</span>
            </Space>
          </div>
          <div className={styles.space_align_block}>
            <Space align="start">
              start
              <Button type="primary">Primary</Button>
              <span className={styles.mock_block}>Block</span>
            </Space>
          </div>
          <div className={styles.space_align_block}>
            <Space align="end">
              end
              <Button type="primary">Primary</Button>
              <span className={styles.mock_block}>Block</span>
            </Space>
          </div>
          <div className={styles.space_align_block}>
            <Space align="baseline">
              baseline
              <Button type="primary">Primary</Button>
              <span className={styles.mock_block}>Block</span>
            </Space>
          </div>
        </div>*/}
      </div>
    </Content>
  )
}

export default Learn
