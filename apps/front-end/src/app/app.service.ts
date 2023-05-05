import { HttpClient } from "@angular/common/http";

export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  get() {
    return this.http.get('/api')
  }


}
