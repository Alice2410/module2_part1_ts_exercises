import 'date-wizard';

declare module 'date-wizard' {
    const pad: (level: number) => string;

    interface DateDetails {
        year: number;
        month: number;
        date: number;
        hours: number;
        minutes: number;
        seconds: number;
    }
}