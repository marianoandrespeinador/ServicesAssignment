import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    activeUsers = [];
    inactiveUsers = [];

    constructor(private userService: UserService) {
    }

    onSetToInactive(id: number) {
        this.userService.onSetToInactive(id);
    }

    onSetToActive(id: number) {
        this.userService.onSetToActive(id);
    }

    ngOnInit(): void {
        this.activeUsers = this.userService.activeUsers;
        this.inactiveUsers = this.userService.inactiveUsers;
    }
}
