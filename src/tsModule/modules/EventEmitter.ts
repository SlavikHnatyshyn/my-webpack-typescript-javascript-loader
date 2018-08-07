type EventEmitterHandler<M> = (arg: M) => void;

export class EventEmitter<T> {
    
    handlers: Array<EventEmitterHandler<T>>

    constructor() {
        this.handlers = [];
    }

    emit(data: T) {
        this.handlers.forEach(handler => handler(data));
    }

    subscribe(event: EventEmitterHandler<T>) {
        this.handlers.push(event);
    }
}