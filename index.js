produit = {nom: "T-shirt", prix: 15, poids: 0.5 ,couler: "rouge" , taille:'XL'};
panier = [{produit:produit, quantite: 1}];



function ajouteraupanier(produit , quantite){
    if (produit && quantite != 0) {
        panier.push({produit:produit,quantite:quantite})
    }
}

ajouteraupanier(produit,2)

function calculerTVA(){
    let tva = 0;
    panier.forEach(element => {
        tva += (20/100*element.produit.prix) * element.quantite;
    });
    return tva
}

function calculerPrixTotal(){
    let PrixTotal = 0;
    panier.forEach(element => {
        PrixTotal += ((element.produit.prix) * element.quantite);
    });
    PrixTotal += calculerTVA();
    return PrixTotal
}



console.log(panier);
console.log(calculerTVA());
console.log(calculerPrixTotal());