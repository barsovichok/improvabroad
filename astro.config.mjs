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
				{ label: 'Оглавление', link: 'guides/welcome' },

                { label: "Организации",

                    collapsed: true,
                    items:[

                        {
          label: 'Импровизация',
                            collapsed: true,
          items: [
            {
              label: "Азия",
              items: [
                  { label: "Грузия", link: '/guides/organisations/improvisation/asia/georgia' },
                { label: 'Армения', link: '/guides/organisations/improvisation/asia/armenia' }
              ]
            },
            {
              label: 'Европа',
              items: [

                { label: "Сербия", link: '/guides/organisations/improvisation/europe/serbia' },
              ]
            },

          ]
                        },
                {
                    label: 'Стендап',
                    collapsed: true,
                    items: [
                        {
                            label: "Азия",
                            items: [
                                { label: "Грузия", link: '/guides/organisations/standup/asia/georgia' },
                                { label: 'Армения', link: '/guides/organisations/standup/asia/armenia' }
                            ]
                        },
                        {
                            label: 'Европа',
                            items: [

                                { label: "Сербия", link: '/guides/organisations/standup/europe/serbia' },
                                { label: "Испания", link: '/guides/organisations/standup/europe/spain' }
                            ]
                        },

                    ]
                }
]},
                { label: 'Персоны', collapsed: true,
                    badge:
                        {text: "В разработке",
                            variant: 'default'},

                    items:[{label: "Комикессы",collapsed: true, items:[]},
                        {label: "Комики",collapsed: true, items:[]
                        }]}


			],
		}),
	],
});
