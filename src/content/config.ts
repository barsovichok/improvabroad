import { defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Мой восхитительный сайт документации',
		}),
	],
});
export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
};

