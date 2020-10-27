const url = "https://randomuser.me/api/";

const mainElement = document.querySelector("main");

let users;



const init = () => {



    const sectionElement = document.createElement("section");



    for (let i = 0; i < users.length; i++) {



        const user = users[i];

        const title = user.name.title;

        const firstName = user.name.first;

        const lastName = user.name.last;





    }



    mainElement.appendChild(sectionElement);

}



let p = fetch(url);



p.then(response => response.json())

    .then(data => {



        users = data.results;

        init();

    })