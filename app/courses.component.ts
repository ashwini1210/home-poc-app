import {Component} from 'angular2/core' 

@Component({
    selector: "courses",
    template: `
        <H1>Courses</H1>
        <H2>{{title}}</H2>
        <ul>
            <li *ngFor="#course of courses">{{course}}</li>
        </ul>
        `
                
})
export class CourseComponent {
    title = "This is title of courses"
    courses = ["course1", "course2", "course3", "course4"]
}