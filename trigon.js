function checkTriangle(a,b,c) {
    if(arguments.length < 3){
        console.log("All three sides must be available");
        return;
    }
    if(!parseFloat(a) || !parseFloat(b) || !parseFloat(c)){
        console.log("Sides length must be a valid number.");
        return;
    }
    const sideA = parseFloat(a);
    const sideB = parseFloat(b);
    const sideC = parseFloat(c);

    if(sideA+sideB <= sideC || sideA+sideC <= sideB || sideB+sideC <= sideA){
        console.log("This is not a valid triangle");
        return;
    }
    const map = {};
    const sidesArr = [sideA, sideB, sideC];
    for(let side of sidesArr){
        map[side] = map[side] + 1 || 1;
    }
    console.log(map);
    const length = Object.keys(map).length;
    console.log(length);
    if(length === 3) {
        console.log('Scalene');
    } else if(length === 2){
      console.log('Isosceles');  
    } else {
        console.log('Equilateral');
    }
}
try{
    checkTriangle(7,10, 5);
} catch(e){
    console.log("Invalid arguments");
}
try{
    checkTriangle(7,10, arg);
} catch(e){
    console.log("Invalid arguments");
}