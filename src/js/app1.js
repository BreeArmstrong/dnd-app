function fetchBasics() {
    let url = `https://api.open5e.com/sections/`

    fetch(url)
    .then(res => {
        if(!res.ok){
            throw Error("Error with status")
        }

        return res.json();
    })
    .then(res => {
        let basics = res.results;
        const html = basics.map(basic => {
            const smallDesc =(basic.desc).split(".");
            const slug = `https://api.open5e.com/sections/${basic.slug}`
            return `
            <div class="carousel-item" data-bs-interval="4000">
                <img class="d-block carousel-image
            " src="./src/img/dice-book.jpg" />
                <div class="carousel-caption d-none d-md-block">
                <h5>${basic.name}</h5>
                <p class="desc">${smallDesc[0]}. ${smallDesc[1]}. ${smallDesc[2]}. ${smallDesc[3]}. <br> <br>
                <button class="btn btn-outline-secondary" style="color:rgb(206, 195, 195)" href="${slug}">Learn more</button>
                </p>
                
              </div>
            </div>
            `;
        }).join('');
        document.querySelector('#basics').insertAdjacentHTML('afterbegin', html);
        document.querySelector('.carousel-item').classList.add("active");
    })
}
fetchBasics();