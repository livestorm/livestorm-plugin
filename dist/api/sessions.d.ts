import { Session } from '../types/session';
/**
  * Returns the current session information
  *
  * @example await Livestorm.Session.current()
  *
  * @returns a promise that resolves with the session information as a hash
  *
  */
export declare function current(): Promise<Session>;
