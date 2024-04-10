import http from 'k6/http';
import { check } from 'k6';


export default function () {
  const res = http.get('https://test.k6.io');
  console.log(res.status);
  check(res, {
    'status code is 200': (r) => r.status === 200
  })
}