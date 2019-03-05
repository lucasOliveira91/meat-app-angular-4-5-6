import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export class ErrorHandler {

    static handleError(error: HttpErrorResponse | any) {
        let errorMessage: string;

        if (error instanceof HttpErrorResponse) {
            const body = error.error;
            errorMessage = `Erro ${error.url} ao acessar a url ${error.status} - ${body}`;
        } else {
            errorMessage = error.toString();
        }
        return Observable.throw(errorMessage);
    }
}