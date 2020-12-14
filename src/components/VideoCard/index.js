import {Card, Carousel, Typography, Modal, Spin} from 'antd'
import styles from './VideoCard.module.css'
import titleStyles from 'styles/pages/1min.module.css'
import {displaySuccessNotification} from 'utils'
import {
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
  CheckCircleFilled,
  SmileFilled,
  HeartFilled,
  ShareAltOutlined,
  RadarChartOutlined,
} from '@ant-design/icons'
import Title from 'antd/lib/typography/Title'
import {Loading} from 'components'

const Video = ({src}, ref) => {
  const [loading, setLoading] = React.useState(true)
  const iframeRef = React.useRef(null)

  React.useEffect(() => {
    if (iframeRef.current) setLoading(false)
  }, [iframeRef.current])

  const iframe = (
    <iframe
      ref={iframeRef}
      width="560"
      height="315"
      src={src}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  )

  return (
    <>
      <div style={{display: `${loading ? 'none' : 'block'}`}}>{iframe}</div>
      <Loading
        spinning={loading}
        styles={{
          position: 'absolute',
          top: '-20%',
        }}
      ></Loading>
    </>
  )
}

function info({content}) {
  const formattedContent = (
    <div>
      {content.map((paragraph, index) => (
        <p key={index} className="mb-3">
          {' '}
          {paragraph}
        </p>
      ))}
    </div>
  )
  Modal.info({
    title: 'How does this help me?',
    content: formattedContent,
    onOk() {
      // displaySuccessNotification("You've have earned points!")
    },
  })
}

const HeartToggle = () => {
  const [on, toggleOn] = React.useState(false)
  const toggle = () => toggleOn(!on)
  if (on) {
    return (
      <HeartFilled onClick={toggle} style={{color: '#eb2f96', fontSize: 30}} />
    )
  } else {
    return (
      <HeartTwoTone
        onClick={toggle}
        twoToneColor="#eb2f96"
        style={{fontSize: 30}}
      />
    )
  }
}

const {Text} = Typography

export const VideoCard = ({title, videos = [], content = []}) => {
  return (
    <div className={styles.card_cover}>
      {videos.map((src, index) => (
        <div key={index}>
          <div className="videoWrapper">
            <Video src={src} />
          </div>
        </div>
      ))}
      <Card
        actions={[
          <RadarChartOutlined style={{fontSize: 30}} />,
          <HeartToggle />,
          <ShareAltOutlined style={{fontSize: 30}} />,
        ]}
      >
        <div className={styles.description} onClick={() => info({content})}>
          <Title level={2} className={titleStyles.title}>
            World's Greatest Stretch
          </Title>
        </div>
      </Card>
    </div>
  )
}
