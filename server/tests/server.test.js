const expect = require('expect');
const request = require('supertest');

const{ObjectID} = require('mongodb');
const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
  _id:new ObjectID(),
  text:'maanja bhadwai maanja gandwe'
},{
  _id: new ObjectID(),
  text:'jaja jaja sasur ji ka bhosda'
}];


beforeEach((done) => {
  Todo.remove({}).then(() => {
      return Todo.insertMany(todos);     //we are returning to chain callbacks

  }).then(() => done());

});              //testing life cycle method . It will let us run some code for every single test case , we are gonna use beforeEach to set up the db in a way that;s useful

describe('POST/todos',() => {
  it('should create a new todo' , (done) => {
    var text = 'Test todo text';
    request(app)
      .post('/todos')
      .send({text})                //to send the data with the request we have to use the send button, we have to pass an object. that object will be converted to json by the supertest and we don't have worry about that
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if(err){
          return done(err);
        }

        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();        // here we are wrapping up the test case
        }).catch((e) => done(e));
      });

  });

  it('should not create todo', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err,res) => {
        if (err){
          return done(err)
        }

        Todo.find({}).then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  });
});



describe('GET Todos', () => {
  it('should call al the todos' , (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);       //we are not providing a function as provided above as are not doing asynchronous activity
      })
      .end(done);
  });
});


describe('GET /todos/:id', () => {
  it('should return the todo document', (done) => {
    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(todos[0].text);
      })
      .end(done);
  });

  it('should return 404 if todo not found',(done) => {
    var id = new ObjectID();
    request(app)
      .get(`/todos/${id.toHexString()}`)
      .expect(404)
      .end(done);

  });

  it('should return got non-object ids',(done) => {
    var id ="5b58e05ad3df285748929552";      //it is a non-object id
    request(app)
      .get(`/todos/${id}`)
      .expect(404)
      .end(done);
  });
});
