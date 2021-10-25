function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    var message = "";
    for (var i = 0; i < dna.length; i++){
        if (dna[i] == "T") {
            message += "U";
        } else {
            message += dna[i];
        }
    }
    return message;
}

console.log(DNAtoRNA("TTTT")); // Returns 'UUUU'
console.log(DNAtoRNA("GCAT")); // Returns "GCAU"
console.log(DNAtoRNA("GACCGCCGCC")); // Returns "GACCGCCGCC"
