import { EndpointStrategy } from "./endpoint-strategy.interface";

export interface EndpointFactory {
    makeStrategy(host: string, key: string): EndpointStrategy;
}