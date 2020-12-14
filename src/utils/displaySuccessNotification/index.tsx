import {message, notification} from 'antd'

export const displaySuccessNotification = (
  message: string,
  description?: string,
  duration?: number,
) => {
  const config = {
    message,
    description,
    duration,
    style: {
      marginTop: 50,
    },
  }
  return notification.success(config)
}

export const displayErrorMessage = (error: string) => {
  return message.error(error)
}
