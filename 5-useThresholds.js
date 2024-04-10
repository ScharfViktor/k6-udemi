import http from "k6/http"
import {sleep} from 'k6'

export const options = {
  stages: [
    {
      duration: '10s',
      target: 10
    },
    {
      duration: '30s',
      target: 10
    },
    {
      duration: '10s',
      target: 0
    },

  ],
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<150'], 
  }
}

export default function () {
  http.get('https://test.k6.io')
  sleep(1)
  http.get('https://test.k6.io/contacts.php')
  sleep(2)
  http.get('https://test.k6.io/news.php')
  sleep(2)
}



