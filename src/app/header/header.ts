import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PageNotFound } from '../page-not-found/page-not-found';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
