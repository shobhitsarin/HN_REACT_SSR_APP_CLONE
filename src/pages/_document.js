export const htmlTemplate = ( appComponent,initalProps) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <script>
        window.initalProps = ${ initalProps }
         </script>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="Description" content="This is HN_REACT_SSR_CLONE">
            <meta charset="utf-8">
            <title>Think App</title>
            <link rel="stylesheet" type="text/css" href="./styles.css" />
        </head>
        <body>
            <div id="app">${ appComponent }</div>
            <script src="./client.bundle.js"></script>
        </body>
        </html>
    `;
}

export default htmlTemplate;