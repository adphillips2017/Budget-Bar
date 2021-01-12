<<<<<<< HEAD
import { Component, HostBinding } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> develop

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
<<<<<<< HEAD
export class AppComponent {
  @HostBinding('class') readonly clsName = 'app-login';
  title = 'budgi';
=======
export class AppComponent implements OnInit {
  title = 'budgi-ui';

  ngOnInit(): void {}

>>>>>>> develop
}
