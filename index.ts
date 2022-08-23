import './style.css';

import { of, map, Observable, fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
// Cold observable as each observable will make a seperate call and recievce different value
const ajax$ = ajax<any>('https://random-data-api.com/api/v2/users');
ajax$.subscribe((data) => console.log('Sub1', data.response.first_name));
ajax$.subscribe((data) => console.log('Sub2', data.response.first_name));
ajax$.subscribe((data) => console.log('Sub3', data.response.first_name));

/// Hot Observable as both observable will recievce same value

const btnClick$ = fromEvent(document.querySelector('button'), 'click');
btnClick$.subscribe((val) => console.log('Sub1', val));

setTimeout(() => {
  btnClick$.subscribe((val) => console.log('Sub2', val));
}, 5000);
