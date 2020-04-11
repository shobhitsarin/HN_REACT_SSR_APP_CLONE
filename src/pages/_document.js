export const htmlTemplate = ( appComponent,initalProps) => {
    return `
        <!DOCTYPE html>
        <html>
        <script>
        window.initalProps = ${ initalProps }
         </script>
        <head>
            <meta charset="utf-8">
            <title>Think App</title>
        </head>
        <body>
            <div id="app">${ appComponent }</div>
            <script src="./client.bundle.js"></script>
        </body>
        </html>
    `;
}

export default htmlTemplate;