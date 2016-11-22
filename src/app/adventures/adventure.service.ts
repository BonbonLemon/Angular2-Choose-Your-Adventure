import { Injectable } from '@angular/core';

import { Adventure } from './adventure';
import { ADVENTURES } from './mock-adventures';

@Injectable()
export class AdventureService {
  getAdventures(): Promise<Adventure[]> {
    return Promise.resolve(ADVENTURES);
  }

  getAdventure(id: number): Promise<Adventure> {
    return this.getAdventures()
               .then(adventures => adventures.find(adventure => adventure.id === id));
  }
}
