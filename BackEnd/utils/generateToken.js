import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  const jwtSecret = process.env.JWT_SECRET || 'fallback_secret_key_for_development_only_change_in_production'
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: '30d',
  })
}

export default generateToken