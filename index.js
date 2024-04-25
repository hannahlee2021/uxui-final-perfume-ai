// import OpenAI from "openai";

// require ("dotenv").config();

// const openAIClient = new OpenAI({
//     apiKey: process.env['OPENAI_API_KEY']
// })

// const chatCompletion = await openAIClient.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: [
//         {
//         role: "system",
//         content: "you are a helpful assistant"
//     },
//     {
//         role: "user",
//         content: "what is meaning of life"
//     }
// ]
// })

// console.log(chatCompletion)

// const Chat = async function () {
//     return <span></span>
// }

// import {config} from "dotenv"
// config()

// // import { Configuration, OpenAIApi } from "openai"
// import OpenAI from "openai";


// const openai = new OpenAI({
//     apiKey: process.env['OPENAI_API_KEY']
   
// });

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "system", content: "You are a helpful assistant." }, {role: "user", content:"recommend me a perfume that will make me smell like a field of lilys and lavender"}, {role: "user", content: "recommend me a perfume that will make a room stop and fall in love with the idea of me"} ],
//     model: "gpt-3.5-turbo",
//   });
//   const chat = completion.choices[0];
//   document.getElementById("hi").innerHTM = chat;
//   console.log(completion.choices[0]);
// }

// main();


// const openai = new OpenAIApi(new Configuration({
//     apiKey: process.env.OPENAI_API_KEY
// }))

// openai.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [{
//         role: "user",
//         content: "hello chatgpt"
//     }]
// }).then(res => {
//     console.log(res)
// })


import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: "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"
})

async function start() {
    try {
        const response = await openai.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant." }, 
            {role: "user", content:"recommend me a perfume that will make me smell like a field of lilys and lavender"},
             {role: "user", content: "recommend me a perfume that will make a room stop and fall in love with the idea of me"} ],
            model: "gpt-3.5-turbo",
})

document.getElementById("hi").innerHTML = response.choices[0].messages.content;
console.log(response.choices[0]);
    }
   catch(error) {
    console.error("error")
   }

}
start();