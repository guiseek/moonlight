import { Http } from './http';
import { UserService } from './user.service';

export class UserServiceImpl implements UserService {
  constructor(private http: Http) {}

  create<T>(value: T) {
    return this.http.post('/api/users', value);
  }
}
