import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {
  private _template = new BehaviorSubject<TemplateRef<void> | null>(null);
  public template = this._template.asObservable();

  constructor() {}

  setTemplate(template: TemplateRef<void> | null) {
    this._template.next(template);
  }
}