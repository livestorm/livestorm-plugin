import { ConfigurationData } from '@/types/configuration'
export default class Configuration {
  static url = '*'
  static eventTypeId: string
  static sessionId: string
  static organizationId: string
  static pluginId: string;
  static pluginHost: string
  static pluginName: string;

  public static set (data: ConfigurationData): void {
    for (const key in data) {
      this[key] = data[key]
    }
  }
}