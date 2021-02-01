

 let pronoun = ['the','our'];
 let adj = ['great', 'big' ];
 let noun = ['jogger','racoon'];
 let ext = [".com", ".cl", ".net", ".io"];

 
 pronoun.forEach(function(item, index){
    p = Math.floor(Math.random() * ext.length)
    dominios = pronoun[0].concat(adj[0].concat(noun[index]) + ext[p])
        console.log(dominios);
 });

pronoun.forEach(function(item, index){
    p = Math.floor(Math.random() * ext.length)
    dominios = pronoun[1].concat(adj[0].concat(noun[index]) + ext[p])
        console.log(dominios);
 });

pronoun.forEach(function(item, index){
    p = Math.floor(Math.random() * ext.length)
    dominios = pronoun[0].concat(adj[1].concat(noun[index]) + ext[p])
        console.log(dominios);
 });

 pronoun.forEach(function(item, index){
     p = Math.floor(Math.random() * ext.length)
    dominios = pronoun[1].concat(adj[1].concat(noun[index]) + ext[p])
        console.log(dominios);
 });
