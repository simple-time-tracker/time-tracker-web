import { PLATFORM } from "aurelia-framework";
import 'bootstrap';

export class App {
  configureRouter(config, router) {
    config.title = 'Time tracker';
    config.map([
      { route: ['', 'timer'], name: 'timer',      moduleId: PLATFORM.moduleName('timer'),      nav: true, title: 'Timer' }
    ]);

    this.router = router;
  }
}
