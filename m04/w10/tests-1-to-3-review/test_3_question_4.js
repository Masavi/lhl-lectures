/**
 * QUESTION 4 (STRETCH)
 */
const filesize = function (bytes) {
  // B, kB, MB, GB, TB
  const ORDERS_OF_MAGNITUDE = ['B', 'kB', 'MB', 'GB', 'TB'];
  let magnitude = 0;

  function bytesParser(bytes) {
    if (bytes >= 1000) {
      magnitude += 1;
      return bytesParser(bytes/1000)
    };

    return `${bytes} ${ORDERS_OF_MAGNITUDE[magnitude]}`
  }

  return bytesParser(bytes);
}

console.log(filesize(500));
console.log(filesize(250 * 1000));
console.log(filesize(500 * 1000 * 1000));
console.log(filesize(750 * 1000 * 1000 * 1000));
console.log(filesize(750 * 1000 * 1000 * 1000 * 1000));