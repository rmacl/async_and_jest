const getData = require('./async_test');
const inputText = 'Spiderman';

const result = 
`Amazing Spiderman Syndrome
Fighting, Flying and Driving: The Stunts of Spiderman 3
Hollywood's Master Storytellers: Spiderman Live
Italian Spiderman
Spiderman
Spiderman
Spiderman 5
Spiderman and Grandma
Spiderman in Cannes
Superman, Spiderman or Batman
The Amazing Spiderman T4 Premiere Special
The Death of Spiderman
They Call Me Spiderman`;



test('Async function test', async() => {   
      let response = await getData(inputText);
      expect(response).toEqual(result);
});  
