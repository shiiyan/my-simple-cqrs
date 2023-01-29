import DomainEvent from "./domainEvent";

export default interface EventConsumerInterface {
    consume(event: DomainEvent): void;
}