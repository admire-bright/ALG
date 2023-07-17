import { log } from 'console';

let a = 1;
console.log(a++);
function b() {
  let c = 2;
  return c++;
}
log(b());
