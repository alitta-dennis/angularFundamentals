import {NgModule} from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from 'src/app/shared/conver-to-spaces.pipe';

import { ProductDetailGuard } from './product-detail.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations:[
        ProductListComponent,
        ProductDetailComponent,
        ConvertToSpacesPipe,
        
        
    ],
    imports:[
        
        RouterModule.forChild([
            {path:'products',component:ProductListComponent},
      {
        path: 'products/:id',
        canActivate:[ProductDetailGuard],
        component:ProductDetailComponent
      }
        ]),
        SharedModule
    ]
})

export class ProductModule{}