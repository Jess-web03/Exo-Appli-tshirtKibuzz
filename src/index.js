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
