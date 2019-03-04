import { EventEmitter } from "@angular/core";

export class NotificarionService{
    notifier = new EventEmitter<string>();

    notify(message: string) {
        this,this.notifier.emit(message);
    }
}