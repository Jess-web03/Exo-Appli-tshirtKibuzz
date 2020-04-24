const axios = require('axios').default;

axios.get('src\\data\\tshirt.json')
  .then((response) => {
    /*
    const genderChoice = 'M'; // F ou M
    const categoryChoice = 'meme'; // meme ou geek
    const sizeChoice = 'L'; // XS S M L XL
    */
    document.getElementById('submit').addEventListener('click', () => {
      const categoryChoice2 = document.getElementById('category').value;
      const genderChoice2 = document.getElementById('gender').value;
      const sizeChoice = document.getElementById('size').value;

      const categoryChoice = categoryChoice2.toLowerCase();
      let genderChoice = ' ';
      if (genderChoice2 === 'Feminin') {
        genderChoice = 'F';
      } else {
        genderChoice = 'M';
      }

      // console.log(response.data);
      // console.log(response.data['t-shirts']);
      const teeshirt = response.data['t-shirts'];
      let tshirtItem = '';
      for (let i = 0; i < teeshirt.length; i++) {
        if (teeshirt[i].gender === genderChoice && teeshirt[i].category === categoryChoice && teeshirt[i].size === sizeChoice) {
          // console.log(`${i} ${teeshirt[i].size} ${teeshirt[i].category} ${teeshirt[i].price}€`);
          tshirtItem += `
                       <img src=${teeshirt[i].imageUrl} />
                       ${teeshirt[i].size} 
                       ${teeshirt[i].category} 
                       ${teeshirt[i].price}€`;
        }
      }
      document.getElementById('tshItem').innerHTML = tshirtItem;
    });

    document.getElementById('filter').addEventListener('click', () => {
      const teeshirt = response.data['t-shirts'];
      let tshirtItem = '';
      for (let i = 0; i < teeshirt.length; i++) {
        tshirtItem += `
                     <img src=${teeshirt[i].imageUrl} />
                     ${teeshirt[i].size} 
                     ${teeshirt[i].category} 
                     ${teeshirt[i].price}€`;
      }
      document.getElementById('tshItem').innerHTML = tshirtItem;
    });
    // console.log(i + " " +teeshirt[i].size + " " + teeshirt[i].gender + " "+ teeshirt[i].category + " " + teeshirt[i].price + "€");
    // quand on charge la page, tous les t-shirts sont là

    const teeshirt = response.data['t-shirts'];
    let tshirtItem = '';
    for (let i = 0; i < teeshirt.length; i++) {
      tshirtItem += `
                     <img src=${teeshirt[i].imageUrl} />
                     ${teeshirt[i].size} 
                     ${teeshirt[i].category} 
                     ${teeshirt[i].price}€`;
    }
    document.getElementById('tshItem').innerHTML = tshirtItem;

    // rajout d'un bouton pour classer du plus petit au plus grand prix
    // fonction pour bouton
    function sortByPrice(obj) {
      let tshPrice = '';
      for (const key of teeshirt) {
        console.log(key.price);
        tshPrice = `${tshPrice}
          <img src= ${key.imageUrl} /> <br />
                    
                    ${key.price}€ 
                    ${key.gender}
                    ${key.size}
                    <br />`;
        obj.sort((a, b) => (a.price > b.price ? 1 : -1));
      }
      document.getElementById('tshItem').innerHTML = tshPrice;
    }
    /*
    const bouton = document.createElement('button');
    bouton.innerHTML = 'Prix (du + bas au + élevé)';
    bouton.classList.add('style-btn');
    document.body.appendChild(bouton);
    bouton.addEventListener('click', () => {
      sortByPrice(teeshirt);
    });
    */
    document.getElementById('priceOrder').addEventListener('click', () => {
      sortByPrice(teeshirt);
    });
    // choix par catégorie
    // FUNCTION CATEGORY
    let catcat = '';
    function category() {
      let categorietest = '';
      for (const key in teeshirt) {
        if (teeshirt[key].category === catcat) {
          categorietest = `${categorietest}
                                      <img src= ${teeshirt[key].imageUrl} />
                                      <br />
                                      ${teeshirt[key].gender} 
                                      ${teeshirt[key].size} 
                                       ${teeshirt[key].price}€ <br />`;
        }
      }
      document.getElementById('tshItem').innerHTML = categorietest;
    }
    const cat = document.getElementById('categoryOnly');
    cat.addEventListener('change', () => {
      if (cat.options[cat.selectedIndex].innerHTML === 'meme') {
        catcat = cat.options[cat.selectedIndex].innerHTML;
        category();
      }
      if (cat.options[cat.selectedIndex].innerHTML === 'geek') {
        catcat = cat.options[cat.selectedIndex].innerHTML;
        category();
      }
    });
  });
