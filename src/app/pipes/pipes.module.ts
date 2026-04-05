import { NgModule } from '@angular/core';
import { MaritalStatusPipe } from './marital-status.pipe';
import { PhoneTypePipe } from './phone-type.pipe';
import { CpfPipe } from './cpf.pipe';
import { PhoneMaskPipe } from './phone-mask.pipe';
import { PhonePlaceholderPipe } from './phone-placeholder.pipe';

@NgModule({
  declarations: [
    MaritalStatusPipe,
    PhoneTypePipe,
    CpfPipe,
    PhoneMaskPipe,
    PhonePlaceholderPipe,
  ],
  exports: [MaritalStatusPipe, CpfPipe, PhoneMaskPipe, PhonePlaceholderPipe],
})
export class PipesModule {}
