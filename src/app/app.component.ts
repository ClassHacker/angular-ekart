import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-ekart-16';

  myObservable = new Observable(observer => {
    console.log("Observable starts");
    observer.next("a");
    observer.next("j");
    observer.next("a");
    observer.next("y");
  });

  ngOnInit () : void {
    this.myObservable.subscribe((value) => console.log(value));
  }
}
