const higherOrderFunc = function(callback) {
  const data = { initials: "YV" };

  console.log('2 BEFORE TIMEOUT CALL');
  const timeoutData = setTimeout(() => {
    data.initials = "YAV";
    callback();
    console.log('7', data);
    return data;
  });

  console.log('3', timeoutData);

  console.log('4 AFTER TIMEOUT CALL');
}

console.log('1 BEFORE MAIN CALL');

const result = higherOrderFunc(
  () => { console.log('6 INSIDE CALLBACK'); }
)

console.log('5 AFTER MAIN CALL');