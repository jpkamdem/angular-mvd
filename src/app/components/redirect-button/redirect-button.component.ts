import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'redirect-button',
  imports: [RouterLink],
  templateUrl: './redirect-button.component.html',
  styles: ``,
})
export class RedirectButtonComponent {
  link = input.required<string>();
}
