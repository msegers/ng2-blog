import {Component, View, NgFor} from 'angular2/angular2';


@Component({
  selector: 'component-2',
})
@View({
  templateUrl: './components/blog/blog.html',
  directives: [NgFor]
})
export class Contact {
  
}