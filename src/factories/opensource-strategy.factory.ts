import { LinuxEndPointStrategy } from './../strategies/linux-endpoint.strategy';
import { EndpointStrategy } from '../interfaces/endpoint-strategy.interface';
import { EndpointFactory } from './../interfaces/entpoint-factory.interface';

export class OpenSourceStrategyFactory implements EndpointFactory {

    makeStrategy(host: string, key: string): EndpointStrategy {
        return new LinuxEndPointStrategy(host, key);
    }
}