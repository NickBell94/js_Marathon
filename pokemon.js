class Selectors {
    constructor (name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
    }
}

class Pokemon extends Selectors {
    constructor ({ name, hp, type, selectors}) {
        super(selectors);
        this.name = name;
        this.hp = {
            current: hp,
            total: hp,
        };
        this.type = type;
        this.renderHP();
    }


renderHP = () => {
    this.renderHPLife();
    this.renderProgressbarHP();
    
}
 renderHPLife = () => {
   const { elHP, hp: { current, total }} = this;
   
    elHP.innerText = current + '/' + total;
}

 renderProgressbarHP = () =>{
     const { hp: {current, total }, elProgressbar } = this;
    const procent = (current/total) * 100;
    elProgressbar.style.width = procent + '%';
}
 changeHP = (count, cb) =>  {

    this.hp.current -= count;
 
    if ( this.hp.current <= 0) { 
        this.hp.current= 0;
       
        alert ('Бедный ' + this.name + '  проиграл бой');
    } 
   
    this.renderHP();
    cb && cb(count);
    
}

}
export default Pokemon;