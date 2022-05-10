export default function (context, inject) {
  const appId = 'HWKPCMSXXO';
  const apiKey = '7c92bce38f8d22ef70488a18b06305fe'
  const headers = {
    "X-Algolia-API-Key": apiKey,
    "X-Algolia-Application-Id": appId
  }

  inject('dataApi', {
    getHome,
    getReviewsByHomeId
  })

  async function getHome(homeId) {
    try {
      return unWrap(await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, { headers }))
    } catch (error) {
      getErrorResponse(error)
    }
    
  }

  async function getReviewsByHomeId(homeId) {
    try {
      return unWrap(await fetch(`https://${appId}-dsn.algolia.net/1/indexes/reviews/query`, {
        headers,
        method: 'POST',
        body: JSON.stringify({
          filters: `homeId:${homeId}`,
          hitsPerPage: 3,
          attributesToHighlight: [],
        })
      }))  
    } catch (error) {
      getErrorResponse(error)
    }
  }

  async function unWrap(response) {
    const json = await response.json()
    const { ok, status, statusText } = response
    return {
      json,
      ok,
      status,
      statusText,
    }
  }
  
  function getErrorResponse(error) {
    return {
      ok: false,
      status: 500,
      statusText: error.message,
      json: {}
    }
  }

}