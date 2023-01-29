import DomainEvent from "./domainEvent";
import EventConsumerInterface from "./eventConsumerInterface";

export default class EventManager {
  consumers: EventConsumerInterface[] = [];

  subscribe(eventConsumer: EventConsumerInterface): void {
    this.consumers.push(eventConsumer);
  }

  publish(event: DomainEvent): void {
    this.consumers.forEach((consumer) => {
      consumer.consume(event);
    });
  }
}
