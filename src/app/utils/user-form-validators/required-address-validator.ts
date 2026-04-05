import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export const RequiredAddressValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const addressGroup = control as FormGroup;

  const controlsToCheck = Object.keys(addressGroup.controls).filter(
    (controlkey) =>
      controlkey !== 'type' &&
      controlkey !== 'typeDescription' &&
      controlkey !== 'complement',
  );

  const hasAnyText = controlsToCheck.some((controlKey) =>
    hasText(addressGroup.get(controlKey)),
  );

  controlsToCheck.forEach((controlName) => {
    const control = addressGroup.get(controlName);

    if (hasAnyText) {
      if (!control?.value) {
        control?.setErrors({ requiredAddressControl: true });
        control?.markAsTouched();
      } else {
        control?.setErrors(null);
      }
    } else {
      control?.setErrors(null);
    }
  });

  return null;
};

const hasText = (control: AbstractControl | null): boolean => {
  return (
    !!control && control.value && control.value.toString().trim().length > 0
  );
};
