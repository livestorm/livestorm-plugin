/**
 *
 * Store a value under a specific key. This storage is persistant and shared across participants of the event
 *
 * @example Storage.setItem('foo', 'bar')
 *
 * @doc https://developers.livestorm.co/docs/storage#setitem
 *
 */
export declare function setItem(key: string, value: string, options?: {
    scope: string;
}): Promise<Response>;
/**
 *
 * Retrieve a value set at a specific key. This storage is persistant and shared across participants of the event
 *
 * @example Storage.getItem('key')
 *
 * @doc https://developers.livestorm.co/docs/storage#getitem
 *
 */
export declare function getItem(key: string, options?: {
    scope: string;
}): Promise<string>;
