import { ConfigurationData } from './types/configuration';
export default class Configuration {
    private static data;
    static set(data: ConfigurationData): void;
    static get<T extends keyof ConfigurationData>(key: T): ConfigurationData[T];
}
