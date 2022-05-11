import processTemplate from '../../src/io/processTemplate'

describe('processTemplate injects variables in the template window', () => {
  it('should preprend a script with injected variables', () => {
    const variables = {
      foo: 'bar',
    }

    expect(processTemplate('', variables)).toContain(`<script type="text/javascript">window.__VARIABLES__ = ${JSON.stringify(variables)}</script>`)
  })

  it('should NOT inject variables is explicitely asked', () => {
    const variables = {
      a: 'b',
      c: 'd',
    }
    const variableNotToInject = {
      e: {
        'value': 'f',
        'inject': false
      }
    }

    expect(processTemplate('', {
      ...variables,
      ...variableNotToInject
    })).toContain(`<script type="text/javascript">window.__VARIABLES__ = ${JSON.stringify(variables)}</script>`)
  })


  it('should inject variables is explicitely asked', () => {
    const variables = {
      a: 'b',
      c: 'd',
    }
    const variableNotToInject = {
      e: {
        'value': 'f',
        'inject': true
      }
    }

    expect(processTemplate('', {
      ...variables,
      ...variableNotToInject
    })).toContain(`<script type="text/javascript">window.__VARIABLES__ = ${JSON.stringify({
      ...variables,
      e: 'f'
    })}</script>`)
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

  it('should NOT replace not found variables', () => {
    const template = '<div>{{ foo }}</div>'
    expect(processTemplate(template)).toContain("<div>{{ foo }}</div>")
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

  it('should replace variables containing underscores', () => {
    const variables = {
      foo: 'bar',
      qux_qux: 'baz',
      corge_corge: 'quux',
    }
    const template = '<div>{{ foo }} {{ qux_qux }} {{ corge_corge }}</div>'
    expect(processTemplate(template, variables)).toContain("<div>bar baz quux</div>")
  })

  it('should replace occurences when explicitely asked', () => {
    const variables = {
      foo: 'bar',
      baz: 'qux',
      quux: 'corge',
    }
    const variableNotToReplace = {
      grault: {
        'value': 'garply',
        'replace': true
      },
      waldo: {
        'value': 'fred',
        'replace': true
      }
    }
    const template = '<div>{{ foo }} {{ baz}} {{ quux }} {{ grault }} {{ waldo }}</div>'
    expect(processTemplate(template, {
      ...variables,
      ...variableNotToReplace
    })).toContain("<div>bar qux corge garply fred</div>")
  })

  it('should NOT replace occurences when explicitely asked', () => {
    const variables = {
      foo: 'bar',
      baz: 'qux',
      quux: 'corge',
    }
    const variableNotToReplace = {
      grault: {
        'value': 'garply',
        'replace': true
      },
      waldo: {
        'value': 'fred',
        'replace': false
      }
    }
    const template = '<div>{{ foo }} {{ baz}} {{ quux }} {{ grault }} {{ waldo }}</div>'
    expect(processTemplate(template, {
      ...variables,
      ...variableNotToReplace
    })).toContain("<div>bar qux corge garply {{ waldo }}</div>")
  })
})
