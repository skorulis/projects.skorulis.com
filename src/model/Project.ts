export interface Project {
    id: Number
    name: string
    brief: string
    status: string
    sourceCode?: string
}

export enum Status {
    idea = "idea",
    started = "started",
    live = "live",
    hiatus = "hiatus",
    abandoned = "abandoned"
}