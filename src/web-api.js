import {inject} from 'aurelia-framework';
import { PLATFORM } from "aurelia-framework";
import {ApplicationConfig} from './app_config'

@inject(ApplicationConfig)
export class WebAPI {

  constructor(configuration) {
    this.config = configuration;
  }

  getRelativePath() {
    return this.config.url
  }

  getAbsolutePath() {
    return `http://${this.config.host}:${this.config.port}${this.config.url}/`
  }
}
