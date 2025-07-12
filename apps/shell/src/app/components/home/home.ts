import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModules } from '@libs/ui';
import { Button } from '@libs/shared';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

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
  router = inject(Router)

  handleClick(name: string) {
    if (name.length > 0) {
      this.cookieService.set('userName', name);
      this.router.navigate(['/dashboard']);
    }
  }
}
