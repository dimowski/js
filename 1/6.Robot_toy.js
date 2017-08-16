/* Implement a robot toy class with move(), left(), right(), report() functions. Robot has 0, 0 as initial coordinates and sees on NORTH.
move() should change coordinate by one, left() and right() will rotate the robot 90 degrees in the specified direction without changing the position of the robot. 
Coordinates can't be negative - ignore any move that change it on negative. report() should print robot coordinates and position.

robot.move();
robot.move();
robot.move();
robot.right();
robot.move();
robot.move();
robot.report(); // 2,3,EAST

*/

var robot = {
  x: 0,
  y: 0,
  directions: ["N", "E", "S", "W"],
  direction: 0,
  move: function() {
    switch(this.direction) {
      case 0:
        this.y++;
        break;
      case 1:
        this.x++;
        break;
      case 2:
        if(this.y > 0)
          this.y--;
        break;
      case 3:
        if(this.x > 0)
          this.x--;
        break;
    }
  },
  left: function() {
    if(this.direction === 0)
      this.direction = 3;
    else
      this.direction--;
  },
  right: function() {
    if(this.direction === 3)
      this.direction = 0;
    else
      this.direction++;
  },
  report: function() {
    console.log(this.x + "," + this.y + "," + this.directions[this.direction]);
  }
};

robot.move();
robot.move();
robot.move();
robot.right();
robot.move();
robot.move();
robot.report(); // 2,3,EAST