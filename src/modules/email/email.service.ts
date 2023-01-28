import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async _send(
    tos: string[],
    subject: string,
    templateName: string,
    context: any = {},
  ): Promise<boolean> {
    await this.mailerService.sendMail({
      to: tos.join(', '),
      subject,
      template: `./${templateName}`,
      context,
    });

    return true;
  }

  async coopEmail(to: string) {
    await this._send([to], '제목', 'coopCompany.ejs', {
      email: to,
      datetime: new Date(),
    });
  }

  async empolyeeEmail(to: string) {
    await this._send([to], '제목', 'empolyees.ejs', {
      email: to,
    });
  }
}