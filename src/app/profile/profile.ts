import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  userName: string | null = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    /* this.userName = this.route.snapshot.paramMap.get('name');

  if (this.userName) {
    console.log('Name:', this.userName);
  } else {
    console.log('Name param not found');
  }
*/

    /* this.route.queryParams.subscribe((params) => {
      this.userName = params['name'];
      console.log(this.userName);
    });*/

    this.route.data.subscribe((data) => {
      this.userName = data['name'];
    });
  }
}
