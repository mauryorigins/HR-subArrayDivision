/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true
import birthday from './birthday';

function main() {
  console.log('---------- Cool Programing ----------\n');
  const testArray = [1, 2, 1, 3, 2];
  const result = birthday(testArray, 3, 2);
  console.log('Result: ', result);
}

main();
