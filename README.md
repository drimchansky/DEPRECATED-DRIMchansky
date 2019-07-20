
I was spend so much hours for build this config, which including some features for my usage. But it was more then year ago. Despite this term, it still work.
###
If you want try to use it, take it info:
1. Use this command in project root cmd:
  - <code>npm run watch</code> development
  - <code>npm run build</code> build your project for deployment
2. For including HTML files besides index.html visit <code> webpack.config.js </code> and uncomment and custimoze this code:
```js
  /* 
    new HtmlWebpackPlugin({
    filename: 'second.html',  
    template: 'src/second.html',
    chunks: ['main']
    })
*/
```
