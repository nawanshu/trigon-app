import Shape from '../shape';

class Triangle extends Shape {
    
    constructor() {
      super("Triangle", 3);
    }
    
    gatherSides(sides) {
      this.sides = sides;
      
      if(this.sides.length < 3 || (!this.sides[0] || !this.sides[1] || !this.sides[2])){ 
        ts.ui.Dialog.warning('Provide all three sides for Triangle.');
        return false;
      }
      
      if(!parseFloat(this.sides[0]) || !parseFloat(this.sides[1]) || !parseFloat(this.sides[2])){
        ts.ui.Dialog.warning('Invalid inputs for Triangle.');
        return false;
      }
      return true;
    }
  
    validate() {
       if(this.sides[0]+this.sides[1] <= this.sides[2] || this.sides[0]+this.sides[2] <= this.sides[1] || this.sides[1]+this.sides[2] <= this.sides[0]){
        ts.ui.Dialog.warning('Invalid Triangle.');
        return false;
      }
      return true;
   };
  
    classify() {
      const length = Object.keys(this.buildMap(this.sides[0], this.sides[1],this.sides[2])).length;
      if(length === 3) {
        ts.ui.Dialog.confirm('Scalene Triangle', '', {
          icon: 'ts-icon-done'
        });
          return 'Scalene';
      } else if(length === 2){
        ts.ui.Dialog.confirm('Isosceles Triangle', '', {
          icon: 'ts-icon-done'
        });
        return 'Isosceles'; 
      } else {
        ts.ui.Dialog.confirm('Equilateral Triangle', '', {
          icon: 'ts-icon-done'
        });
          return 'Equilateral';
      }
    };

    buildMap(sideA, sideB, sideC) {
        let map = {};
        const sidesArr = [sideA, sideB, sideC];
        for(let side of sidesArr){
            map[side] = map[side] + 1 || 1;
        }
        console.log(map);
        return map;
    }
    
  }

  export default Triangle;
  