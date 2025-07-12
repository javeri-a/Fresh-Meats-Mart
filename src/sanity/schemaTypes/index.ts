import { type SchemaTypeDefinition } from 'sanity'
import meat from './meat'
import chicken from './chicken'
import goat from './goat'
import selling from './selling'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [meat, chicken, goat , selling],
}
