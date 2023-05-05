import { Observable } from 'rxjs';


export abstract class Http {
  abstract post<T = Object, D = unknown>(url: string, data: D): Observable<T>;
}
