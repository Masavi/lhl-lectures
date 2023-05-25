const sayHello = (person, message) => {
  // return person + 'says' + message;
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  return `${person} says ${message}`;
}

/**
 * PASSING A FUNCTION
 */
console.log(sayHello)


/**
 * CALLING A FUNCTION
 */
console.log(sayHello('Bob', 'can we build it??'));