
import * as express from 'express';
import * as bodyParser  from 'body-parser';
var app:express.Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/api', (req: express.Request, res: express.Response) => {
    res.send("Coucou my first api");
});


var params = {
    'folder': {
        'param1' : 'value1',
        'param2' : 'value2'
    }

};

app.route('/api/:app_name/*')
  .get(function(req: express.Request, res: express.Response) {


    res.send('App name ' + req.param('app_name')+ '\n' + req.params[0]);
  })
  .post(function(req, res) {
     res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
      console.log(req.body);
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

