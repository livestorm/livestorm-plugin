export interface Breakpoints {
    // 640px
    "sm"?: string,

    // 768px
    "md"?: string,

    // 1024px  
    "lg"?: string,

    // 1280px
    "xl"?: string
}
export interface BackgroundColor {
    hue: number,
    saturation: number,
}

export enum AppSelectors {
    RoomContent = '[data-testid="room-content"]'
}

