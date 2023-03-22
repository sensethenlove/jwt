export default (content: any, Buffer: any): String => {
  return Buffer.from(content).toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+/g, '')
}
