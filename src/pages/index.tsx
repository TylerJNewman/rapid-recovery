import * as React from 'react'
import Wave from '../../public/wave.svg'
import Footstep from '../../public/footstep.svg'
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
    style: {backgroundColor: 'rgb(250, 173, 20)'},
    icon: <Wave style={{width: '100%', color: '#fff'}} fill="#fff" />,
  },
  {
    content: 'Mind',
    style: {backgroundColor: 'rgb(245, 34, 45)'},
    icon: <Footstep style={{width: '100%', color: '#fff'}} fill="#fff" />,
  },
]

const Item = ({content, style, icon}) => {
  return (
    <a style={style}>
      <span className="anticon">{icon}</span>
      <Title level={4} style={{color: '#fff'}}>
        {content}
      </Title>
    </a>
  )
}

const Home = () => {
  const [active, setActive] = React.useState('1 min')

  const handleClick = (id) => {
    setActive(id)
  }
  return (
    <Content>
      <div className={styles.section}>
        <Title className={styles.section_name}>Rapid Recovery</Title>
        <Row className={styles.buttons} justify="center">
          <ul className={styles.anticons_list}>
            {timeRanges.map(({content}) => {
              const isActive = content === active ? styles.active : ''
              return (
                <li
                  key={content}
                  onClick={() => handleClick(content)}
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
          {rapidCategories.map(({content, style, icon}) => (
            <Item key={content} content={content} style={style} icon={icon} />
          ))}
        </Row>
      </div>
    </Content>
  )
}

export default Home
