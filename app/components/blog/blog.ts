import {Component, View, NgFor} from 'angular2/angular2';

@Component({
  selector: 'blog'
})
@View({
  templateUrl: './components/blog/blog.html',
  directives: [NgFor]
})
export class Blog {
    blogs: BlogArticle[] = [];
        constructor() {
        var date = new Date();
        this.blogs.push(new BlogArticle("title", "content", date , ["tags","with","fags"]));
        this.blogs.push(new BlogArticle("title", "content", date , []));
    }
}

export class BlogArticle {
    tags: string[] = [];
    content: string;
    title: string;
    date: Date;
    constructor(title:string, content:string, date:Date, tags:string[]) {
        if (tags instanceof Array){
            this.tags = tags;    
        }
        this.title = title;
        this.content = content;
        this.date = date;
    }
    
    
}