import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

// import { AdventureListComponent } from './adventure-list.component';
import { AdventureComponent } from './adventure.component';
// import { AdventureDetailComponent } from './detail/adventure-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '/adventures',
        pathMatch: 'full'
      },
      {
        path: 'adventures',
        component: AdventureComponent,
        children: [
          // {
          //   path: '',
          //   component: AdventureDetailComponent
          // },
          // {
          //   path: 'adventures',
          //   component: AdventureListComponent
          // }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class AdventureRoutingModule { }
