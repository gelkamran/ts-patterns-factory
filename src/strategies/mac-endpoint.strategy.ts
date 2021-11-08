import { EndpointStrategy } from './../interfaces/endpoint-strategy.interface';

export class MacEndPointStrategy implements EndpointStrategy {
    private host: string;
    private key: string;

    constructor(host: string, key: string) {
        this.host = host;
        this.key = key;
    }

    public generateEndpoint(query: string): string {
        return `https://${this.host}/mac/?key=${this.key}&query=${query}`;
    }

}