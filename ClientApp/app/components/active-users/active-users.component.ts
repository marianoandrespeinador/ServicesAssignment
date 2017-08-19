import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
    users: string[];
    constructor(private userService: UserService) {

    }

  onSetToInactive(id: number) {
      this.userService.onSetToInactive(id);
  }

  ngOnInit(): void {
      this.users = this.userService.activeUsers;
  }
}
