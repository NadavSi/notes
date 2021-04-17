import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { isNull } from 'util';

interface QueryParams {
  [key: string]: string | number;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly END_POINT: string;

  constructor(private http: HttpClient) {
    this.END_POINT = `${ environment.serverUrl }`;
  }

  // the user here can pass the return type
  // e.g : this.serviec.getRemove<_TYPE_>(....)
  // if the user dose not provide an id this will just get all
  // resources for a specific route
  // this will work on get and delete request with query params filtering
  getRemove<returnType>(
    id: number | null,
    route: string,
    qp: QueryParams = {},
    method: 'get' | 'delete' = 'get'
  ): Observable<returnType> {
    const cfqu = this.correctFormatForQueryUrl(qp);
    const url = `${this.END_POINT}/${route}${id ? '/' + id : ''}${cfqu}`;
    //console.log(url);
    return this.http[method](url) as Observable<returnType>;
  }


  // this method will patch or post to any route
  // you choose
  postPatch<returnType>(
    route: string,
    data: any,
    id: number = null,
    method: 'post' | 'put' = 'post',
    qp: QueryParams = {}
  ): Observable<returnType> {
    const cfqu = this.correctFormatForQueryUrl(qp);
    return this.http[method](
      `${this.END_POINT}/${route}${id ? '/' + id : ''}${cfqu}`,
      data
    ) as Observable<returnType>;
  }


  // In the return we will attach the '?' if the user provides a query params
  // and if the user provides a null we do not need to map the array to
  // anything, we just simply returns ''.
  // if there qp dose has some keys an values
  // e.g
  // const z = {userId: 1, name: 'rowad'} then
  // this method will return ["userId=1", "name=rowad"]
  private correctFormatForQueryUrl(qp: QueryParams): string {
    if (isNull(qp)) {
      return '';
    }
    const qpAsStr = this.mapQueryParamsToUrl(qp);
    return qpAsStr.length === 0 ? '' : `?${qpAsStr.join('&')}`;
  }


  // e.g :
  // const z = {userId: 1, name: 'rowad'} then
  // this method will return ["userId=1", "name=rowad"]
  private mapQueryParamsToUrl(qp: QueryParams): Array<string> {
    return Object.keys(qp).map((key: string) => {
      return `${key}=${qp[key]}`;
    });
  }
}
