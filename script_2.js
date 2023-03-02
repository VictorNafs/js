function factorielle(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorielle(n - 1);
    }
  }
  
  let nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");
  nombre = Number(nombre);
  
  if (isNaN(nombre) || nombre < 0 || !Number.isInteger(nombre)) {
    console.log("Veuillez entrer un nombre entier positif !");
  } else {
    let resultat = factorielle(nombre);
    console.log("Le résultat est : " + resultat);
  }
  