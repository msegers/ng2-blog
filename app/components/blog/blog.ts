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
        this.getBlogs();
    }
    
    getBlogs() {
        fetch('http://oneguyandacat.com/api/blog', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
            .then(response => response.json())
        .then(response => {
            for (var i = 0; i < response.blogs.length; i++) {
                this.blogs.push(new BlogArticle(response.blogs[i].title, response.blogs[i].content, new Date(Date.parse(response.blogs[i].date)), response.blogs[i].tags));
            }
        })
        .catch((error) => {
          alert("Error " + error.message);
        });
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