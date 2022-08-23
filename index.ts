import './style.css';

import { of, map, Observable } from 'rxjs';

of('World')
  .pipe(map((name) => `Hello, ${name}!`))
  .subscribe(console.log);

// Open the console in the bottom right to see results.

const observable$ = new Observable((subsciber) => {
  console.log('Observable executed');
  subsciber.next('Ashish');
  subsciber.next('Renu');
  subsciber.next('Riya');
  // subsciber.error('Error occusred');
  // will not execute as after error occur, observableis complete and destroyed
  // subsciber.next('Not sure');
});

const observer = {
  next: (val) => console.log(val),
  error: (err) => console.log(err),
};

observable$.subscribe(observer);
// will subscribe again and duplicate result will come
observable$.subscribe(observer);
