import './style.css';

import { of, map, Observable } from 'rxjs';

const observable$ = new Observable<number>((subscriber) => {
  let count = 1;
  const intervalId = setInterval(() => {
    console.log('Emitted');
    subscriber.next(count++);
  }, 1000);
  return () => {
    clearInterval(intervalId);
  };
});

const subscription = observable$.subscribe((val) => console.log(val));
setTimeout(() => {
  console.log('Unsubscribe');
  subscription.unsubscribe();
}, 7000);
