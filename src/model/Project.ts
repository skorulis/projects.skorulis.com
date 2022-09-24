export interface Project {
    id: Number
    name: string
    brief: string
    status: string
    sourceCode?: SourceCode[]
}

export interface SourceCode {
    title: string
    url: string
}

export enum Status {
    idea = "idea",
    started = "started",
    live = "live",
    hiatus = "hiatus",
    abandoned = "abandoned"
}