/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

/*@RouteConfig({
  path: '/contact', component: Contact, alias: 'contact'
})*/
@Component({
  selector: 'main'
})
@View({
  template: '<section class="contact">Hello {{ name }}</section>'
})
class Contact {
    name: string;
    constructor() {
        this.name = 'Contact';
    }
}