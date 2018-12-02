import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {EventAggregator} from 'aurelia-event-aggregator';
import {parse, format, differenceInSeconds} from 'date-fns'
import {UpdateList} from './messages';
import {WebAPI} from './web-api';

@inject(WebAPI, EventAggregator)
export class TimeEntriesList {
    currentPage = 1;
    totalPages = 1;
    entries = [];

    constructor(webApi, eventAggregator) {
        this.eventAggregator = eventAggregator;
        this.http = new HttpClient();
        this.http.configure(cfg => {
            cfg.withBaseUrl(webApi.getAbsolutePath());
        });

        eventAggregator.subscribe(UpdateList,  ( )=> {
            return Promise.all([
                this.loadTimeEntries()
            ]);
        });
    }

    created(owningView, myView) {
        return Promise.all([
            this.loadTimeEntries()
        ]);
    }
    

    loadTimeEntries() {
        this.http.fetch(`entries?page=${this.currentPage - 1}`)
            .then(response => response.json())
            .then(response => {
                this.entries = response.content;
                this.currentPage = response.number + 1;
                this.totalPages = response.totalPages;
            })
    }

    changePage(event) {
        this.currentPage = event.detail;
        this.loadTimeEntries();
    }

    deleteEntry(time_entry_id) {
        var self = this;
  
        this.http.delete('entries/' + time_entry_id)
            .then(response => {
              self.entries  = self.entries.filter(function(element) {
                  return element.id !== time_entry_id
              })
  
            })
      }


    getDifference(entry) {
        if (entry.endDate != null) {
            var diff = differenceInSeconds(entry.endDate, entry.startDate);
            return this.getDuration(diff);
        }

        else return '';
    }

    shortDateTime(date) {
        return date ? format(parse(date), ('MM/DD HH:mm')): '';
    }


    getDuration(diffInSeconds) {
        var hours = Math.floor(diffInSeconds / (60 * 60))
        diffInSeconds = diffInSeconds - (hours * 60 * 60)
        var minutes = Math.floor(diffInSeconds / 60)
        diffInSeconds = diffInSeconds - (minutes * 60)
        var seconds = diffInSeconds;

        return `${this.convertTimeUnitToString(hours)}:${this.convertTimeUnitToString(minutes)}:${this.convertTimeUnitToString(seconds)}`;
    }

    convertTimeUnitToString(unit) {
        if (('' + unit).length == 1)
            return '0' + unit;
        else return unit == '0' ? '00': unit
    }
}
