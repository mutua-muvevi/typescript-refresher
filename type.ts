type SumFunction = {
	start: number,
	end: number,
	divisor: number
}

let sumFunc = (params: SumFunction) : number => {

	let sum = 0;

	for(let i = params.start; i <= params.end; i++){
		if(i % params.divisor === 0){
			sum += i
		}
	}

	return sum
}

// function prototype
type myFuncProto = (par1: string, par2: number) => void

let writeSth : myFuncProto = (par1, par2) => {
	console.log(par1 + par2)
}