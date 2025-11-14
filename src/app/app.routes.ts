import { Routes } from '@angular/router';
import { Chatbot } from './components/chatbot/chatbot';  // ajustá la ruta si tu carpeta se llama distinto

export const routes: Routes = [
  {
    path: '',
    component: Chatbot,        // ruta raíz -> muestra el chatbot
  },
  {
    path: '**',
    redirectTo: '',            // cualquier ruta rara redirige al chatbot
  },
];
