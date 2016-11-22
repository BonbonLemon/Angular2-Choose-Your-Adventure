import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Adventure } from './adventure';
import { AdventureService } from './adventure.service';

@Component({
  templateUrl: 'adventure-list.component.html',
  styleUrls: ['adventure-list.component.css']
})

export class AdventureListComponent implements OnInit {
  adventures: Adventure[];

  constructor(
    private adventureService: AdventureService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAdventures();
  }

  getAdventures(): void {
    this.adventureService.getAdventures().then(adventures => this.adventures = adventures);
  }

  goToDetail(id): void {
    this.router.navigate(['/adventure', id]);
  }
}
