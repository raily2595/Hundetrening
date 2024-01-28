// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Kurs, Loep, Konkurranse, Repetisjon, Oekt, Hendelse, Trening, Hund, Bruker } = initSchema(schema);

export {
  Kurs,
  Loep,
  Konkurranse,
  Repetisjon,
  Oekt,
  Hendelse,
  Trening,
  Hund,
  Bruker
};