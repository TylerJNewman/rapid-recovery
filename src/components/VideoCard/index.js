import {Card, Carousel, Typography, Modal} from 'antd'
import {Info, Share, Star} from 'react-feather'
import styles from './VideoCard.module.css'
import titleStyles from 'styles/pages/1min.module.css'
import {displaySuccessNotification} from 'utils'
import Title from 'antd/lib/typography/Title'
const Video = () => {
  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/_kW3RTmwufc"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  )
}

function info({title, content}) {
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
    title,
    content: formattedContent,
    onOk() {
      // displaySuccessNotification("You've have earned points!")
    },
  })
}

const {Text} = Typography

export const VideoCard = ({
  title,
  subtitle,
  content = [],
  images,
  imageHeight,
}) => {
  return (
    <div className={styles.card_cover}>
      <div className="videoWrapper">
        <Video />
      </div>
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
          <Star size={20} strokeWidth={1} />,
          <Info
            size={20}
            strokeWidth={1}
            onClick={() => info({title, content})}
          />,
          <Share size={20} strokeWidth={1} />,
        ]}
      >
        <div className={styles.description}>
          <Title level={5} className={titleStyles.title}>
            World's Greatest Stretch
          </Title>
        </div>
      </Card>
    </div>
  )
}
