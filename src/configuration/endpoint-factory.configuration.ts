import { OpenSourceStrategyFactory } from './../factories/opensource-strategy.factory';
import { CommercialStrategyFactory } from './../factories/commercial-strategy.factory';
import { EndpointFactoryConfig } from '../interfaces/entpoint-factory-config.interface';

export enum Device {
    MAC_BOOK = "MacBook Pro 16",
    IOS = "Iphone 13",
    WINDOWS_10 = "Windows 10",
    REDHAT = "RedHat Server",
    AMAZON_LINUX_2 = "AMAZON LINUX 2"
}

export const EndpointFactoryConfiguration: Map<Device, EndpointFactoryConfig> = new Map([
    [Device.MAC_BOOK,       { host: "api.apple.com",    key: "apple-dev-123",   useFactory: new CommercialStrategyFactory() }],
    [Device.IOS,            { host: "api.apple.com",    key: "apple-dev-222",   useFactory: new CommercialStrategyFactory() }],
    [Device.WINDOWS_10,     { host: "api.windows.com",  key: "windows-dev-12",  useFactory: new CommercialStrategyFactory() }],
    [Device.REDHAT,         { host: "api.red-hat.com",  key: "unix-dev-123",    useFactory: new OpenSourceStrategyFactory() }],
    [Device.AMAZON_LINUX_2, { host: "api.aws.com",      key: "aws-dev-123",     useFactory: new OpenSourceStrategyFactory() }],
]);

export const generateUrlForDevice = (device: Device, query: string): string => {
    const deviceConfig = EndpointFactoryConfiguration.get(device);
    return deviceConfig.useFactory.makeStrategy(deviceConfig.host, deviceConfig.key).generateEndpoint(query);
}