import IDomainEvent from "../../Domain/Events/domain-event";

export interface EventBus {
  notify(domainEvent: IDomainEvent): void;
  notifyAll(domainEvents: IDomainEvent[]): void;
}
