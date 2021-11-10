export interface PanelOptions {
    label: string;
    imageSource?: string;
    icon?: string;
    template: string;
    slug: string;
    variables?: Record<string, unknown>;
}
