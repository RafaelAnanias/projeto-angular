import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../../components/btn-primary/btn-primary.component';


@Component({
  selector: 'newsletter-form',
  standalone: true,
  imports: [
    BtnPrimaryComponent
  ],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {
  

  }

