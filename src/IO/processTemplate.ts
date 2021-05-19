import { Variables } from '../../types/common'

export default function processTemplate(content: string, variables: Variables): string {
  let node = content
  
  for (const variable in variables) {
    node = node.split(`{{${variable}}}`).join(String(variables[variable]));
    node = node.split(`{{ ${variable} }}`).join(String(variables[variable]));
  }

  return node
}