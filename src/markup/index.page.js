module.exports = function() {
    return html`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Mini Site Generator</title>
            <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville" rel="stylesheet">
            <link href="main.css" rel="stylesheet">
        </head>
        <body class="text-center">

            <section class="screen-height clr-white bg-black center-section">
                <h1>Mini Site Generator</h1>
                <p><em>It's Just <span class="clr-yellow">JavaScript</span></em></p>
            </section>

            <section>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
                <p><a href="#">Pretty text underline without clipping descending letters.</a></p>
                <p class="underline">Pretty text underline without clipping descending letters.</p>
                <div class="spinner"></div>
            </section>
        </body>
        </html>
    `;
};
