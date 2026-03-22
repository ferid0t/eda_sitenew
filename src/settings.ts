export const profile = {
	fullName: 'Eda Şensu Demir',
	title: 'Dr.',
	institute: 'İstanbul Gelişim Üniversitesi',
	author_name: 'Eda Şensu', // Author name to be highlighted in the papers section
	research_areas: [
    { title: 'Marine Bioactive Peptides', description: 'ACE-inhibitory and antioxidant peptides from macroalgae', field: 'biology' },
    { title: 'Nano & Micro-Encapsulation', description: 'Protecting bioactives through gastrointestinal digestion', field: 'chemistry' },
    { title: 'Green Extraction Technologies', description: 'Ultrasound-assisted enzymatic protein recovery', field: 'engineering' },
    { title: 'Metabolomics & Neuroprotection', description: 'Anti-Alzheimer potential of brown macroalgae', field: 'biology' },
    { title: 'Functional Food Development', description: 'Translating marine bioactives into health-promoting ingredients', field: 'engineering' },
],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'esensu@gelisim.edu.tr',
	linkedin: 'https://www.linkedin.com/in/sensu-eda',
	x: '',
	bluesky: '',
	github: '',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=rkoAmmIAAAAJ&hl=tr',
	inspire: '',
	arxiv: '',
	orcid: '',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'valentine', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Dr. Eda Şensu Demir | Food Scientist & Researcher',
	default_description: 'Official portfolio and research repository of Dr. Eda Şensu Demir, specializing in food biotechnology and marine bioactives.',
	default_image: '/images/astro-academia.png',
}
