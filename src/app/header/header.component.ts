import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToggleService } from '../services/toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Angular Library';
  showAddBook: boolean = false;
  subscription: Subscription;
  constructor(private toggleService: ToggleService) { 
    this.subscription = this.toggleService.onToggle().subscribe((value)=> this.showAddBook= value);
  }

  ngOnInit(): void {
  }

  toggleView(){ 
    this.toggleService.toggleAddTask();
  }

}
