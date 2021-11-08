export interface EndpointStrategy {
    generateEndpoint(query: string): string;
}