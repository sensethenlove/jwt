import { DecodeTokenError } from './errors'


export default (jwt: string, Buffer: any) => {
  const jwtParts = jwt.split('.')

  if (jwtParts.length !== 3) throw new DecodeTokenError('Invalid token')
  else return JSON.parse(Buffer.from(jwtParts[1], 'base64').toString())
}
