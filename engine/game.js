
class GameEngine{
  static randomizePosition(num = 0){
    let position
    while(true){
      let rdNumber = Math.round(Math.random()*9);
      if(rdNumber !== num){
        position = rdNumber;
        break;
      }
    }
    return position
  }
}


console.log(GameEngine.randomizePosition(2));

module.exports = GameEngine