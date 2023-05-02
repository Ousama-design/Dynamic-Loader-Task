import { Component} from '@angular/core';
import { ComponentA } from './component-a/component-a.component';
import { ComponentB } from './component-b/component-b.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentTypeMap: { [key: string]: any } = {
    ComponentA: ComponentA,
    ComponentB: ComponentB,
  }
}
