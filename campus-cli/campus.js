import slugify from 'slugify';

const name = process.argv[2]
const slug = slugify(name, { lower: true });
console.log(`Bienvenue sur Campus, ${name} ! `)
new Date().toLocaleDateString('fr-FR')
console.log(`Nous sommes le ${new Date().toLocaleDateString('fr-FR')}`)