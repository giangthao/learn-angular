import { Pipe, PipeTransform } from '@angular/core';
import { TypeParticipant } from '../components/select-participants/select-participants.component';

export interface TotalParticipant {
      type: TypeParticipant;
      numberOfPerson: number;
}

@Pipe({
      name: 'totalParticipantToString',
})
export class TotalParticipantToStringPipe implements PipeTransform {
      transform(value: TotalParticipant[]): string {
            let result = '';
            if (value.length > 0) {
                  value.forEach((element) => {
                        if (element.numberOfPerson > 0) {
                              result +=
                                    element.type.charAt(0).toUpperCase() +
                                    element.type.slice(1) +
                                    ': ' +
                                    element.numberOfPerson +
                                    '  ';
                        }
                  });
                  if (result === '') {
                        result = 'No person';
                  }
            }
            return result;
      }
}
