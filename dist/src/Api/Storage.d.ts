declare const _default: {
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
    setItem(key: string, value: string): Promise<Response>;
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
    getItem(key: string): Promise<string>;
};
export default _default;
