"use strict";
function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return () => {
      return seat;
    };
  }
  var students = [];
  var i = 0;
  while (i < numbersOfStudents) {
    students.push(studentSeat(i + 1));
    i++;
  }
  return students;
}
const classRoom = createClassRoom(10);
