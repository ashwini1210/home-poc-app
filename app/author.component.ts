import {Component} from "angular2/core"
import {AuthorService} from "./author.service"

@Component({
    selector:"author",
    template:`
    <h1 style="color:blue">Author</h1>
    <h2>{{title}}</h2>
    <ul>
        <li *ngFor="#author of authors">{{author}}</li>
    </ul>
    `,
    providers:[AuthorService]
})
export class AuthorComponent{
    title= "This is list of author"
    authors;

    constructor(authorService : AuthorService){
        this.authors = authorService.getAuthor()
    }
}