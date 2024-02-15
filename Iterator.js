const iterator = () => {   
    for(let i = 1; i <= 100; i++) {
        if( i % 5 === 0 && i % 4 === 0) {
            console.log("GoFigure");
        }
        if(i % 4 === 0) {
            console.log("Go");
        }
        if(i %5 === 0 ) {
            console.log("Figure")
        }
    }
};

iterator();