var random = ["Hey" , "Bonjour" , "Hola" , "Welcome" , "Greetings" , "Hiya!" , "Hey, bud" , "Sup?" , "Hello" , "Hey party people"]

document.getElementById('mybutton').addEventListener('click', ()=>{
            console.log('random');
            document.getElementById('fill').innerHTML = random;
        });
