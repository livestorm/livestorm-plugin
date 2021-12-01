interface UploadParams {
    base64: string;
    fileName: string;
}
export declare function upload(params: UploadParams): Promise<string>;
export {};
