import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TodoListComponent } from '@opg-tools/todo-list';

@Component({
  imports: [NxWelcomeComponent, RouterModule, TodoListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'opg-tools';
}
