import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { NotificarionService } from './shared/messages/notiication.service';
import { LoginService } from './security/login/login.service';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

    constructor(
        private notificationService: NotificarionService,
        private injector: Injector,
        private zone: NgZone
    ){
        super();
    }

    handleError(errorResponse: HttpErrorResponse | any) {
        if(errorResponse instanceof HttpErrorResponse) {
            const message = errorResponse.error.message;
            this.zone.run(() => {
                switch(errorResponse.status) {
                    case 401:
                        this.injector.get(LoginService).handleLogin();
                    break;
                    case 403:
                        this.notificationService.notify(message || 'Access Denid.');
                    break;
                    case 404:
                        this.notificationService.notify(message || 'Not Found.');
                    break;
                }
            });
        }
        super.handleError(errorResponse);
    }
}