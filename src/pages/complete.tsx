import {Button, Result, Space, Spin} from 'antd'
import React from 'react'
import {useTimeout} from 'utils'
import styles from 'styles/pages/complete.module.css'
import Link from 'next/link'

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
        status="success"
        title="Complete"
        subTitle="Congrats on your progress!"
        extra={[
          <Link href="/">
            <Button type="primary">Go Home</Button>
          </Link>,
          <Link href="/progress">
            <Button>Progress</Button>
          </Link>,
        ]}
      />
    </div>
  )
}

export default Complete
