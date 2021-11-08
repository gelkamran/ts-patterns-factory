import { Device, generateUrlForDevice } from './configuration/endpoint-factory.configuration';

console.log(generateUrlForDevice(Device.MAC_BOOK, "helloMac"));
console.log(generateUrlForDevice(Device.IOS, "helloIOS"));
console.log(generateUrlForDevice(Device.WINDOWS_10, "helloWindows"));
console.log(generateUrlForDevice(Device.REDHAT, "helloRedHat"));
console.log(generateUrlForDevice(Device.AMAZON_LINUX_2, "helloAL2"));