import type { INotifier } from './INotifier';

// Implementación concreta de `INotifier` para correos electrónicos.
// En este ejemplo la acción se simula con `console.log`.
// En una app real aquí iría la integración con un servicio SMTP/API.
export class EmailNotifier implements INotifier {
  // Envía un correo con el `message` recibido.
  send(message: string): void {
    // Simulación de envío: sustituir por envío real si es necesario.
    console.log(`[EMAIL] Enviando correo: "${message}"`);
  }
}