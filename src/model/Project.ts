export interface Project {
    id: Number
    icon: string
    name: string
    shortBrief: string
    brief: string
    status: string
    nextSteps: string
    tech: string
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