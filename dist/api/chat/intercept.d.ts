/**
 *
 * Intercept Chat messages matching a specific regex.
 * Once intercepted, the message will not be displayed in the chat.
 * Useful to filter language or create custom chat commands.
 *
 * @example Chat.intercept(/lol/, (message) => console.log(`someone said ${message}`))
 *
 * @doc https://developers.livestorm.co/docs/chat#intercept
 *
 */
export default function Intercept(matcher: RegExp, callback: (message: Record<string, unknown>) => void): void;
