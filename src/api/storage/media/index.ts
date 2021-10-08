import Configuration  from "@/configuration"

interface UploadParams {
    base64: string;
    fileName: string
}

export async function upload(params: UploadParams): Promise<string> {
  const request = `${Configuration.pluginHost}/api/v1/medias`
  const [ fileName, fileExtension ] = params.fileName.split('.')

  const response = await fetch(
    request,
    {
      method: 'POST',
      body: JSON.stringify({
        base64: params.base64,
        extension: fileExtension,
        filename: fileName
      }),
      headers: { 'Content-Type': 'Application/JSON', }
    }
  )
  const url = await response.json()

  return url
}