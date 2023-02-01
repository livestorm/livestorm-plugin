import { SidebarPanelOptions, SidebarPanelWrapper } from '../../types/sidebar';
export declare function registerPanel(options: SidebarPanelOptions): Promise<SidebarPanelWrapper>;
export declare function focusBuiltInPanel(tab: 'chat' | 'people' | 'qa' | 'polls'): Promise<void>;
