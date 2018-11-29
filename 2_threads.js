// Default threadpool size is 4
// 4 threads pass 4 calls to 4 cpus on the machine and all of them complete at roughly the same time
// 5th one takes double the time to complete unless the threadpool size is increased

// process.env.UV_THREADPOOL_SIZE = 5;

const crypto = require('crypto');

const start = Date.now();
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('1:',Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('2:',Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('3:',Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('4:',Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('5:',Date.now() - start);
});
