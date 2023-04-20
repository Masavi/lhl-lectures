class Rectangle {
  constructor(heightArg, widthArg) {
    this.height = heightArg;
    this.width = widthArg;
  }

  area() {
    return this.height * this.width;
  }
}

const rectangle = new Rectangle(10, 25);
console.log(
  `
  The are of the rectangle is: ${rectangle.area()}cm
  having a height of ${rectangle.height}cm
  and a width of ${rectangle.width}cm
  `
);