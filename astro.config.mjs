import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.improv-abroad.com',
	integrations: [
		starlight({
			title: 'Юмор по/на/ехавший',
			favicon: './favicon.ico',
			defaultLocale: 'root',
			locales: {
        root: {
          label: 'Russian',
          lang: 'ru',
        },
      },
			social: {
        telegram: 'https://t.me/TanyaKulagina',
				github: 'https://github.com/barsovichok',
			},
		  customCss: [
        './src/styles/custom.css',
      ],
 	    logo: {
        src: './src/assets/flag.png',
      },
			sidebar: [
				{ label: 'Добро пожаловать!', link: 'guides/welcome' },
        {
          label: 'Комедийная импровизация',
          items: [
            {
              label: "Азия",
              items: [

                { label: 'Армения', link: '/guides/improvisation/asia/armenia' }
              ]
            },
            {
              label: 'Европа',
              items: [
                { label: "Грузия", link: '/guides/improvisation/europe/georgia' },
                { label: "Сербия", link: '/guides/improvisation/europe/serbia' },
              ]
            },

          ]
        },
                {
                    label: 'Стендап',
                    items: [
                        {
                            label: "Азия",
                            items: [

                                { label: 'Армения', link: '/guides/standup/asia/armenia' }
                            ]
                        },
                        {
                            label: 'Европа',
                            items: [
                                { label: "Грузия", link: '/guides/standup/europe/georgia' },
                                { label: "Сербия", link: '/guides/standup/europe/serbia' },
                            ]
                        },

                    ]
                }



			],
		}),
	],
});
