export default function handler(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  const {env} = process
  res.end(JSON.stringify({env}))
}
