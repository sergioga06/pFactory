<script setup lang="ts">
import { ref } from 'vue';
import { notificationFactory, type NotificationType } from '@/notifications/notificationFactory';

const selectedType = ref<NotificationType>('email');
const message = ref('');
const logs = ref<string[]>([]);

const sendNotification = () => {
  if (!message.value.trim()) {
    alert('El mensaje no puede estar vacío');
    return;
  }

  try {
    // 1. Usamos la FACTORÍA para obtener el objeto correcto (sin saber cuál es)
    const notifier = notificationFactory(selectedType.value);
    
    // 2. Usamos el método común SEND
    notifier.send(message.value);

    // 3. Feedback visual
    const timestamp = new Date().toLocaleTimeString();
    logs.value.unshift(`[${timestamp}] [${selectedType.value.toUpperCase()}] ${message.value}`);
    message.value = ''; // Limpiar
  } catch (e) {
    console.error(e);
    alert('Error al enviar notificación');
  }
};
</script>

<template>
  <div class="notification-container">
    <div class="card composer">
      <h2>Enviar Notificación</h2>
      
      <div class="form-group">
        <label>Tipo:</label>
        <select v-model="selectedType">
          <option value="email">Email</option>
          <option value="sms">SMS</option>
          <option value="push">Push Notification</option>
        </select>
      </div>

      <div class="form-group">
        <label>Mensaje:</label>
        <textarea v-model="message" rows="4" placeholder="Escribe aquí..."></textarea>
      </div>

      <button @click="sendNotification" class="btn-send">Enviar</button>
    </div>

    <div class="card log-panel">
      <h2>Log de Envíos</h2>
      <div v-if="logs.length === 0" class="empty-log">No hay envíos recientes.</div>
      <ul v-else>
        <li v-for="(log, index) in logs" :key="index" class="log-item">
          {{ log }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.notification-container {
  display: flex; gap: 20px; padding: 40px; justify-content: center;
  font-family: 'Segoe UI', sans-serif; background: #f4f7f6; min-height: 100vh;
}
.card {
  background: white; padding: 25px; border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05); width: 400px;
}
.composer h2 { color: #2c3e50; margin-top: 0; }
.form-group { margin-bottom: 20px; }
label { display: block; margin-bottom: 8px; font-weight: 600; color: #555; }
select, textarea {
  width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px;
  font-family: inherit; box-sizing: border-box;
}
select:focus, textarea:focus { border-color: #3498db; outline: none; }
.btn-send {
  width: 100%; padding: 12px; background: #3498db; color: white; border: none;
  border-radius: 6px; font-size: 1rem; cursor: pointer; transition: background 0.2s;
}
.btn-send:hover { background: #2980b9; }

.log-panel h2 { color: #2c3e50; margin-top: 0; border-bottom: 2px solid #eee; padding-bottom: 10px; }
.log-item {
  list-style: none; padding: 10px; border-bottom: 1px solid #eee;
  font-size: 0.9rem; color: #444;
}
ul { padding: 0; margin: 0; }
.empty-log { color: #999; font-style: italic; text-align: center; margin-top: 20px; }
</style>