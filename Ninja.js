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

class Sensei extends Ninja {
    constructor(sname){
        super(sname);
        this.ninjaHealth = 200;
        this.ninjaSpeed = 10;
        this.ninjaStrength = 10;
        this.Wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log('For man with no forgiveness in heart, life worse punishment than death.');
    }

}

//const superSensei = new Sensei('Mr. Miyagi');
//superSensei.speakWisdom();
//superSensei.showStats();