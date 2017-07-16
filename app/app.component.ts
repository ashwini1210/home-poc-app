import {Component} from 'angular2/core';
import {CourseComponent} from './courses.component'

@Component({
    selector: 'home-poc-app',
    template: `<h1>Home POC Application</h1>
               <courses></courses>`,
  directives: [CourseComponent]
})
export class AppComponent { }