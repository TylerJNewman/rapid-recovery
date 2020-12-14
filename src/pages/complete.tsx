import {Button, Result, Space, Spin} from 'antd'
import React from 'react'
import {useTimeout} from 'utils'
import styles from 'styles/pages/complete.module.css'
import Link from 'next/link'
import {SmileOutlined} from '@ant-design/icons'

const Loading = () => (
  <div className={styles.wrapper}>
    <Space size="middle">
      <Spin size="large" />
    </Space>
  </div>
)

const Complete = () => {
  const [loading, setLoading] = React.useState(true)

  useTimeout(() => {
    setLoading(false)
  }, 1500)

  if (loading) return <Loading />

  return (
    <div className={styles.wrapper}>
      <Result
        icon={<SmileOutlined />}
        title="Great, well done!"
        extra={
          <Link href="/">
            <Button type="primary">Next</Button>
          </Link>
        }
      />
    </div>
  )
}

export default Complete
