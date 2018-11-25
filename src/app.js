import { PLATFORM } from "aurelia-framework";
import 'bootstrap';

export class App {
  configureRouter(config, router) {
    config.title = 'Time tracker';
    config.map([
      { route: ['', 'time-tracker'], name: 'time-tracker',      moduleId: PLATFORM.moduleName('time-tracker'),      nav: true, title: 'Timer' }
    ]);

    this.router = router;
  }
}
