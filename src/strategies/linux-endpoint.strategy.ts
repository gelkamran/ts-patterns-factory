import { EndpointStrategy } from './../interfaces/endpoint-strategy.interface';

export class LinuxEndPointStrategy implements EndpointStrategy {
    private host: string;
    private key: string;

    constructor(host: string, key: string) {
        this.host = host;
        this.key = key;
    }

    private hashKey(key: string) {
        return `#${key}#`;
    }

    public generateEndpoint(query: string): string {
        return `http://${this.host}/linux/?key=${this.hashKey(this.key)}&query=${query}`;
    }

}