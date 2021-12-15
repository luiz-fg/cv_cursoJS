function fatorial(num)
{
    fat = 0
    for( let c = num; c > 1; c--)
    {
        fat *= c // fat*= é o mesmo que fat = fat * c
    }
    return fat
}
console.log(fatorial(5))