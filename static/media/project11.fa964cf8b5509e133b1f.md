### Brief

In the spirit of publically publishing data, this app would collect automated metrics from various sources and publish them to metrics.skorulis.com.

### Metrics

* Github commits
* Github lines of code
* Repository counts
* Github stars
* Rescue time data
* Steps
* Travel
* Beer counts
* App analytics


### Plan

* Write a swift script which connects to the github API and pulls down a few bits of info
* Store that data on a weekly basis
* Create a web FE to show the fetched data.


### Challenges

* Should I focus on this working on a larger scale?
* I stuck at web FE so that could cause me issues. I could focus on a simple SwiftUI FE first.
    * I could try using this SwiftUI in web but due to the majority of it being charts I think I would run into major issues