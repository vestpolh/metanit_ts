class User{
    name: string;
    constructor(_name: string){
        this.name = _name;
    }
}

const tom: User = new User("Том");
const header = this.document.getElementById("header");
if (header != null)
    header.innerHTML = `Привет ${tom.name}`;
else
    console.log('header = null');
