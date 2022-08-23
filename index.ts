import './style.css';

import { of, map, Observable } from 'rxjs';

of('World')
  .pipe(map((name) => `Hello, ${name}!`))
  .subscribe(console.log);

// Open the console in the bottom right to see results.

const observable$ = new Observable((subsciber) => {
  console.log('Observable executed');
  subsciber.next('Ashish');
  setTimeout(() => subsciber.next('Renu'), 2000);
  subsciber.next('Riya');
  setTimeout(() => subsciber.error(new Error('Error occured')), 4000);
  // will not execute as after error occur, observableis complete and destroyed
  // subsciber.next('Not sure');
  // subsciber.complete();
  // teardown can be run after complete or error
  return () => {
    console.log('Teardown');
  };
});

const observer = {
  next: (val) => console.log(val),
  error: (err) => console.log(err.message),
  complete: () => console.log('Completed'),
};

observable$.subscribe(observer);
// will subscribe again and duplicate result will come
// setTimeout(() => {
//   console.log('observable 2 executed');
//   observable$.subscribe(observer);
// }, 1000);
