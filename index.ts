import { EMPTY, fromEvent, of, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, concatMap, map } from 'rxjs/operators';

const endpointInput: HTMLInputElement =
  document.querySelector('input#endpoint');
const fetchButton = document.querySelector('button#fetch');
//
// concatMap will emit outer observable notifications and  then it will complete inner observable. once inner observable is complete then it will emit further outer observable notifications. It will wueue outer observale notification unless inner observable for preious is complete
// If another outer observable starts emmit
fromEvent(fetchButton, 'click')
  .pipe(
    map(() => endpointInput.value),
    switchMap((value) =>
      ajax(`https://random-data-api.com/api/v2/${value}`).pipe(
        catchError(() => of('Error occured!!'))
      )
    )
  )
  .subscribe({
    next: (value) => console.log(value),
    error: (err) => console.log('Error:', err),
    complete: () => console.log('Completed'),
  });
