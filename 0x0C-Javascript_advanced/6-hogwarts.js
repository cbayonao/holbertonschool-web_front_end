"use strict";

let studentHogwarts = function () {
  let privateScore = 0;
  let name = null;
  let changeScoreBy = (points) => {
    privateScore += points;
  };
  let student = {};
  student.setName = (newName) => {
    name = newName;
  };
  student.rewardStudent = () => {
    changeScoreBy(1);
  };
  student.penalizeStudent = () => {
    changeScoreBy(-1);
  };
  student.getScore = () => {
    return `${name}: ${privateScore}`;
  };
  return student;
};

const harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

const draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
