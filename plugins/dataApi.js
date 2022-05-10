export default function (context, inject) {
  const appId = 'HWKPCMSXXO';
  const apiKey = '7c92bce38f8d22ef70488a18b06305fe'

  inject('dataApi', {
    getHome
  })

  async function getHome(homeId) {
    const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, {
      headers: {
        "X-Algolia-API-Key": apiKey,
        "X-Algolia-Application-Id": appId
      }
    })
    const json = await response.json()
    return json
  }
  
}