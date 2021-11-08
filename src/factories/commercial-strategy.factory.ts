import { WindowsEndPointStrategy } from './../strategies/windows-endpoint.strategy';
import { MacEndPointStrategy } from './../strategies/mac-endpoint.strategy';
import { EndpointStrategy } from '../interfaces/endpoint-strategy.interface';
import { EndpointFactory } from './../interfaces/entpoint-factory.interface';

export class CommercialStrategyFactory implements EndpointFactory {

    makeStrategy(host: string, key: string): EndpointStrategy {
        if (host.includes("apple")) {
            return new MacEndPointStrategy(host, key);
        }

        return new WindowsEndPointStrategy(host, key);
    }
}