import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { AdventureService } from './../adventure.service';
import { Adventure } from './../adventure';

@Component({
  templateUrl: 'adventure-detail.component.html',
  styleUrls: ['adventure-detail.component.css']
})

export class AdventureDetailComponent implements OnInit {
  adventure: Adventure;
  id: number;
  page: number;

  constructor(
    private adventureService: AdventureService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.id = +params['id'];
      this.page = +params['page'];
      this.adventureService.getAdventure(this.id)
        .then(adventure => this.adventure = adventure);
    });
  }

  list(): void {
    this.router.navigate(['/adventures']);
  }

  start(): void {
    this.page = 1;
    this.router.navigate(['./', { page: this.page }], { relativeTo: this.route });
  }

  back(): void {
    this.location.back();
  }

  selectOption(turnTo): void {
    this.router.navigate(['./', { page: turnTo }], { relativeTo: this.route });
  }
}
