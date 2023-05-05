import { Observable } from 'rxjs';

export abstract class UserService {
  abstract create<T>(value: T): Observable<Object>;
}


