import * as React from 'react'
import {Skeleton, Typography, Layout, Row, Button} from 'antd'
import styles from 'styles/pages/home.module.css'
import {FieldTimeOutlined} from '@ant-design/icons'

const {Content} = Layout
const {Title} = Typography

const timeRanges = [
  {
    content: '1 min',
  },
  {
    content: '2 min',
  },
  {
    content: '10 min',
  },
]

const rapidCategories = [
  {
    content: 'Body',
  },
  {
    content: 'Mind',
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

const Home = () => {
  return (
    <Content>
      <div className={styles.section}>
        <Title className={styles.section_name}>Rapid Recovery</Title>
        <Row className={styles.buttons} justify="center">
          {timeRanges.map(({content}) => (
            <Button type="primary" shape="round" icon={<FieldTimeOutlined />}>
              {content}
            </Button>
          ))}
        </Row>
      </div>
      <div className={styles.items}>
        <Row className={styles.medium_items} justify="center">
          {rapidCategories.map(({content}) => (
            <Item key={content} content={content} />
          ))}
        </Row>
      </div>
    </Content>
  )
}

export default Home
