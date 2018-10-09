import axios from 'axios'

const API = process.env.BASE_URL + 'api.json'

export default {
  getApiData () {
    return new Promise((resolve, reject) => {
      axios.get(API).then(response => {
        const data = response.data
        if (response.status === 200) {
          resolve(data)
        } else {
          reject(response)
        }
      })
    })
  }
}
