import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as store from '../../../@shared/store';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import * as createActions from '../../../@shared/store/actions/create.action';

@Component({
  selector: 'app-create',
  template: `
    <h1>Thought Create</h1>
    <p>
      <a routerLink="/thoughts">Back</a>
    </p>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input
        type="text"
        placeholder="Your name"
        required="required"
        formControlName="name">
      <div *ngIf="name.invalid && submitted">
        <label for="" class="error" *ngIf="name.errors.required">It is a field required</label>
      </div>
      <br>
      <br>
      <textarea
          name="thought"
          placeholder="Your thought"
          required="required"
          formControlName="thought"
      ></textarea>
      <div *ngIf="thought.invalid && submitted">
        <label for="" class="error" *ngIf="thought.errors.required">It is a field required</label>
      </div>
      <br>
      <br>
      <button type="submit">Save</button>
    </form>
  `,
  styles: []
})
export class CreateComponent implements OnInit {
  public submitted = false;
  public form: FormGroup;
  public name: AbstractControl;
  public thought: AbstractControl;

  private createState$ = this.appState$.select(store.getCreateState);

  private createLoaded$;

  constructor(
    private fb: FormBuilder,
    protected appState$: Store<store.State>
  ) { }

  ngOnInit() {
    this.initForm();
  }

  public initForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      thought: ['', Validators.required],
    });
    this.name = this.form.controls['name'];
    this.thought = this.form.controls['thought'];
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.form.valid) {
      this.appState$.dispatch(new createActions.LoadAction({
        name: this.name.value,
        thought: this.thought.value,
      }));
      this.subscribeToCreateChanges();
    }
  }

  private subscribeToCreateChanges() {
    if (this.createLoaded$) {
      return;
    }

    this.createLoaded$ = this.createState$.subscribe(state => {
      if (!state.loading) {
        this.form.reset();
        this.submitted = false;
      }
    });
  }

}
