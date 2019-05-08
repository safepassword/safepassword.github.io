const defaultPool =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/.?,;:!*$=+}])@_-[({\'"#~&<>'
export const generatePassword = ({
  length = 16,
  pool = defaultPool,
  toExclude = 'iIL1o0O',
} = {}) => {
  let password = ''

  for (let i = 0; i < length; i++) {
    const random = parseInt(Math.random() * (pool.length - 0) + 0)
    var character = pool[random]
    if (toExclude.indexOf(character) >= 0) {
      i--
    } else {
      password += character
    }
  }
  return password
}
