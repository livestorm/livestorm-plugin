export default function processTemplate(content: string, variables: Record<string, unknown> = {}): string {
  if (variables.interpolateVariables === false) return content

  // Inject the variables in the global __VARIABLES__
  let injectedVariables
  try {
    injectedVariables = `<script type="text/javascript">window.__VARIABLES__ = ${JSON.stringify(variables)}</script>`
  } catch (e) {
    throw new Error('The variables could not been injected: ' + e)
  }

  // Replace all occurences of {{ variable }} with the variable value (empty if not found)
  const replacedOccurrences = content.replace(/({{)([0-9a-zA-Z-\s]+)(}})/g, (fullMatch, match1, match2) => {
    const variable = match2.trim()
    const value = variable in variables ? variables[variable] : ''
  
    if (typeof value === "object") {
      try {
        return JSON.stringify(value)
      } catch (e) {
        throw new Error(`The variable "${variable}" could not been replaced in the template: ${e}`)
      }
    }
    return String(value)
  })

  return `${injectedVariables}\n${replacedOccurrences}`
}
