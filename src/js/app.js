function fetchClasses() {
    let url = `https://api.open5e.com/classes/`

    fetch(url)
    .then(res => {
        if(!res.ok){
            throw Error("Error with response code");
        }
        return res.json();
    })
    .then(res => {
        const classes = res.results;
        console.log(classes);
        //Loop over the array and display Classes
        const html = classes.map(item => {
            return `
            <div class="container item"> 
                <div class="card" style="width: 30rem;">
                    <div class="card-body">
                        <h5 style="text-align:center;" id=${item.name} class="card-title">${item.name}</h5>
                        <ul>
                            <li>Hit Dice: ${item.hit_dice}</li>
                            <li>Armor Proficiency: ${item.prof_armor}</li>
                            <li>Weapon Proficiency: ${item.prof_weapons}</li>
                            <li>Proficient Saving Throws: ${item.prof_saving_throws}</li>
                            <li>Achetype Name: ${item.subtypes_name}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `;
        }).join('');

        document.querySelector('#classes').insertAdjacentHTML("afterbegin", html)
        document.querySelector('#Barbarian').parentElement.parentElement.style.background = 'linear-gradient(to top,#b53b19, 80%, #8a2a0f)'
        document.querySelector('#Bard').parentElement.parentElement.style.background = 'linear-gradient(to top,#984699, 80%, #721c73)';
        document.querySelector('#Cleric').parentElement.parentElement.style.background = 'linear-gradient(to top, #6481a1, 80%, #2f5075)';
        document.querySelector('#Druid').parentElement.parentElement.style.background = 'linear-gradient(to top, #677327, 80%, #3a420d)';
        document.querySelector('#Fighter').parentElement.parentElement.style.background = 'linear-gradient(to top,#7f513e, 80%, #422113)';
        document.querySelector('#Monk').parentElement.parentElement.style.background = 'linear-gradient(to top,#3785a3, 80%, #12495e)';
        document.querySelector('#Paladin').parentElement.parentElement.style.background = 'linear-gradient(to top,#a88b2c, 80%, #634f0c)';
        document.querySelector('#Ranger').parentElement.parentElement.style.background = 'linear-gradient(to top,#417a57, 80%, #153d24)';
        document.querySelector('#Rogue').parentElement.parentElement.style.background = 'linear-gradient(to top,#555752, 80%, #272924)';
        document.querySelector('#Sorcerer').parentElement.parentElement.style.background = 'linear-gradient(to top,#992e2e, 80%, #570e0e)';
        document.querySelector('#Warlock').parentElement.parentElement.style.background = 'linear-gradient(to top,#5f2a80, 80%, #28073d)';
        document.querySelector('#Wizard').parentElement.parentElement.style.background = 'linear-gradient(to top,#2a50a1, 80%, #10285c)';
       
    })
    .catch(err => {console.log(err)});
}
fetchClasses();