function countLetters(text) {
    // TODO

    // creamos unos contadores que empiecen por 0 (un para los espacios y otro para el total de caracteres)
    // iterar en el texto los caracteres
    // detectar los espacios e irlos contando (dentro del for)
    // contar el total de caracteres (dentro del for)
    // restar el numero de espacios al total de caracteres
    // retornamos la resta

    var spacesCount = 0
    var totalCharsCount = 0

    for (var i = 0; i < text.length; i++) {
        var character = text[i]

        if (character === ' ') {
            spacesCount++
        }

        totalCharsCount++
    }

    var lettersCount = totalCharsCount - spacesCount

    return lettersCount
}