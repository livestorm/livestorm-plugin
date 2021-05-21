export default function processTemplate(content: string, variables: Record<string, unknown>): string {
  let node = content
  
  for (const variable in variables) {
    node = node.split(`{{${variable}}}`).join(String(variables[variable]));
    node = node.split(`{{ ${variable} }}`).join(String(variables[variable]));
  }

  return node
}