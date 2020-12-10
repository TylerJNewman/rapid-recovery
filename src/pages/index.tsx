import * as React from 'react'
import Wave from '../../public/wave.svg'
import Link from 'next/link'
import Footstep from '../../public/footstep.svg'
import {Skeleton, Typography, Layout, Row, Button} from 'antd'
import styles from 'styles/pages/home.module.css'
import {FieldTimeOutlined} from '@ant-design/icons'

const {Content} = Layout
const {Title} = Typography

const timeRanges = [
  {
    content: '1 min',
    path: '1min',
  },
  {
    content: '2 min',
    path: '2min',
  },
  {
    content: '10 min',
    path: '10min',
  },
]

const rapidCategories = [
  {
    content: 'Body',
    style: {backgroundColor: 'rgb(250, 173, 20)'},
    icon: <Footstep style={{width: '100%', color: '#fff'}} fill="#fff" />,
    path: 'body',
  },
  {
    content: 'Mind',
    style: {backgroundColor: 'rgb(245, 34, 45)'},
    icon: <Wave style={{width: '100%', color: '#fff'}} fill="#fff" />,
    path: 'mind',
  },
]

const Item = ({content, style, icon, categoryPath, timeRangePath}) => {
  return (
    <Link href={`${categoryPath}/${timeRangePath}`}>
      <a style={style}>
        <span className="anticon">{icon}</span>
        <Title level={4} style={{color: '#fff'}}>
          {content}
        </Title>
      </a>
    </Link>
  )
}

const Home = () => {
  const [active, setActive] = React.useState(timeRanges[0].content)
  const [timeRangePath, setTimeRangePath] = React.useState(timeRanges[0].path)

  const handleClick = (content, path) => {
    setActive(content)
    setTimeRangePath(path)
  }
  return (
    <Content>
      <div className={styles.section}>
        <Title className={styles.section_name}>Rapid Recovery</Title>
        <Row className={styles.buttons} justify="center">
          <ul className={styles.anticons_list}>
            {timeRanges.map(({content, path}) => {
              const isActive = content === active ? styles.active : ''
              return (
                <li
                  key={content}
                  onClick={() => handleClick(content, path)}
                  className={isActive}
                >
                  <div>
                    <span className={styles.anticon}>
                      <FieldTimeOutlined style={{fontSize: '36px'}} />
                    </span>
                    <span className={styles.anticon_desc}>
                      <span className={styles.ant_badge}>{content}</span>
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
        </Row>
      </div>
      <div className={styles.items}>
        <Row className={styles.medium_items} justify="center">
          {rapidCategories.map(({content, style, icon, path}) => (
            <Item
              key={content}
              content={content}
              style={style}
              icon={icon}
              categoryPath={path}
              timeRangePath={timeRangePath}
            />
          ))}
        </Row>
      </div>
    </Content>
  )
}

export default Home
