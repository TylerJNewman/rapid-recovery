import {Space, Spin} from 'antd'
import * as React from 'react'
import styles from './Loading.module.css'

export const Loading = ({spinning = true}) => (
  <div className={styles.wrapper}>
    <Space size="middle">
      <Spin spinning={spinning} size="large" />
    </Space>
  </div>
)
