import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'http://node-nkbridal.ap-southeast-1.elasticbeanstalk.com/api/';
const ProductImg = 'products/';
const thumbnailImg = 'thumbnail/';
const slideAPI = 'slide/';
const footerAPI = 'footer/';
const categoryAPI = 'category/';
const user = 'users/'
@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  constructor(private http: HttpClient) { }
  /* THUMBNAILS API */
  addThumb(bodyParams): Observable<any> {
    return this.http.post<any>(apiUrl + thumbnailImg + 'add', bodyParams)
  }
  getThumb(id_product): Observable<any> {
    return this.http.get<any>(apiUrl + thumbnailImg + id_product);
  }
  deleteThumbnail(id): Observable<any> {
    return this.http.delete<any>(apiUrl + thumbnailImg + id);
  }
  /* /.THUMBNAILS API */
  /* ===================== */
  /* PRODUCTS API */
  addProducts(bodyParams): Observable<any> {
    return this.http.post<any>(apiUrl + ProductImg + 'add', bodyParams)
  }
  getInfoFromId(id):Observable<any>{
    return this.http.get<any>(apiUrl + ProductImg + 'edit/' + id)
  }
  editProduct(body):Observable<any>{
    return this.http.put<any>(apiUrl + ProductImg + 'edit/',body)
  }
  getInfo(id: any, route: any): Observable<any> {
    return this.http.get<any>(apiUrl + 'products/' + route + '/' + id);
  }
  getAllInfo(route): Observable<any> {
    return this.http.get<any>(apiUrl + 'products/' + route);
  }
  getALL(): Observable<any> {
    return this.http.get<any>(apiUrl + 'products/');
  }  
  deleteProduct(id): Observable<any> {
    return this.http.delete<any>(apiUrl + ProductImg + id);
  }
  actiaveFeature(body):Observable<any>{
    return this.http.put<any>(apiUrl + ProductImg + 'feature',body);
  }
  /* /.PRODUCTS API */
  /* ===================== */
  /* SETTING API */
  getSetting(): Observable<any> {
    return this.http.get<any>(apiUrl + 'setting');
  }
  /* /.SETTING API */
  /* ===================== */
  /* SLIDE */
  getSlideInfo(): Observable<any> {
    return this.http.get(apiUrl + slideAPI);
  }
  changeSlide(body):Observable<any>{
    return this.http.put<any>(apiUrl + slideAPI,body);
  }
  /* /.SLIDE */
  /* ===================== */
  /* FOOTER */
  getFooter(): Observable<any> {
    return this.http.get(apiUrl + footerAPI)
  }
  getEndHome(): Observable<any>{
    return this.http.get<any>(apiUrl + 'endhome/');
  }
  /* /.FOOTER */
  /* ===================== */
  /* CATEGORIES SHOW */
  getCategoriesShow():Observable<any>{
    return this.http.get(apiUrl + categoryAPI)
  }
  /* /.CATEGORIES SHOW */
  /* ===================== */
  /* USERS */
 
  /* /.USERS */
}
