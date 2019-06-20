
import { FormGroup } from '@angular/forms';

export function MatchPassValidator(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;

    if(password !== confirmPassword) {
        return { paaswordMismatch: true };
    }

    return null;
}