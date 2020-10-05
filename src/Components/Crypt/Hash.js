const crypto = require('crypto');
const algorythm = 'sha256';
const digest = 'hex';

module.exports = function digestHash(message) {
  const hash = crypto.createHash('sha256').update(message).digest('hex');
  return hash;
}