class Selectors {
    constructor (name) {
        this.charName = document.getElementById(`name-${name}`);
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
       this.image = document.getElementById(`image-${name}`);
        
    }
}

class Pokemon extends Selectors {
    constructor ({ name, hp, type, selectors, attacks = [], img}) {
        super(selectors);
        this.name = name;
        this.hp = {
            current: hp,
            total: hp,
        };
        this.type = type;
        this.attacks = attacks;
        this.img = img;
        
        this.renderHP();
        this.writeName();
        this.changeImage();
        
    }

    writeName = () => {
        this.charName.innerText = this.name;
    }
 
    changeImage = () => {
        
        this.image.src = this.img;
       
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
 changeHP = (count, person, cb) =>  {
console.log(person)
    person.hp.current -= count;
 
    if ( person.hp.current <= 0) { 
        person.hp.current= 0;
       
        //confirm ('Бедный ' + this.name + '  проиграл бой. Сыграть еще?', startGame());
    } 
   
    person.renderHP();
    cb && cb(count);
    
}

}

export default Pokemon;