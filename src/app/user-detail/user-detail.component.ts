import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  getUser(): void {
    const userId = this.route.snapshot.paramMap.get('userId');
    this.userService.getUser(userId).subscribe(
      user => this.user = user
    );
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.userService.updateUser(this.user).subscribe(
      () => this.router.navigate(['/users'])
    );
  }

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUser();
  }

}
