import {Component} from 'angular2/core';
import {CourseComponent} from './course.component'
import {AuthorComponent} from './author.component'

@Component({
    selector: 'home-poc-app',
    template: `<h1>Home POC Application</h1>
               <courses></courses> 
               <author></author>
               `,
  directives: [CourseComponent,AuthorComponent]
})
export class AppComponent { }