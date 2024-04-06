function minifyHTML(html){
    return html.replace(/>( |\n|\t)*</g, '><').trim();
}

module.exports = minifyHTML;