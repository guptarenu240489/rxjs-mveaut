import { catchError, filter, Observable, of } from 'rxjs';

interface NewsItem {
  category: 'Business' | 'Sport';
  content: string;
}

const newsFeed$ = new Observable<NewsItem>((subscriber) => {
  setTimeout(
    () => subscriber.next({ category: 'Business', content: 'A' }),
    1000
  );
  setTimeout(() => subscriber.next({ category: 'Sport', content: 'B' }), 3000);
  setTimeout(
    () => subscriber.next({ category: 'Business', content: 'C' }),
    4000
  );
  setTimeout(() => subscriber.next({ category: 'Sport', content: 'D' }), 6000);
  setTimeout(
    () => subscriber.next({ category: 'Business', content: 'E' }),
    7000
  );
  setTimeout(() => subscriber.error('Error Ocurrred'), 8000);
});
// newsFeed$.subscribe((item) => console.log(item));

newsFeed$
  .pipe(
    filter((item) => item.category === 'Business'),
    // rather then throwings error, we handles it and emit new notification which is not of type error
    catchError((err) => of('SOme error occured'))
  )
  .subscribe((item) => console.log(item));
