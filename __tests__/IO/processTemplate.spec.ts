import processTemplate from '../../src/IO/processTemplate'

describe('processTemplate', () => {
  it('computes all variables', () => {
    const template = '<div>{{ var }} {{ var2 }}</div>'

    const processedTemplate = processTemplate(template, { var2: 'coucou' })
    expect(processedTemplate).toStrictEqual('<div>{{ var }} coucou</div>')
  })

  it('adds internal variables on top', () => {
    const template = '<div>{{ style }}</div>'

    const processedTemplate = processTemplate(template, {})
    expect(processedTemplate.includes('border-radius')).toStrictEqual(true)
  })
})
