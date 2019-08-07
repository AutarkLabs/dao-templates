const deployTemplate = require('@aragon/templates-shared/scripts/deploy-template')

const TEMPLATE_NAME = 'reputation-template-oracle'
const CONTRACT_NAME = 'ReputationOracleTemplate'

module.exports = callback => {
  deployTemplate(web3, artifacts, TEMPLATE_NAME, CONTRACT_NAME)
    .then(template => {
      console.log(template.address)
      callback()
    })
    .catch(callback)
}
