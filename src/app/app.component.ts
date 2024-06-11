import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  title = 'helloWorldAngular';
  myModal: any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  
    this.myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
      keyboard: false
    });


    $('#bu').on('click', () => {
      this.myModal.show();
    });

  }



}
