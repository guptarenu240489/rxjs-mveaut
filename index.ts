import { filter, Observable } from 'rxjs';

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
});
// newsFeed$.subscribe((item) => console.log(item));

newsFeed$
  .pipe(filter((item) => item.category === 'Business'))
  .subscribe((item) => console.log(item));
