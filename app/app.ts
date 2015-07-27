/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {Home} from './components/home/home';
import {Blog} from './components/blog/blog';
import {Work} from './components/work/work';
import {Me} from './components/about/about';
import {Contact} from './components/contact/contact';
//import {NamesList} from './services/NameList';

@Component({
  selector: 'app'
  //,viewInjector: [NamesList]
})
@RouteConfig([
    { path: '/', component: Blog, as: 'blog' },
    { path: '/work-and-projects', component: Work, as: 'work-and-projects' },
    { path: '/mathijs', component: Me, as: 'mathijs' },
    { path: '/contact', component: Contact, as: 'contact' }
])
@View({
  templateUrl: './app.html?v=<%= VERSION %>',
  directives: [RouterOutlet, RouterLink]
})
class App {
    constructor() {
        if (fetch != "undefined") {
            var e = document.getElementById("old-browser-content");
            if (e && e.parentNode) {
                e.parentNode.removeChild(e);
            }
        }
    }
}


bootstrap(App, [routerInjectables]);
