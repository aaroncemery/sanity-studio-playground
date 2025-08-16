import {definitions} from './definitions'
import {documents} from './documents'

export const schemaTypes = [...definitions, ...documents]

// Creating a new constant 'schemaNames' which is an array of the names extracted from the 'documents' array
export const schemaNames = [...documents.map((doc) => doc.name)]

// Defining a new type 'SchemaType' which is a union of all the types inthe 'schemaNames' array
export type SchemaType = (typeof schemaNames)[number]

export default schemaTypes
