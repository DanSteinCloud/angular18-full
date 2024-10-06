import { NgModule, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingHeaderComponent } from './landing-page/landing-header/landing-header.component';
import { LandingContentComponent } from './landing-page/landing-content/landing-content.component';
import { LandingFooterComponent } from './landing-page/landing-footer/landing-footer.component';

type PathMatch = "full" | "prefix" | undefined;
const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full' as PathMatch},
  {
    path: 'home',
    component: LandingPageComponent,
    children: [     
    ]
  }
]

@NgModule({
  declarations: [
    LandingPageComponent,
    LandingHeaderComponent,
    LandingContentComponent,
    LandingFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class PublicModule implements OnInit{
  title = 'togokondi';
  sideBarOpen = true;
  
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
