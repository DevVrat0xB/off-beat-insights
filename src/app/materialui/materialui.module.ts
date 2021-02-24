import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialModules = [MatGridListModule, MatToolbarModule];

@NgModule({
  imports: [materialModules],
  exports: [materialModules],
})
export class MaterialuiModule {}
