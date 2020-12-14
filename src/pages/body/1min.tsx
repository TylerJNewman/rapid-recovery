import {VideoCard} from 'components/'
import {Row, Col} from 'antd'
import React from 'react'

const content = [
  `This stretch lengthens and strengthens three key areas–the ankles, hips, and thoracic spine.`,
  `It’s a great movement to do throughout the day because it targets so many muscles in a relatively short period–hip flexors, hamstrings, adductors, glutes, calves, quads, thoracic spine, chest, shoulders, lower back, and obliques. Ease into the movement and move fluidly through the positions.`,
  `Don't worry if you can't get into the full range of motion just yet.. we will get there with consistent practice. Doing The World's Greatest Stretch for one or two minutes for every hour sitting down will yield incredible results over time.`,
]
const title = `The World’s Greatest Stretch`
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

const OneMinuteBody = () => {
  return (
    <>
      <Row
        gutter={16}
        justify="center"
        align="middle"
        style={{height: '100vh'}}
      >
        <Col xs={22} sm={22} lg={16}>
          <VideoCard
            videos={[<Video />]}
            images={['/unsplash/1.jpg', '/unsplash/15.jpg']}
            imageHeight={309}
            title={title}
            content={content}
          />
        </Col>
      </Row>
    </>
  )
}

export default OneMinuteBody
