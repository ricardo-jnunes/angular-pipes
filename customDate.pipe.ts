import {Inject, LOCALE_ID, Pipe, PipeTransform} from '@angular/core';
import { formatDate } from "@angular/common";

@Pipe({ name: 'customDate', pure: true })
export class CustomDatePipe implements PipeTransform {
    constructor( @Inject(LOCALE_ID) private locale: string) { }


    transform(value: any, format = 'mediumDate', timezone?: string, locale?: string): string |null {
        if (value == null || value === '' || value !== value) return null;
    
        try {
            return formatDate(value, format, locale || this.locale, timezone);
        } catch (error) {
            console.error(error);
            return value;
        }
    }
}