// Interfaz que define el contrato para cualquier "notificador".
// Cualquier clase que implemente `INotifier` debe proporcionar
// el método `send` que recibe un `message` y no devuelve nada.
// Esto permite usar distintas implementaciones (email, sms, push)
// de forma intercambiable (polimorfismo).
export interface INotifier {
  // Envía el mensaje. Implementaciones concretas harán el envío real
  // (o lo simularán en este proyecto con un `console.log`).
  send(message: string): void;
}