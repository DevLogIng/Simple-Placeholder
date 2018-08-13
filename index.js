var prenom = "Alexander";
function salut(prenom) {
    var nomF = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nomF[_i - 1] = arguments[_i];
    }
    var output = "salut " + prenom;
    if (nomF)
        output += ' ' + nomF.join(' ');
    return output;
}
console.log(salut("ons", 'albert', 'sofie'));
