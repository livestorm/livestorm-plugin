import { ListenableIframeParams } from '../../types/listenableIframe';
/**
 *
 * Register a panel in the settings of an event.
 * This will allow moderators to configure your plugin from their Livestorm dashboard
 *
 * @example Settings.Event.registerPanel({ template, variables, onMessage })
 *
 * @doc https://developers.livestorm.co/docs/settings
 *
 */
export declare function registerPanel(data: ListenableIframeParams): Promise<import("../../types/listenableIframe").ListenableIframe>;
