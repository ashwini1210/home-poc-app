import {Component} from 'angular2/core' 
import {CourseService} from './course.service'

@Component({
    selector: "courses",
    template: `
        <h1 style="color:red">Courses</h1>
        <img src="./download.jpg" >
        <H2>{{title}}</H2>
        <ul>
            <li *ngFor="#course of courses">{{course}}</li>
        </ul>
        `,
        providers:[CourseService]
                
})
export class CourseComponent {
    title = "This is title of courses"
    courses;

    constructor(courseService : CourseService) {
        this.courses = courseService.getCourses()
    }
}