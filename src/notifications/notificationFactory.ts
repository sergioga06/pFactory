// Factory de notificaciones: encapsula la creación de la
// instancia concreta de `INotifier` según el `type` solicitado.
// Esto permite al resto de la aplicación pedir un notificador
// por tipo sin conocer las clases concretas ni su instanciación.
import type { INotifier } from './INotifier';
import { EmailNotifier } from './EmailNotifier';
import { SmsNotifier } from './smsNotifier';
import { PushNotifier } from './PushNotifier';

// Tipos válidos que acepta la fábrica.
export type NotificationType = 'email' | 'sms' | 'push';

// Devuelve una implementación de `INotifier` según `type`.
// Ejemplo de uso:
//   const notifier = notificationFactory('email');
//   notifier.send('Hola mundo');
export function notificationFactory(type: NotificationType): INotifier {
  switch (type) {
    case 'email':
      return new EmailNotifier();
    case 'sms':
      return new SmsNotifier();
    case 'push':
      return new PushNotifier();
    default:
      // TypeScript garantiza que `type` sea uno de los valores
      // de `NotificationType`, pero dejamos la excepción por seguridad.
      throw new Error(`Tipo de notificación no soportado: ${type}`);
  }
}