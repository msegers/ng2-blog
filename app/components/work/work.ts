import {Component, View, NgFor} from 'angular2/angular2';

@Component({
  selector: 'work'
})
@View({
  templateUrl: './components/work/work.html',
  directives: [NgFor]
})
export class Work {
    work: WorkItem[] = [];
    
    constructor() {
        this.getWork();
    }
    
    getWork() {
        fetch('http://oneguyandacat.com/api/work', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
            .then(response => response.json())
        .then(response => {
            for (var i = 0; i < response.length; i++) {
                this.work.push(new WorkItem(response[i].title, response[i].content));
            }
        })
        .catch((error) => {
          alert("Error " + error.message);
        });
    }
}

export class WorkItem {
    content: string;
    title: string;
    constructor(title:string, content:string) {
        this.title = title;
        this.content = content;
    }
    
    
    
}