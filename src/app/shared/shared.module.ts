import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { MaterialModule } from './imports/material/material.module';
import { CategoryPipe } from './pipes/category.pipe';

@NgModule({
  declarations: [ErrorDialogComponent, CategoryPipe, ConfirmationDialogComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ConfirmationDialogComponent, ErrorDialogComponent, CategoryPipe],
})
export class SharedModule {}
