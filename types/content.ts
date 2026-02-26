// Global Layout Types

export interface LogoConfig {
    src: string
    alt: string
    width?: number
    height?: number
}

export interface NavigationItem {
    id: string
    label: string
    route: string
}

export interface LayoutConfig {
    logo: LogoConfig
    navigation: NavigationItem[]
    showScrollIndicator: boolean
    footerText: string
}

// 3D Scene Configuration

export type SceneType = 'blender-static' | 'shader-river'

export interface SceneConfig {
    type: SceneType
    modelPath?: string // if blender scene
    shaderEnabled?: boolean
    shaderIntensity?: number
}

// Section Models

export interface HeroSection {
    heading: string
    subheading?: string
}

export interface AboutSection {
    title: string
    paragraphs: string[]
}

export interface Partner {
    id: string
    name: string
    role: string
    image: {
        src: string
        alt: string
    }
    bio: string[]
}

export interface ContactSection {
    title: string
    phone?: string
    email?: string
}

// Route Definition

export interface PageDefinition {
    route: string
    scene?: SceneConfig
    hero?: HeroSection
    about?: AboutSection
    partners?: Partner[]
    contact?: ContactSection
}

// Full Site Model

export interface SiteContent {
    layout: LayoutConfig
    pages: PageDefinition[]
}
