const template = ({ title, body, initialState }) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8"/>
        <title>${title}</title>
      </head>
      <body>
        <div id="root"><div>${body}</div></div>
        <script>
          window.__PRELOADED_STATE__ = ${initialState}
        </script>
        <script type="text/babel" src="/static/bundle.js"></script>
      </body>
    </html>
    `;
};

export default template;