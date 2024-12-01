


//triangle 


let triangle = (num) =>{
    for(let i=0;i<=num;i++){
        console.log("*".repeat(i))
    }
    console.log("\n")
}

let prymid = (num)=>{
    for(let i=1;i<=num;i++){
        let  space=" ".repeat(num-i)
        let str = "*".repeat((2*i)-1)
        console.log(space+str)
        
    }
    console.log("\n")
}
let inversePrymid = (num)=>{
    console.log('inverse prymid')
    for(let i=num;i>0;i--){
        let space = " ".repeat(num-i)
        let str = "*".repeat(2*i-1)
        console.log(space+str)
    }
    // console.log("\n")
}

let inverseRightTriangle = (num)=>{

    console.log('Inverse right triangle')
    for(let i=num;i>0;i--){
       let space = " ".repeat(num-i)
       let str = "*".repeat(i)
       
        console.log(space+str)
    }
//     console.log('\n')
}

let squre = (num)=>{
    console.log('squre pattern')

    for(let i=0;i<num;i++){
       
            console.log("*".repeat(num))
       
    }
}

let hollowSqure = (num)=>{
    for(let i=0;i<num;i++){
        if(i==0||i==num-1){
            console.log("*".repeat(num))
        }else{
            console.log("*"+" ".repeat(num-2)+"*")
        }
    }
}



let generate = (num)=>{
        triangle(num)
        prymid(num)
        inversePrymid(num)
        inverseRightTriangle(num)
        squre(num)
        hollowSqure(num)

}

let N =5
generate(N)