// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Kurs, Loep, Konkurranse, Repetisjon, Oekt, Hendelse, Trening, Hund } = initSchema(schema);

export {
  Kurs,
  Loep,
  Konkurranse,
  Repetisjon,
  Oekt,
  Hendelse,
  Trening,
  Hund
};