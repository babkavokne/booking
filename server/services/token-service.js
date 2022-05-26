const jwt = require('jsonwebtoken');
const tokenModel = require('../models/token-model')

class TokenService {
  generateToken(payload) {
    const access = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: 25 })
    const refresh = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '60d' })
    return {
      access,
      refresh
    }
  }

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await tokenModel.findOne({ user: userId })
    if (tokenData) {
      tokenData.refresh = refreshToken
      return tokenData.save()
    }
    const token = await tokenModel.create({ user: userId, refreshToken: refreshToken });
    return token
  }
}

module.exports = new TokenService()