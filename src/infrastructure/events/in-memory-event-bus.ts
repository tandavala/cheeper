import { EventBus } from "../../@Shared/events/event-bus";
import domainEvent from "../../Domain/Events/domain-event";

export class InMemoryEventBus implements EventBus {
  constructor(private _events: any[]) {}

  public events(): any[] {
    return this._events;
  }

  public reset() {
    return (this._events = []);
  }
  notify(domainEvent: domainEvent): void {
    this._events.push(domainEvent);
  }
  notifyAll(domainEvents: domainEvent[]): void {
    domainEvents.forEach((de) => this.notify(de));
  }
}
