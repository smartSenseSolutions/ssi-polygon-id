import i18n from 'i18n'
i18n.configure({
	defaultLocale: 'en',
	directory: __dirname + '/../../../locales/', // JSON file location
	locales: ['en'], // array of locales
	cookie: 'node_boilerplate', // cookie from whicle locale settings will be parsed
	autoReload: true, // reload locales after change
	objectNotation: true
})

export { i18n }
