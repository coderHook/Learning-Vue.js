new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame(){
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = []
    },
    attack(){
      var damage = this.damage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'You hit Monster for ' + damage
      })
      if (this.checkWin()){
        return;
      }
      this.monsterAttacks();
    },
    specialAttack(){
      var damage = this.damage(10,20);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'You attack Monster with a Special Attack for ' + damage
      })
      if(this.checkWin()){return;}

      this.monsterAttacks();
    },
    heal(){
      if (this.playerHealth <=90){
        this.playerHealth += 10;
        this.turns.unshift({
          isPlayer: true,
          text: 'You have been healed by 10'
        })
      } else {
        this.playerHealth = 100;
      }
      this.monsterAttacks();
    },
    giveUp(){
      this.gameIsRunning = false;
      this.turns = [];
    },
    damage(min, max){
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    monsterAttacks(){
      var damage = this.damage(5, 12);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits you for ' + damage
      })
      this.checkWin()
    },
    checkWin(){
      if (this.monsterHealth <= 0){
        if(confirm('You Won! New Game?')){
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0){
        if(confirm('You Lost! New Game?')){
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
})
