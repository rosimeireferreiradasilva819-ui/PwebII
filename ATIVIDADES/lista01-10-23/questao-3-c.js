function fatorial(n) {
    
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * fatorial(n - 1);
}

console.log("Fatorial de 5: " + fatorial(5)); 