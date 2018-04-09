const prompts = require('prompts');

async function test() {
    const response = await prompts({
        type: 'number',
        name: 'value',
        message: 'How old are you?'
    });
    console.log(response); // => { value: 23 }
}

test();