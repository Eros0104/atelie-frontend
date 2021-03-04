const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@assets' : 'src/assets',
    '@custom-components' : 'src/custom-components',
    '@services': 'src/services',
    '@utils':'src/utils',
  })(config)

  return config
}