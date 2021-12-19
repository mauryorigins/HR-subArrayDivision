export default function gradingStudents(grades: number[]): number[] {
  // Write your code here
  const multipleOf = 5;
  const numberAround = 2;
  const gradesEvalued: number[] = [];

  grades.forEach((element, i) => {
    if (element >= 38 && element % multipleOf > numberAround) {
      if (element % multipleOf === 4) {
        gradesEvalued[i] = element + 1;
      } else {
        gradesEvalued[i] = element + numberAround;
      }
    } else {
      gradesEvalued[i] = element;
    }
  });
  return gradesEvalued;
}
