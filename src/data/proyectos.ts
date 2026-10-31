import { getCollection } from 'astro:content';

export async function obtenerProyectos() {
  return (await getCollection('proyectos'))
    .filter((p) => p.data.publicado)
    .sort(
      (a, b) =>
        Number(b.data.destacado) - Number(a.data.destacado) ||
        b.data.anio - a.data.anio,
    );
}