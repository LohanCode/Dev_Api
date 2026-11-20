interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "Clavier mécanique",
        price: 89.99,
        description: "Clavier mécanique RGB"
    },
    {
        id: 2,
        name: "Souris gaming",
        price: 39.99,
        description: "Souris sans fil"
    },
    {
        id: 3,
        name: "Écran 24 pouces",
        price: 149.99,
        description: "Écran Full HD"
    },
    {
        id: 4,
        name: "Casque audio",
        price: 49.99
    },
    {
        id: 5,
        name: "Tapis de souris",
        price: 12.99,
        description: "Tapis antidérapant"
    }
];

function findById(products: Product[], id: number): Product | undefined {
    return products.find(product => product.id === id);
}

function cheaperThan(products: Product[], max: number): Product[] {
    return products.filter(product => product.price < max);
}

// Récupération de l'identifiant
const id = Number(process.argv[2] ?? 0);

const product = findById(products, id);

// Affichage du produit
if (product) {
    console.log(Nom : ${product.name});
    console.log(Prix : ${product.price} €);
    console.log(Description : ${product.description ?? "Pas de description"});
} else {
    console.log(Produit ${id} introuvable);
}

// Produits à moins de 50 €
console.log("\nProduits à moins de 50 € :");

const cheapProducts = cheaperThan(products, 50);

cheapProducts.forEach(product => {
    console.log(product.name);
});