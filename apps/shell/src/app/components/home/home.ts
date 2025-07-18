import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModules } from '@libs/ui';
import { Button } from '@libs/shared';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    ...materialModules,
    Button
  ],
  providers: [CookieService],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  cookieService = inject(CookieService);

  handleClick(name: string) {
    if (name.length > 0) {
      this.cookieService.set('userName', name);
      window.location.href = 'http://localhost:4201/dashboard';
    }
  }
}
