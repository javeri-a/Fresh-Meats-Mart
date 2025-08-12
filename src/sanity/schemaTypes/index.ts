import { type SchemaTypeDefinition } from 'sanity'
// import mostselling from './mostselling'
// import chicken from './chicken'
// import meat from './beaf'
// import goat from './goat'

import { mostsell } from './mostselling';
import { chicken } from './chicken';
import { beaf, } from './beaf';
import { goat } from './goat';



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [mostsell, chicken, goat, beaf ],
}
