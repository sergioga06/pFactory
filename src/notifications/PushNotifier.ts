import type { INotifier } from './INotifier';

// Implementación de `INotifier` para notificaciones push.
// Aquí se simula el envío; en producción habría que enviar
// el mensaje al servicio de push (por ejemplo Firebase Cloud Messaging).
export class PushNotifier implements INotifier {
  // Envía el mensaje como una notificación push.
  send(message: string): void {
    console.log(`[PUSH] Enviando a token: "${message}"`);
  }
}