class Ninja {
    constructor(nname, nhealth){
        this.ninjaName = nname;
        this.ninjaHealth = nhealth;
        this.ninjaSpeed = 3;
        this.ninjaStrength = 3;
    }

    sayName(){
        console.log('My name is '+ this.ninjaName);
    }
    showStats(){
        console.log(this.ninjaName + ' Stats:');
        console.log('Strength: ' + this.ninjaStrength + ' - Speed: ' + this.ninjaSpeed + ' - Health: ' + this.ninjaHealth);
    }
    drinkSake(){
        this.ninjaHealth+=10;
        console.log(this.ninjaName + ' has increased their health by 10 points. Current health is '+ this.ninjaHealth);
    }
}

//const ninja1 = new Ninja("Hyabusa", 15);
//ninja1.sayName();
//ninja1.showStats();
//ninja1.drinkSake();