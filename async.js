// OS handles the requests - not touching the threadpool
// All the calls should complete at roughly the same time

const https = require('https');

const start = Date.now();

function doRequest() {
  https.request('https://www.google.com', (res) => {
    res.on('data', () => {});
    res.on('end', () => {
      console.log(Date.now() - start);
    });
  })
  .end();
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
