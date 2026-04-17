import {sum, multiply} from './mathUtil.js'

export function sumProduct(a,b){
    return {
        sum: sum(a,b),
        product: multiply(a,b)
    }
}