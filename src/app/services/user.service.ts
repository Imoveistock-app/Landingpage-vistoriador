import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { UserRegisterRequestDto } from "../dtos/user-register-request.dto";
import { catchError, map, Observable } from "rxjs";
import { UserRegisterResponseDto } from "../dtos/user-register-response.dto";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: 'root'
})
export class UserService extends BaseService {

    url: string = `${environment.apis.imoveistock}user`

    constructor(
        private httpClient: HttpClient
    ) {
        super();
     }

    register(dto: UserRegisterRequestDto): Observable<UserRegisterResponseDto> {
        return this.httpClient
            .post(`${this.url}`, dto, this.anonymousHeader())
            .pipe(map(this.extractData), catchError(this.serviceError));
    }
}