// src/notifications/notificationFactory.spec.ts
import { describe, it, expect } from 'vitest';
import { notificationFactory } from '../../notifications/notificationFactory';
import { EmailNotifier } from '../../notifications/EmailNotifier';
import { SmsNotifier } from '../../notifications/smsNotifier';
import { PushNotifier } from '../../notifications/PushNotifier';

describe('Patrón Factory: notificationFactory', () => {

  // Test 1: Verificar Email [cite: 883-884]
  it('debe devolver una instancia de EmailNotifier cuando el tipo es "email"', () => {
    const notifier = notificationFactory('email');
    expect(notifier).toBeInstanceOf(EmailNotifier);
  });

  // Test 2: Verificar SMS [cite: 885-886]
  it('debe devolver una instancia de SmsNotifier cuando el tipo es "sms"', () => {
    const notifier = notificationFactory('sms');
    expect(notifier).toBeInstanceOf(SmsNotifier);
  });

  // Test 3: Verificar Push [cite: 887-888]
  it('debe devolver una instancia de PushNotifier cuando el tipo es "push"', () => {
    const notifier = notificationFactory('push');
    expect(notifier).toBeInstanceOf(PushNotifier);
  });

  // Test 4: Verificar Error [cite: 889-890]
  it('debe lanzar un error si el tipo de notificación no es soportado', () => {
    // Usamos una función anónima para que expect pueda capturar el error
    // Forzamos el tipo 'any' para simular un error de programación o dato sucio
    expect(() => notificationFactory('telegram' as any)).toThrowError(/no soportado/);
  });

});