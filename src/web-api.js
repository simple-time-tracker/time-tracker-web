import {inject} from 'aurelia-framework';
import { PLATFORM } from "aurelia-framework";
import {ApplicationConfig} from './app_config'

@inject(ApplicationConfig)
export class WebAPI {

  constructor(configuration) {
    this.config = configuration;
  }

  getAbsolutePath() {
    return `${this.config.url}/`
  }
}
