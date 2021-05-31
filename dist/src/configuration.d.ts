import { ConfigurationData } from '@/types/configuration';
export default class Configuration {
    static url: string;
    static eventTypeId: string;
    static sessionId: string;
    static organizationId: string;
    static pluginId: string;
    static pluginHost: string;
    static pluginName: string;
    static set(data: ConfigurationData): void;
}
