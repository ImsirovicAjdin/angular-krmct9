import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
/*
template-driven forms 
vs
reactive (model-driven) forms

--

Template-driven:
- easy to use
- similar to angularJS
- two-way data binding -> minimal component code
- Automatically tracks form and input element state

vs

Reactive (model-driven) forms:
- More flexible -> more complex scenarios
- Immutable data model 
- Easier to perform an action on a value change
- Reactive transformations -> DebounceTime or DistinctUntilChanged
- Easily add input elements dynamically
- Easier unit testing

--

Angular Form Building Blocks used by both tdf and rmdf approaches:
- FormGroup, and
- FormControl

--

FormControl tracks the value and state of an individual input element
FormGroup tracks the value and state of a group of form controls. A form itself is managed as a FormGroup

--

What is a Form Model exactly?

- A Form Model is a data structure that represents the HTML form. 
- Form Model retains form state, such as dirty or valid. 
- It retains the user entries in its **value** property. 
- It retains child controls (FormControls), and nested FormGroups along with their state and value
- Form Model is the same for template-driven and reactive forms, but how it is created is different

- 

In tdf, we use HTML for template's:
- form element
- input element(s)
- data binding
- validation rules (attributes)
- validation error messages
- Angular automatically generates the associated Form Model

We can then use the Form Model as needed. In the Component Class, we define properties for data binding (Data Model).
We also implement methods for form operations, such as submit
Two-way data binding is a key part of template-driven forms, as it keeps all of the data in the form in synchronization with properties on the component class. 

Reactive forms shift the responsibility for creating the form model to the component class. WE DEFINE the Form Model by creating the instances of the FormGroup and FormControl building blocks in our component class. We define validation rules in the class. We can even handle display of validation error messages in the class. We manage the data for the form ( the Data Model) in the class. No data binding in the HTML! And the class provides methods for form processing, such as handling the submit. We still define the visual parts of the form in the template: Form element and input element(s). We then bind these input elements to the Form Model defined in the component class. So instead of binding the input elements to the Data Model properties directly, we bind to the form model we build in our component class. 

Form Directives
Template-driven and reactive forms use entirely different sets of directives for binding the FormControl and FormGroup building blocks to the form and input elements in the template. 

When using template-driven forms, we first import the form's module to bring in the appropriate set of directives. This includes ngForm to access the form model Angular generates for us, ngModel for two-way binding and to access the input element state defined in the generated form model, and ngModelGroup for grouping input elements within the form. When we add a form element to our template, Angular automatically assigns the ngForm directive to that form. 

Angular creates the form model starting with the root FormGroup instance and automatically binds it to the form to track the form value and state. We never have to apply the ngForm directive ourselves. If we want to access the form model state information in our template, we export the ngForm directive into a template reference variable like this. 

<form #signupForm="ngForm">

Here we use a hash to define a template reference variable called #signupForm and set it equal to ngForm. This variable then references the form's root FormGroup instance. Anytime we want to access the form model, we use this template reference variable. In this example, we check the valid property of the FormGroup instance to disable the Save button if the form is not valid. 

https://imgur.com/a/5uaKBV9

<form (ngSubmit)="save()" #signupForm="ngForm">
	<button type="submit" [disabled]="!signupForm.valid"> <!-- <----this here! -->
		Save
	</button>
</form>

We'll see this in context in the upcoming demo. If you've done any two-way data binding in Angular, you are already familiar with the ngModel directive. 

https://imgur.com/5KhywTS

We use this directive on each input element to keep the component class property in sync with the user-entered value. In this example, any change to the firstName input element is automatically reflected in the firstName property of the customer defined in the component class. 

<form (ngSubmit)="save()">
	<input id="firstNameId" type="text" [(ngModel)]="customer.firstName" name="firstName" #firstNameVar="ngModel" />
</form>


When we add an ngModel to an input element within a form, Angular automatically creates a FormControl instance and adds it to the form model using the input element's name as the key, hence the reason we need the name attribute here. Angular uses that name attribute for the FormControl instance key. 

https://imgur.com/qaruXpm

The FormControl instance tracks the input element's value and state. We can access the FormControl state by exporting the ngModel directive into a template reference variable. Here we use a hash to define a template reference variable named firstNameVar and set it equal to ngModel. 

https://imgur.com/sTEGOEt

This variable then references the FormControl instance for this input element. We can use the template reference variable to access the FormControl state. For example, we can use the valid property of the FormControl to determine when to display validation messages. We'll see that in the upcoming demo. To use reactive forms, we first input the ReactiveFormsModule to bring in its appropriate set of directives. As you can see, this is an entirely different set of directives than for the template-driven approach. 

https://imgur.com/dWuL60Z

Notice how close these directive names map to the FormGroup and FormControl building blocks. With the reactive forms approach, Angular does not create a form model for us. Rather, we create it ourselves in our component class. We then use these directives in the template to bind the form and input elements to our defined form model. So for both techniques, building an Angular form requires building a template with the appropriate set of directives. Let's take a closer look.
*/