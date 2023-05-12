import { HttpClient } from "@angular/common/http";
import { Municipio } from "./app.types";

export class AppService {
  ibge = `https://servicodados.ibge.gov.br/api/v1`

  constructor(
    private http: HttpClient
  ) { }

  get() {
    return this.http.get('/api')
  }

  municipios() {
    const url = `${this.ibge}/localidades/municipios`
    return this.http.get<Municipio[]>(url)
  }


}
