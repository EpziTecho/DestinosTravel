import {
  PlaneLanding,
  PlaneTakeoff,
  Landmark,
  Briefcase,
  Mountain,
  Heart,
  MapPinned,
  IdCard,
  KeyRound,
  FileLock2,
} from 'lucide-react';

// Icon per booking service id (src/config/bookingServices.js), shared by the cards and the form.
const ICONS = {
  'transfer-in': PlaneLanding,
  'transfer-out': PlaneTakeoff,
  ejecutivo: Landmark,
  tour: Mountain,
  corporativo: Briefcase,
  conductor: IdCard,
  reemplazo: KeyRound,
  courier: FileLock2,
  bodas: Heart,
  otro: MapPinned,
};

export const serviceIcon = (id) => ICONS[id] ?? MapPinned;
