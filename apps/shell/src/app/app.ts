import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { materialModules } from '@libs/ui';

@Component({
  imports: [RouterModule, ...materialModules],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'shell';
}
