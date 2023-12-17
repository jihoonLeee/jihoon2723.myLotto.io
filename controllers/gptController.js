var config = require('dotenv');
var OpenAI = require('openai');

config.config();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

exports.getNumberByEmotion = async (req, res) => {
  const emotions = req.body.emotions; 
  const result = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        "role": "system",
        "content": "내가 지금 느끼는 기분을 한가지 이상 말해주면 1부터 45까지 의 숫자중에 숫자6개 추천해줄 수 있어?그리고 추천해준 숫자에 대한 과학적이거나 역사적인 사실을 가지고 내가 말해준 기분과 어떤 관계가 있는지 자세하게 설명해줘! 그리고 내용에 대한 기준은 한국인 기준이야."
      },
      {
        "role": "assistant",
        "content": ` [{"number": 1, "reason": "????"},{"number": 2, "reason": "????"},{"number": 25, "reason": "????"},{"number": 13, "reason": "????"},{"number": 16, "reason": "????"},{"number": 11, "reason": "????"}] 이 형태로 반환해줘`
      },
      {
        "role": "user",
        "content": `내기분은 "${emotions.join(", ")}" 이야.`
      },
      {
        "role": "system",
        "content": "Assistant는 이제 사용자의 감정에 따른 로또 번호와 그 재미있는 근거를 JSON 형태로 반환해야 합니다. JSON 데이터 이외에 문장은 필요없습니다."
      }
    ]
  });
  res.json( result.choices[0].message.content );
};


exports.getNumberByDream = async (req, res) => {
  const dream = req.body.content; 
  const result = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        "role": "system",
        "content": "내가 꾼 꿈에 대한 내용에 대해서 말해주면 1부터 45까지 의 숫자중에 숫자6개만 추천해줄 수 있어? 그리고 내가 말한 꿈과 추천해준 숫자에 대한 자세한 해석을 과학적이거나 역사적인 내용을 가지고 설명해줘. 그리고 내용에 대한 기준은 한국인 기준이야."
      },
      {
        "role": "assistant",
        "content": ` [{"number": 1, "reason": "????"},{"number": 2, "reason": "????"},{"number": 25, "reason": "????"},{"number": 13, "reason": "????"},{"number": 16, "reason" : "????"},{"number": 11, "reason": "????"}] 이 형태로 반환해줘`
      },
      {
        "role": "user",
        "content": `나는 "${dream}" 내용의 꿈을 꿨어.`
      },
      {
        "role": "system",
        "content": "Assistant는 이제 사용자의 꿈에 따른 로또 번호와 그 재미있고 논리적인 근거를 JSON 형태로 반환해야 합니다. JSON 데이터 이외에 문장은 필요없습니다."
      }
    ]
  });
  res.json( result.choices[0].message.content );
};