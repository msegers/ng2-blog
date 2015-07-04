import {Component, View, NgFor} from 'angular2/angular2';
import {forms, required, formDirectives, materialDesign, FormBuilder} from 'angular2/forms';

@Component({
  selector: 'contact',
})
@View({
  templateUrl: './components/contact/contact.html',
  directives: [NgFor, forms]
})
export class Contact {
  contactForm:ControlGroup;
  builder:FormBuilder;
 
  constructor(b:FormBuilder) {
    this.builder = b;
 
    this.myForm = b.group({
      name: ["", required], // required
      email: ["", required] // optional
    });
 
    // save changes to Firebase as the form updates
//    this.myForm.valueChanges.subscribe(function(value) {
//      this.ref.set(value);
//    }.bind(this));
  }
}

function zipCodeValidator(control) {
  if (! control.value.match(/\d\d\d\d\d(-\d\d\d\d)?/)){
    return {invalidZipCode: true};
  }
}