import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


/**
 * 怎麼串聯檔案，就是在這邊宣告起來的
*/
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'helloWorldAngular';
}
