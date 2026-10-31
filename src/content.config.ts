import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { USOS, MATERIALES } from './data/atributos';

const proyectos = defineCollection({
  loader: glob({
    pattern: '*/proyecto.md',
    base: './src/content/proyectos',
    // el nombre de la carpeta pasa a ser la dirección del proyecto
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      anio: z.number(),
      resumen: z.string().max(160),
      usos: z.array(z.enum(USOS)).min(1),
      materiales: z.array(z.enum(MATERIALES)).min(1),
      fotos: z.array(image()).min(1).max(10),
      publicado: z.boolean().default(true),
      destacado: z.boolean().default(false),
    }),
});

export const collections = { proyectos };