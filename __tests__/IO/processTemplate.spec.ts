import processTemplate from '../../src/io/processTemplate'

describe('processTemplate injects variables in the template window', () => {
  it('should preprend a script with injected variables', () => {
    const variables = {
      foo: 'bar',
    }

    expect(processTemplate('', variables)).toContain("<script type=\"text/javascript\">window.__VARIABLES__ = {\"foo\":\"bar\"}</script>")
  })
})

describe('processTemplate replaces occurrences', () => {
  it('should replace and set primitive content', () => {
    const variables = {
      foo: 'bar',
      baz: 'qux',
      quux: 1,
      corge: null,
      grault: false,
    }

    const template = '<div>{{ foo }} {{ baz}} {{ quux }} {{ corge }} {{ grault }}</div>'
    expect(processTemplate(template, variables)).toContain("<div>bar qux 1 null false</div>")
  })

  it('should replace and set non-primitive content', () => {
    const variables = {
      foo: [1, 2, 3],
    }
    const template = 'const n = {{ foo }}</div>'
    expect(processTemplate(template, variables)).toContain("const n = [1,2,3]")
  })

  it('should replace not found variables with empty value', () => {
    const template = '<div>{{ foo }}</div>'
    expect(processTemplate(template)).toContain("<div></div>")
  })

  it('should replace occurences containing spaces', () => {
    const variables = {
      foo: 'bar',
      baz: 'qux',
      quux: 'corge',
      grault: 'garply',
      waldo: 'fred',
    }
    const template = '<div>{{ foo }} {{ baz}} {{quux}} {{     grault}} {{waldo    }}</div>'
    expect(processTemplate(template, variables)).toContain("<div>bar qux corge garply fred</div>")
  })
})
