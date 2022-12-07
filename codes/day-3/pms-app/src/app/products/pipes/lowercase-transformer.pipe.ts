import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'lower'
})
export class LowercaseTransformerPipe implements PipeTransform {
    transform(value: string, ...args: any[]): string {
        return value.toLocaleLowerCase()
    }
}