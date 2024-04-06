const minifyHTML = require('../index');

describe('Minify HTML', function(){
    it('can work on html with spaces in between tags', function(){
        const givenHTML = `
        <div> <p>This is an HTML</p></div>
        `;
        const minifiedHTML = minifyHTML(givenHTML);
        const expectedMinifiedHTML = '<div><p>This is an HTML</p></div>'
        expect(minifiedHTML)
            .withContext('Should replace the space between triangle brackets as empty string')
            .toEqual(expectedMinifiedHTML);
    });

    it('can work on html with next line in between tags', function(){
        const givenHTML = `
        <div>
        <p>This is an HTML</p>
        </div>
        `;
        const minifiedHTML = minifyHTML(givenHTML);
        const expectedMinifiedHTML = '<div><p>This is an HTML</p></div>'
        expect(minifiedHTML)
            .withContext('Should replace next line between triangle brackets as empty string')
            .toEqual(expectedMinifiedHTML);
    });

    it('can work on html with tab in between tags', function(){
        const givenHTML = `
        <div><p>This is an HTML</p>\t</div>
        `;
        const minifiedHTML = minifyHTML(givenHTML);
        const expectedMinifiedHTML = '<div><p>This is an HTML</p></div>'
        expect(minifiedHTML)
            .withContext('Should replace tab between triangle brackets as empty string')
            .toEqual(expectedMinifiedHTML);
    });

    it('can work on beautified html', function(){
        const givenHTML = `<div>\n\t<p>This is an HTML</p>\n</div>`;
        const minifiedHTML = minifyHTML(givenHTML);
        const expectedMinifiedHTML = '<div><p>This is an HTML</p></div>'
        expect(minifiedHTML).toEqual(expectedMinifiedHTML);
    });

    it('can will not replace next line, spaces, or tabs within texts', function(){
        const givenHTML = '<div><p>\n\t\tThis is an HTML\n\t\t</p></div>';
        const minifiedHTML = minifyHTML(givenHTML);
        const expectedMinifiedHTML = '<div><p>\n\t\tThis is an HTML\n\t\t</p></div>';
        expect(minifiedHTML).toEqual(expectedMinifiedHTML);
    });
});