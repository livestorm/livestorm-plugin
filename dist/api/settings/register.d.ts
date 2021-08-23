/**
 * Allows to register a settings application
 *
 * Think of this function as the equivalent of watching the load event of the window to start your app
 *
 * @example Livestorm.register(() => {
 *  // Your code goes here
 * })
 *
 * @param main - The code of your app
 *
 */
export default function register(main: () => unknown): void;
