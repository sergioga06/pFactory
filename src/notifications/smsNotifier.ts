import type { INotifier } from './INotifier';

// Implementación de `INotifier` para mensajes SMS.
// Actualmente se simula el envío con `console.log`.
// Para enviar SMS reales, integrar aquí la API del proveedor.
export class SmsNotifier implements INotifier {
  // Envía un SMS con el `message` proporcionado.
  send(message: string): void {
    console.log(`[SMS] Enviando mensaje de texto: "${message}"`);
  }
}