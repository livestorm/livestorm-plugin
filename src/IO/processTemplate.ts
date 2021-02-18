export default function processTemplate(content: string, variables: any) {
  let node = content
  
  for (let variable in variables) {
    node = node.split(`{{${variable}}}`).join(variables[variable]);
    node = node.split(`{{ ${variable} }}`).join(variables[variable]);
  }

  return node
}