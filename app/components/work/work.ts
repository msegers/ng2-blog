import {Component, View, NgFor} from 'angular2/angular2';
import {BlogArticle} from '../blog/blog';

@Component({
  selector: 'blog'
})
@View({
  templateUrl: './components/blog/blog.html',
  directives: [NgFor]
})
export class Work {
    blogs: BlogArticle[] = [];
    
    constructor() {
        this.getBlogs();
    }
    
    getBlogs() {
        fetch('http://oneguyandacat.com/blog.php', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
            .then(response => response.json())
        .then(response => {
            for (var i = 0; i < response.length; i++) {
                for (var i2 = 0; i2 < response[i].tags.length; i2++) {
                    if (response[i].tags[i2] == "Work") {
                    this.blogs.push(new BlogArticle(response[i].title, response[i].content, new Date(Date.parse(response[i].date.date)), response[i].tags);
                }
            }
        })
        .catch((error) => {
          alert("Error " + error.message);
        });
    }
}