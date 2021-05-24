import { ConfigurationData } from '../src/types/configuration'

import Configuration from '../src/configuration'

describe('Configuration', () => {
  const data: ConfigurationData = {
    'eventTypeId': 'eventTypeId',
    'organizationId': 'organizationId',
    'pluginHost': 'pluginHost',
    'pluginId': 'pluginId',
    'pluginName': 'pluginName',
    'sessionId': 'sessionId',
  } as ConfigurationData

  it('should store accessible data', () => {
    Configuration.set(data)

    // eventTypeId
    expect(Configuration.eventTypeId).toBe('eventTypeId')
    
    // organizationId
    expect(Configuration.organizationId).toBe('organizationId')

    // pluginHost
    expect(Configuration.pluginHost).toBe('pluginHost')
    
    // pluginId
    expect(Configuration.pluginId).toBe('pluginId')

    // pluginName
    expect(Configuration.pluginName).toBe('pluginName')
    
    // sessionId
    expect(Configuration.sessionId).toBe('sessionId')

    
  })
})