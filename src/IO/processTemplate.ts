import style from '../Assets/baseStyle'

export default function processTemplate(content: string, userVariables: any) {
  let node = content
  
  const variables = {
    style,
    ...userVariables
  }
 
  for (let variable in variables) {
    node = node.split(`{{${variable}}}`).join(variables[variable]);
    node = node.split(`{{ ${variable} }}`).join(variables[variable]);
  }

  return node
}