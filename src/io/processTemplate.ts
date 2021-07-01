export default function processTemplate(content: string, variables: Record<string, unknown> = {}): string {
  // Inject the variables in the global __VARIABLES__
  const injectedVariables = `<script type="text/javascript">window.__VARIABLES__ = ${JSON.stringify(variables)}</script>`

  // Replace all occurences of {{ variable }} with the variable value (empty if not found)
  const replacedOccurrences = content.replace(/({{)([0-9a-zA-Z-\s]+)(}})/g, (fullMatch, match1, match2) => {
    const variable = match2.trim()
    const value = variable in variables ? variables[variable] : ''
  
    if (typeof value === "object") return JSON.stringify(value)
    return String(value)
  })

  return `${injectedVariables}\n${replacedOccurrences}`
}
