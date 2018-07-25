const expect = require('expect');
const request = require('supertest');


const {app} = require('./../server');
const {Todo} = require('./../models/todo');

beforeEach((done) => {
  Todo.remove({}).then(() => done());
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

        Todo.find().then((todos) => {
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
          expect(todos.length).toBe(0);
          done();
        }).catch((e) => done(e));
      });
  });
});
