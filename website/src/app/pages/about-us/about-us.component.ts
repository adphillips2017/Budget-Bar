import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  @HostBinding('class') readonly clsName = 'app-about-us';
}