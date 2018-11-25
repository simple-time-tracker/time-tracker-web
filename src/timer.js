import {inject} from 'aurelia-framework';
import {computedFrom} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {EventAggregator} from 'aurelia-event-aggregator';
import {UpdateList} from './messages';
import {WebAPI} from './web-api';

@inject(HttpClient, WebAPI, EventAggregator)
export class Timer {
    descriptionPlaceholder = 'What are you working on?';
    self = this;
    currentProject = null;
    currentDescription = '';
    currentlyTrackingEntry = null;
    projects = [];

    constructor(httpClient, webApi, eventAggregator) {
        httpClient.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl(webApi.getAbsolutePath());
        });
        this.http = httpClient;
        this.eventAggregator = eventAggregator;
    }

    created(owningView, myView) {
        return Promise.all([
            this.loadProjects(),
            this.loadCurrentlyTrackingEntry(),
        ]);
    }

    loadCurrentlyTrackingEntry() {
        this.http.fetch("entries/current")
            .then(response => {
                if (response.status == 200) {
                    return response.json()
                }
                return null;
            }).then(current => {
            this.currentlyTrackingEntry = current;
            if (current) {
                this.currentDescription = current.description;
            }
        })
    }

    loadProjects() {
        this.http.fetch('projects/active')
            .then(response => response.json())
            .then(projects => {
                if (projects.length > 0) {
                    this.projects = projects;
                }
                else this.projects = [{"id": null, "name": "Select project"}]
            })
    }

    @computedFrom('currentlyTrackingEntry')
    get isCurrentlyTracking() {
        return this.currentlyTrackingEntry != null
    }

    @computedFrom('projects')
    get isProjectSelected() {
        if (this.projects.length > 1) {
            return true;
        }
        else {
            if (this.projects.length == 1) {
                return this.projects[0].id != null;
            }
            return false;
        }
    }

    @computedFrom('currentlyTrackingEntry')
    get currentlyTrackingEntryMessage() {
        if (this.currentlyTrackingEntry != null) {
            return `Currently working on ${this.currentlyTrackingEntry.project.name} project.
                    Current task: ${this.currentlyTrackingEntry.description}.
                    Start date  ${(new Date(this.currentlyTrackingEntry.startDate).toLocaleString())}`
        }
        else return '';
    }

    @computedFrom('isCurrentlyTracking')
    get currentToggleLabel() {
        if (this.isCurrentlyTracking) {
            return "Stop tracking"
        }
        else return "Start tracking"
    }

    getStartUrl() {
        return 'entries/start/' + this.currentProject + "?description=" + this.currentDescription
    }

    toggleTracking() {
        if (this.isCurrentlyTracking)
            this.stop();
        else this.start();
    }

    start() {
        this.http.fetch(this.getStartUrl(), {
            method: 'post'
        }).then(response => {
            if (response.status == 201) {
                this.loadCurrentlyTrackingEntry();
                this.eventAggregator.publish(new UpdateList);
            }
        })
    }

    stop() {
        this.http.fetch('entries/stop', {
            method: 'post'
        }).then(response => {
            if (response.status == 200) {
                this.currentDescription = '';
                this.loadCurrentlyTrackingEntry();
                this.eventAggregator.publish(new UpdateList);
            }
        })
    }

}
