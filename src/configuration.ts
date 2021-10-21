import { ConfigurationData } from '@/types/configuration'
export default class Configuration {
  private static data: ConfigurationData = {} as ConfigurationData

  public static set (data: ConfigurationData): void {
    this.data = {
      ...this.data, 
      ...data
    }
  }

  public static get<T extends keyof ConfigurationData>(key: T): ConfigurationData[T] {
    return this.data[key]
  }
}