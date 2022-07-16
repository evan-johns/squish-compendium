const express = require('express')
const app = express()
const PORT = 8000

const squish = {
    'wendy':{
        'fullName': 'Wendy the Frog',
        'type': 'Frog',
        'squad': 'Original',
        'bio': `Welcome Wendy! Wendy's birthday is May 10, meaning her SquishScope sign is a Taurus. You can always find her out on the basketball court (she won the MVP award last year) or in the science lab, since chemistry is her favorite subject. She wants to be a famous scientist when she grows up and likes to paint pictures of her inventions.

        She's an all around green gal, and is also very eco-friendly, always doing her part to clean up her community. Her favorite food is sushi, especially the avocado rolls and one of her other favorite hobbies includes gardening with her family!`,
        'color': 'Green',
        'sizes': '2", 3.5", 5" Flip-A-Mallow, 8", 13", 16"',
        'appearance': `Wendy is an apple green frog with a cream colored belly. Her eyes sit on top of her head, and are black rimmed in white. She has prominent nostrils above her smiling mouth, and a pale pink blush on her cheeks.`,
        'squishDate':'',
        'collectorNumber': 6
    },
    'malcom':{
        'fullName': 'Malcom the Mushroom',
        'type': 'Mushroom',
        'squad': '',
        'bio': `Have you ever met a soccer-playing Mushroom? Malcolm is the one for you! He's the goalie on his team and they've won the championship three years in a row!`,
        'color': 'Red,Tan',
        'sizes': '3.5", 5”, 8”, 12", 16"',
        'appearance': `Malcolm is a mushroom with a tan stalk and a red cap. The top of his cap is a cool red with white spots, and the underside is a less saturated red. His stalk makes up his body and includes a round, white belly. He has round, black eyes and a red, smiling mouth.`,
        'squishDate':'11.19.20',
        'collectorNumber':684
    },
    'unknown':{
        'fullName': 'unknown',
        'type': 'unknown',
        'squad': 'unknown',
        'bio': `unknown`,
        'color': 'unknown',
        'sizes': 'unknown',
        'appearance': `unknown`,
        'squishDate':'unknown',
        'collectorNumber':'unknown'
    }
    
}


app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response)=>{
    const squishName = request.params.name.toLowerCase()
    if(squish[squishName]){
        response.json(squish[squishName])
    }else{
        response.json(squish['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Better go catch it!`)
})