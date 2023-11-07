import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
     declarations: [LoaderComponent],
     imports: [CommonModule, RouterModule],
     exports: [LoaderComponent],
})
export class SharedModule {}
