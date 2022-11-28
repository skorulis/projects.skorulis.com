export interface Project {
    id: Number
    icon: string
    name: string
    shortBrief: string
    status: string
    lastUpdate: string
    startDate?: string
    images: string[]
    sourceCode?: SourceCode[]
}

export interface SourceCode {
    title: string
    url: string
}

export enum Status {
    idea = "idea",
    started = "started",
    preAlpha = "preAlpha",
    alpha = "alpha",
    beta = "beta",
    live = "live",
    hiatus = "hiatus",
    abandoned = "abandoned"

}