/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {Home} from './components/home/home';
import {About} from './components/about/about';
import {Blog} from './components/blog/blog';
import {Contact} from './components/contact/contact';

@Component({
  selector: 'app'
})
@RouteConfig([
    { path: '/', component: Blog, as: 'blog' },
    { path: '/work-and-projects', component: Blog, as: 'work-and-projects' },
    { path: '/mathijs', component: About, as: 'mathijs' },
    { path: '/contact', component: Contact, as: 'contact' }
])
@View({
  templateUrl: './app.html',
  directives: [RouterOutlet, RouterLink]
})
class App {}


bootstrap(App, [routerInjectables]);
