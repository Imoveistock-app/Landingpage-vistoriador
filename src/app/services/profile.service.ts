import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: 'root'
})
export class ProfileService extends BaseService {

    url: string = `${environment.apis.imoveistock}profile`

    constructor(
        private httpClient: HttpClient
    ) {
        super();
    }

    list(): Observable<any> {
      console.log(this.url)
        return this.httpClient
            .get(`${this.url}`, this.anonymousHeader())
            .pipe(map(this.extractData), catchError(this.serviceError));
    }
}
