import { DefaultButtonOptions } from '../types/button';
export default function addButtonDefaultListeners<T extends DefaultButtonOptions>(eventName: string, { onClick, ...options }: T): string;
