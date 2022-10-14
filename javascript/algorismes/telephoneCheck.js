function telephoneCheck(str) {
    let regex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/;
    let regex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

    if (regex1.test(str)) {
        return true;
    } else {
        return regex2.test(str) ? true : false
    }
}