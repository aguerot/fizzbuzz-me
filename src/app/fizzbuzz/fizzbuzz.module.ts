import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FizzbuzzComponent } from './fizzbuzz.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [FizzbuzzComponent],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    MessageModule,
  ],
  exports: [FizzbuzzComponent],
})
export class FizzbuzzModule {}
