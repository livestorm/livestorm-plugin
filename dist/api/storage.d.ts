/**
    *
    * Store a value under a specific key. This storage is persistant and shared across participants of the event
    *
    *
    * @example Storage.setItem('key', 'value')
    *
    * @param key - The key that will allow you to retrieve the value
    * @param value - The value you want to store
    *
    * @returns a promise that resolves whenever the value has been successfuly stored
    *
    *
  */
export declare function setItem(key: string, value: string, options?: {
    scope: string;
}): Promise<Response>;
/**
    *
    * Retrieve a value set at a specific key. This storage is persistant and shared across participants of the event
    *
    *
    * @example Storage.getItem('key')
    *
    * @param key - The key at which you item is set
    *
    * @returns a promise that resolves with the stored value
    *
    *
  */
export declare function getItem(key: string, options?: {
    scope: string;
}): Promise<string>;
