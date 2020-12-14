import {Card, Carousel, Typography, Modal} from 'antd'
import {Heart, Share, Star} from 'react-feather'
import styles from './VideoCard.module.css'
import titleStyles from 'styles/pages/1min.module.css'
import {displaySuccessNotification} from 'utils'
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
          <Star size={30} strokeWidth={1} />,
          <Heart size={30} strokeWidth={1} />,
          <Share size={30} strokeWidth={1} />,
        ]}
      >
        <div
          className={styles.description}
          onClick={() => info({title, content})}
        >
          <Title level={2} className={titleStyles.title}>
            World's Greatest Stretch
          </Title>
        </div>
      </Card>
    </div>
  )
}
