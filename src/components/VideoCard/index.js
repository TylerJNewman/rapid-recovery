import {Card, Carousel, Typography, Modal} from 'antd'
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

const SmileToggle = () => {
  const [on, toggleOn] = React.useState(false)
  const toggle = () => toggleOn(!on)
  if (on) {
    return <SmileFilled onClick={toggle} style={{fontSize: 30}} />
  } else {
    return <SmileTwoTone onClick={toggle} style={{fontSize: 30}} />
  }
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

// const CircleToggle = () => {
//   const [on, toggleOn] = React.useState(false)
//   const toggle = () => toggleOn(!on)
//   if (on) {
//     return (
//       <CheckCircleFilled
//         onClick={toggle}
//         style={{color: '#52c41a', fontSize: 30}}
//       />
//     )
//   } else {
//     return (
//       <CheckCircleTwoTone
//         onClick={toggle}
//         twoToneColor="#52c41a"
//         style={{fontSize: 30}}
//       />
//     )
//   }
// }

const {Text} = Typography

export const VideoCard = ({
  title,
  videos = [],
  content = [],
  // images,
  // imageHeight,
}) => {
  return (
    <div className={styles.card_cover}>
      {videos.map((video, index) => (
        <div key={index}>
          <div className="videoWrapper">{video}</div>
        </div>
      ))}

      <Card
        // cover={
        //   <div className={styles.cover} style={{height: imageHeight}}>
        //     <Carousel
        //       // autoplay
        //       // autoplaySpeed={6000}
        //       className="rounded-top overflow-hidden"
        //       className={styles.carousel}
        //     >
        //       {/* {images.map((image, index) => (
        //         <div key={index}>
        //           <div
        //             style={{
        //               backgroundImage: `url(${image})`,
        //               height: `${imageHeight}px`,
        //             }}
        //           />
        //         </div>
        //       ))} */}
        //     </Carousel>
        //   </div>
        // }
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
