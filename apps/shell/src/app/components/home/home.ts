import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModules } from '@libs/ui';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ...materialModules],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
