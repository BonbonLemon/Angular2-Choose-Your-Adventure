import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdventureComponent } from './adventure.component';
import { AdventureListComponent } from './adventure-list.component';
import { AdventureDetailComponent } from './detail/adventure-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '/adventures',
        pathMatch: 'full'
      },
      {
        path: '',
        component: AdventureComponent,
        children: [
          {
            path: 'adventures',
            component: AdventureListComponent
          },
          {
            path: 'adventure/:id',
            component: AdventureDetailComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class AdventureRoutingModule { }
