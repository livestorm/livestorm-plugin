import { ConfigurationData } from '../src/types/configuration'

import Configuration from '../src/configuration'

describe('Configuration', () => {
  const data: ConfigurationData = {
    'eventTypeId': 'eventTypeId',
    isPublished: true,
    locale: 'fr',
    'organizationId': 'organizationId',
    origin: 'origin',
    'pluginHost': 'pluginHost',
    'pluginId': 'pluginId',
    'pluginName': 'pluginName',
    queryString: { s: 's' },
    'sessionId': 'sessionId',
  }

  it('should store accessible data', () => {
    Configuration.set(data)

    expect(Configuration.get('eventTypeId')).toBe(data.eventTypeId)
    expect(Configuration.get('isPublished')).toBe(data.isPublished)
    expect(Configuration.get('locale')).toBe(data.locale)
    expect(Configuration.get('organizationId')).toBe(data.organizationId)
    expect(Configuration.get('origin')).toBe(data.origin)
    expect(Configuration.get('pluginHost')).toBe(data.pluginHost)
    expect(Configuration.get('pluginId')).toBe(data.pluginId)
    expect(Configuration.get('pluginName')).toBe(data.pluginName)
    expect(Configuration.get('queryString')).toBe(data.queryString)
    expect(Configuration.get('sessionId')).toBe(data.sessionId)
  })

  it('should update the data', () => {
    const dataToUpdate: ConfigurationData = {
      'eventTypeId': 'eventTypeIdUpdated',
    } as ConfigurationData
    Configuration.set(dataToUpdate)

    // Check the updated data
    expect(Configuration.get('eventTypeId')).toBe(dataToUpdate.eventTypeId)

    // Check the previous data has not been lost
    expect(Configuration.get('isPublished')).toBe(data.isPublished)
    expect(Configuration.get('locale')).toBe(data.locale)
    expect(Configuration.get('organizationId')).toBe(data.organizationId)
    expect(Configuration.get('origin')).toBe(data.origin)
    expect(Configuration.get('pluginHost')).toBe(data.pluginHost)
    expect(Configuration.get('pluginId')).toBe(data.pluginId)
    expect(Configuration.get('pluginName')).toBe(data.pluginName)
    expect(Configuration.get('queryString')).toBe(data.queryString)
    expect(Configuration.get('sessionId')).toBe(data.sessionId)
  })
})