import { EndpointFactory } from './entpoint-factory.interface';

export interface EndpointFactoryConfig {
    host: string;
    key: string;
    useFactory: EndpointFactory
}