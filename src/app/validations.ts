import { AbstractControl } from '../../node_modules/@angular/forms';
import { cpuUsage } from 'process';

export class Validations {
    static cpfValidation(control: AbstractControl) {
        const cpf = control.value;

        let sum: number = 0;
        let mod: number;
        let isValid: boolean;

        const regex = new RegExp('[0-9]{11}');
        cpf.replace(/[^\d]+/g, '');
        cpf.maxLenght(11);
        if (cpf == '') isValid = false;

        if (
            cpf == '00000000000' ||
            cpf == '11111111111' ||
            cpf == '22222222222' ||
            cpf == '33333333333' ||
            cpf == '44444444444' ||
            cpf == '55555555555' ||
            cpf == '66666666666' ||
            cpf == '77777777777' ||
            cpf == '88888888888' ||
            cpf == '99999999999' ||
            !regex.test(cpf)
        )
            isValid = false;
        else {

            for (let i = 1; i <= 9; i++)
                sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
            mod = (sum * 10) % 11;

            if (mod == 10 || mod == 1) mod = 0;
            if (mod != parseInt(cpf.substring(9, 10))) isValid = false;

            sum = 0
            for (let i = 1; i <= 10; i++)
                sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
            mod = (sum * 10) % 11;

            if (sum == 10 || mod == 1) mod = 0;
            if (sum != parseInt(cpf.substring(10, 11))) isValid = false;
            isValid = true;
        }

        if (isValid) return null;
        return { invalidCpf: true };

    }
}