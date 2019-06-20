import { Directive, Input, HostListener } from "@angular/core";
import { FormGroup } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';




@Directive ({
    selector: '[rbMarkAsTouched]'
})

export class MarkAsTouchedDirective {
    @Input() rbMarkAsTouched: FormGroup;
    @HostListener('submit', ['$event'])
    onSubmit(event) {
        Object.values(this.rbMarkAsTouched.controls).forEach(control =>
            control.markAsTouched()
            );
    }
}