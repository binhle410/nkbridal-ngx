import { Injectable } from '@angular/core';
import { Info } from './collections/info-property';
import { of, Observable } from 'rxjs';
import { FORMAL, WEDDING, BRIDESMAIDS } from './collections/mock-list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  
  constructor() { }
  /* FORMAL */
  getFormal(): Observable<Info[]> {
    return of(FORMAL);
  }
  getFormalId(id: number): Observable<Info> {
    return of(FORMAL.find(formal => formal.id === id));
  }
  /* WEDDING */
  getWedding(): Observable<Info[]> {
    return of(WEDDING);
  }
  getWeddingId(id: number): Observable<Info> {
    return of(WEDDING.find(wedding => wedding.id === id));
  }
  /* Bridesmaids */
  getBride(): Observable<Info[]> {
    return of(BRIDESMAIDS);
  }
  getBrideId(id: number): Observable<Info> {
    return of(BRIDESMAIDS.find(bride => bride.id === id));
  }
}
