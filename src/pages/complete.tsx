import {Button, Result, Space, Spin} from 'antd'
import React from 'react'
import {useTimeout} from 'utils'
import styles from 'styles/pages/complete.module.css'
import Link from 'next/link'
import {SmileOutlined} from '@ant-design/icons'
import {ArrowRight} from 'react-feather'
import {Loading} from 'components'

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
            <Button block type="primary" size={'large'} style={{height: 96}}>
              <ArrowRight style={{color: 'inherit'}} size={48} />
            </Button>
          </Link>
        }
      />
    </div>
  )
}

export default Complete
