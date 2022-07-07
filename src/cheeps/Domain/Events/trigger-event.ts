import IDomainEvent from "./domain-event";

export class TriggerEvents {
  private _domainEvents = [];

  public domainEvents(): any[] {
    return this._domainEvents;
  }

  public retrieveAndFlushDomainEvents(): any[] {
    const events = this.domainEvents();
    this.resetDomainEvent();
    return events;
  }

  public notifyDomainEvent(domainEvent: IDomainEvent) {}

  private resetDomainEvent(): void {
    this._domainEvents = [];
  }
}
