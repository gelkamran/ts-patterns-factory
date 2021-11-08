import { EndpointStrategy } from './../interfaces/endpoint-strategy.interface';

export class WindowsEndPointStrategy implements EndpointStrategy {
    private host: string;
    private key: string;

    constructor(host: string, key: string) {
        this.host = host;
        this.key = key;
    }

    private signIn(key: string): {key: string} {
        return { key: `azure-${key}`};
    }

    public generateEndpoint(query: string): string {
        const azure = this.signIn(this.key);
        return `http://${this.host}/windows/?key=${azure.key}&query=${query}`;
    }

}