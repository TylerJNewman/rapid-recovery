import {VideoCard} from 'components/'
import {ArrowRight} from 'react-feather'
import {Row, Col, Button} from 'antd'
import React from 'react'
import Link from 'next/link'
import {Typography} from 'antd'

const {Title} = Typography

const content = [
  `This stretch lengthens and strengthens three key areas–the ankles, hips, and thoracic spine.`,
  `It’s a great movement to do throughout the day because it targets so many muscles in a relatively short period–hip flexors, hamstrings, adductors, glutes, calves, quads, thoracic spine, chest, shoulders, lower back, and obliques. Ease into the movement and move fluidly through the positions.`,
  `Don't worry if you can't get into the full range of motion just yet.. we will get there with consistent practice. Doing The World's Greatest Stretch for one or two minutes for every hour sitting down will yield incredible results over time.`,
]
const title = `The World’s Greatest Stretch`
const videoSrc = [`https://www.youtube.com/embed/_kW3RTmwufc`]

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
          <VideoCard videos={videoSrc} title={title} content={content} />
          <Link href="/complete">
            <Button block type="primary" size={'large'} style={{height: 96}}>
              <ArrowRight style={{color: 'inherit'}} size={48} />
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  )
}

export default OneMinuteBody
