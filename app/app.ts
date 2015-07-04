/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {Home} from './components/home/home';
import {About} from './components/about/about';
<<<<<<< HEAD
import {Blog} from './components/blog/blog';
import {Contact} from './components/contact/contact';
=======
import {NamesList} from './services/NameList';
>>>>>>> 5fefc9bb215f7f8d95d2f60ca8cab6b5eac61335

@Component({
  selector: 'app',
  viewInjector: [NamesList]
})
@RouteConfig([
    { path: '/', component: Blog, as: 'blog' },
    { path: '/work-and-projects', component: Blog, as: 'work-and-projects' },
    { path: '/mathijs', component: About, as: 'mathijs' },
    { path: '/contact', component: Contact, as: 'contact' }
])
@View({
  templateUrl: './app.html?v=<%= VERSION %>',
  directives: [RouterOutlet, RouterLink]
})
class App {}


bootstrap(App, [routerInjectables]);
