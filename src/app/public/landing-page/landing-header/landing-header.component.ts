import {
  ChangeDetectionStrategy,
  Component,
  QueryList,
  TemplateRef,
  ViewChildren,
  inject,
  Input, 
} from '@angular/core';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { TemplateService } from '../TemplateService';

@Component({
  selector: 'app-landing-header',
  standalone: true,
  imports: [NgTemplateOutlet, AsyncPipe],
  templateUrl: './landing-header.component.html',
  styleUrl: './landing-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingHeaderComponent {

  template = inject(TemplateService).template;
  constructor() {}
}
