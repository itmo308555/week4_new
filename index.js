import http from 'http';
const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, x-test'
  };
const server = http.createServer(async(req,res)=>{
      if(req.url === '/result4/'){
          
          res.writeHead(200,{
              'Content-Type':'application/json',
              ...CORS,
          })
          let data = '';
          await req.on('data', function(chunk){
            data += chunk;
            }).on('end', () => {
          })
          res.write(JSON.stringify({
            "message":"itmo308555",
<<<<<<< HEAD
            "x-result":"headers",
            "x-body":"data"
=======
            "x-result":"baovn",
            "x-body":"abc"
>>>>>>> 41e4df2f04adfb47249bb10c5b5954cffe99d1e0
            }
            ))
      }
      res.end()
      
  });
  server.listen(4321,()=>{
      console.log('Server is running')});
