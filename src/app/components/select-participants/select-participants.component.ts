import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum TypeParticipant {
      aldult = 'adult',
      young = 'young',
      children = 'children',
}

@Component({
      selector: 'app-select-participants',
      templateUrl: './select-participants.component.html',
      styleUrl: './select-participants.component.scss',
})
export class SelectParticipantsComponent {
      @Input() type: TypeParticipant = TypeParticipant.aldult;
      @Input() numberOfParticipant!: number;
      @Output() numberOfParticipantChange: EventEmitter<number> = new EventEmitter<number>();

      get typeToUpperCase(): string {
            return this.type;
      }

      increaseParticipant() {
            this.numberOfParticipant = this.numberOfParticipant + 1;

            console.log(this.numberOfParticipant);
            this.numberOfParticipantChange.emit(this.numberOfParticipant);
      }

      decreaseParticipant() {
            if (this.numberOfParticipant === 0) return;
            this.numberOfParticipant = this.numberOfParticipant - 1;
            console.log(this.numberOfParticipant);
            this.numberOfParticipantChange.emit(this.numberOfParticipant);
      }

      handleChangeNumberOfParticipant(type: 'increate' | 'decrease') {
            if (type !== 'increate' && type !== 'decrease') return;

            switch (type) {
                  case 'increate': {
                        this.numberOfParticipant = this.numberOfParticipant + 1;
                        this.numberOfParticipantChange.emit(this.numberOfParticipant);
                        break;
                  }

                  case 'decrease': {
                        if (this.numberOfParticipant === 0) return;
                        this.numberOfParticipant = this.numberOfParticipant - 1;
                        this.numberOfParticipantChange.emit(this.numberOfParticipant);
                        break;
                  }

                  default:
                        break;
            }
      }
}
