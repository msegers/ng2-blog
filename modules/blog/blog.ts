/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, For} from 'angular2/angular2';

/*@RouteConfig({
  path: '/blog', component: Blog, alias: 'blog'
})*/
@Component({
  selector: 'main'
})

//make template file
@View({
    templateUrl: "modules/blog/blog.html",
    directives: [For]
})

class Blog {
    blogs: BlogArticle[] = [];
    constructor() {
        var date = new Date();
        this.blogs.push(new BlogArticle("title", "content", date , ["tags","with","fags"]));
        this.blogs.push(new BlogArticle("title", "content", date , []));
    }
}

class BlogArticle {
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

bootstrap(Blog);