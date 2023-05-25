// PRIMITIVES ARE IMMUTABLE
var message = "hello";
console.log(message[0]);
message[0] = "y";
console.log(message[0]);

message + "w";
console.log(message);

var newMessage = message + "w";
console.log(newMessage);

message = "this is a new message..."
console.log(message);

// OBJECTS ARE MUTABLE!!
var car = {
  make: 'Ford',
  model: 'Mustang'
}

console.log(car.make);
car.make = "Nissan"
console.log(car.make);