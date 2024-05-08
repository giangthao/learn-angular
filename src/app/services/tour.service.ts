import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, filter, first, map, of, shareReplay } from 'rxjs';
import { Tour } from '../models/tour';
import { TourRender, tours } from '../fake-data/fake-data';

@Injectable({
      providedIn: 'root',
})
export class TourService {
      private apiGetTours = `${environment.apiBaseUrl}/products`;
      _fakeTours: TourRender[] = tours;

      constructor(private http: HttpClient) {}

      getTours(page: number, limit: number): Observable<Tour[]> {
            const params = new HttpParams().set('page', page.toString()).set('limit', limit.toString());

            return this.http.get<Tour[]>(this.apiGetTours, { params });
      }

      get tours$() {
            return of<TourRender[]>(this._fakeTours).pipe(shareReplay(1));
      }

      // get tour details in fake dât on the client
      getTourBySlug(slug: string): Observable<TourRender | undefined> {
            return this.tours$.pipe(
                  map((tours: TourRender[]) =>
                        tours.find((tour: TourRender) => tour.slug === slug && tour !== undefined),
                  ),
            );
      }

      getImagesBySlug(slug: string): Observable<string | undefined> {
            return this.tours$.pipe(
                  map((tours: TourRender[]) =>
                        tours.find((tour: TourRender) => typeof tour !== undefined && tour.slug === slug),
                  ),
                  filter((tour) => !!tour),
                  map((tourRender) => tourRender?.thumbnailUrl),
                  first(),
            );
      }
}
