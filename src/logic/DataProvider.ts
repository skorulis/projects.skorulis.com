import { Project } from "../model/Project"
import data from "../data/projects.json"

export class DataProvider {

    // Computed values

    projects(): Project[] {
        return data
    }

    sortedProjects(): Project[] {
        return this.projects().sort((a,b) => {
            let aDate = new Date(a.lastUpdate)
            let bDate = new Date(b.lastUpdate)
            return bDate.getTime() - aDate.getTime()
        })
    }

    project(id: number): Project | undefined {
        let matches = this.projects().filter(x => x.id === id )
        if (matches.length === 0) {
            return undefined
        }
        return matches[0];
    }
}