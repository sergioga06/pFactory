// src/notifications/notificationFactory.ts
import type { INotifier } from './INotifier';
import { EmailNotifier } from './EmailNotifier';
import { SmsNotifier } from './smsNotifier';
import { PushNotifier } from './PushNotifier';

export type NotificationType = 'email' | 'sms' | 'push';

export function notificationFactory(type: NotificationType): INotifier {
  switch (type) {
    case 'email':
      return new EmailNotifier();
    case 'sms':
      return new SmsNotifier();
    case 'push':
      return new PushNotifier();
    default:
      throw new Error(`Tipo de notificación no soportado: ${type}`);
  }
}