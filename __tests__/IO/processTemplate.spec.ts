import processTemplate from '../../src/io/processTemplate'

describe('processTemplate', () => {
  it('computes all variables', () => {
    const template = '<div>{{ var }} {{ var2 }}</div>'

    const processedTemplate = processTemplate(template, { var2: 'coucou' })
    expect(processedTemplate).toStrictEqual('<div>{{ var }} coucou</div>')
  })
})
