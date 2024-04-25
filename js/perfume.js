document.getElementById('save').addEventListener('click', function() {
    html2canvas(document.querySelectorAll('body'), {
        onrendered: function(canvas) {
            // document.body.appendChild(canvas);
          return Canvas2Image.saveAsPNG(canvas);
        }
    });
});

document.getElementById('form').addEventListener('submit', function(e) {
	// prevent auto submission
	e.preventDefault();

const prompts = ["recommend me a perfume that will make me smell like a field of lilys and lavendor", "recommend me a perfume that places others in a warme embrace of smoke and vanilla", "recommend me a perfume that radiates mystery. a girl you know you will never see again, but the essence of her remains in your memories"];
const prompts_rand = prompts[Math.floor(Math.random()* prompts.length)]
const prompts2 = document.getElementById("prompt").value;




async function start(){
    try {

  
    const apiKey = "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";
    let json =  JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "system",
            "content": "you are a helpful perfume expert, able to match any description to an existent perfume. give just the name."
            // "content": "you are a narrative perfume expert, able to match any description to a perfume, and then constructing a 100 word story revolving around the recommended perfume based on any description"
            // "content": "you are a narrative perfume expert, able to first provide the perfume name and then in the next line, construct a 100 word story revolving around the recommended perfume based on any description"
            // "content": "you are a helpful perfume expert that can match any description to a perfume, alongside the price. really detailed in the descriptions and underline key words describing the scent, as well as highlighting the top notes, heart notes, and base notes. accept mispellings. limit to 100 words"
          },
     
        
        //   {
        //     "role": "system",
        //     "content": "you are a perfume expert, able to match any description to the notes of a perfume in a concise manner. for example, the notes would appear as (top: jasmine \n heart: rose \n base: sandalwood) "
        //   },

        //   {
        //     "role": "system",
        //     "content": "you also provide a narrative relating to the vibe of the recommended perfume based on the provided description"
        //   },
        
          {
            "role": "user",
            // "content": `${prompts_rand}`
            "content": `${prompts2}`
          },

        //   {
        //     "role": "user",
        //     // "content": `${prompts_rand}`
        //     "content": "provide just the name of the brand and name of the perfume in this format"
        //   },
        //     {
        //     "role": "user",
        //     // "content": `${prompts_rand}`
        //     "content": "brand, perfume"
        //   },

        //   {
        //     "role": "user",
        //     "content": "provide the notes in this format (top: jasmine \n heart: rose \n base: sandalwood)"
        //   },
        //   {
        //     "role": "user",
        //     "content": "lastly, come up with a narrative revolving around the perfume"
        //   }

        ]
    });

    let json2 =  JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
        
          {
            "role": "system",
            "content": "you are a perfume expert, able to match any description to the notes of the previously recommended perfume in a concise manner. for example, the notes would appear as top: jasmine \n heart: rose \n base: sandalwood "
          },
          {
            "role": "user",
            // "content": `${prompts_rand}`
            "content": `${prompts2}`
          }
        ]
    });

    let json3 =  JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
        
          {
            "role": "system",
            "content": "you are a narrative expert, able to construct a 100 word story revolving around the recommended perfume"
          },
          {
            "role": "user",
            // "content": `${prompts_rand}`
            "content": `${prompts2}`
          }
        ]
    });

    const url = 'https://api.openai.com/v1/chat/completions';

    const response = await fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: json,
        // body: JSON.stringify({
        //     model: "gpt-3.5-turbo",
        //     messages: [
        //       {
        //         "role": "system",
        //         "content": "you are a helpful perfume expert that can match any description to a perfume"
        //       },
        //       {
        //         "role": "user",
        //         "content": `${prompts_rand}`
        //       }
        //     ]
        // })
        
    })
    const response2 = await fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: json2,
        // body: JSON.stringify({
        //     model: "gpt-3.5-turbo",
        //     messages: [
        //       {
        //         "role": "system",
        //         "content": "you are a helpful perfume expert that can match any description to a perfume"
        //       },
        //       {
        //         "role": "user",
        //         "content": `${prompts_rand}`
        //       }
        //     ]
        // })
        
    })

    const response3 = await fetch(url, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: json3,
    })
    

    
    const data = await response.json();
    const data2 = await response2.json();
    const data3 = await response3.json();
    const lists = data.choices[0].message.content;
    const list2 = data2.choices[0].message.content;
    const list3 = data3.choices[0].message.content;
    
    document.getElementById("name").innerHTML = `${prompts2} <br><br> ${lists} `;
    document.getElementById("notes").innerHTML = `${list2}`;
    document.getElementById("narrative").innerHTML = `${list3}`;

    // for (let i = 0; i < lists.length; i++) {
    //     const list = lists[i];
    //     const message = list.message;
    // }
    } catch(error) {
        console.error(error);
    }
console.log(lists)

console.log("hi");
   
}


start();
});