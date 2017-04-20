import axios from 'axios'

function getUrl(coordinates){
  const lat = coordinates.lat.toFixed(7)
  const lng = coordinates.lng.toFixed(7)

  return 'https://en.wikipedia.org/w/api.php?format=json&action=query&redirects=1&generator=geosearch&prop=extracts|coordinates|pageimages&ggslimit=50&ggsradius=10000&ggscoord='+lat+'|'+lng+'&exintro=1&explaintext=1&exlimit=50&coprop=type|dim|globe&colimit=50&piprop=thumbnail&pithumbsize=200&pilimit=50&origin=*'
}

module.exports = {
  fetchWikis: function (coordinates) {
    const url = getUrl(coordinates)
    return axios.get(url)
      .then(function(response){
        return response
      })
  }
}
