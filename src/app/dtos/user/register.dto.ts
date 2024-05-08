import { IsString, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class RegisterDTO {
      @IsString()
      full_name: string;

      @IsPhoneNumber()
      @IsNotEmpty()
      phone_number: string;

      @IsString()
      @IsNotEmpty()
      password: string;

      @IsString()
      @IsNotEmpty()
      retype_password: string;

      role_id: number = 1;
      facebook_account_id: number = 0;
      google_account_id: number = 1;

      constructor(data: any) {
            this.full_name = data.full_name;
            this.password = data.password;
            this.phone_number = data.phone_number;
            this.retype_password = data.common;
            this.facebook_account_id = data.facebook_account_id || 0;
            this.google_account_id = data.google_account_id || 0;
            this.role_id = data.role_id || 1;
      }
}
