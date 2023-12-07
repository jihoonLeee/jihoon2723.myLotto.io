var config = require('dotenv');
var OpenAI = require('openai');

config.config();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

exports.getNumberByEmotion = async (req, res) => {
  const emotions = req.body.emotions; 
  console.log(emotions);
  const result = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        "role": "system",
        "content": "내가 지금 느끼는 기분을 한가지 이상 말해주면 1부터 45까지 의 숫자중에 그 기분에 맞춰서 숫자6개만 추천해줄 수 있어? 근거도 포함해서!"
      },
      {
        "role": "assistant",
        "content": ` [{"number": 1, "reason": "블라블라"},{"number": 2, "reason": "블라블라"},{"number": 25, "reason": "블라블라"},{"number": 13, "reason": "블라블라"},{"number": 16, "reason": "블라블라"},{"number": 11, "reason": "블라블라"}] 이 형태로 반환해줘`
      },
      {
        "role": "user",
        "content": `내기분은 ${emotions.join(", ")} 이야.`
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
        "content": "내가 꾼 내용에 대해서 말해주면 1부터 45까지 의 숫자중에 그 꿈 내용을 해석해서 숫자6개만 추천해줄 수 있어? 각 숫자에 대한 근거도 포함해서!"
      },
      {
        "role": "assistant",
        "content": ` [{"number": 1, "reason": "블라블라"},{"number": 2, "reason": "블라블라"},{"number": 25, "reason": "블라블라"},{"number": 13, "reason": "블라블라"},{"number": 16, "reason": "블라블라"},{"number": 11, "reason": "블라블라"}] 이 형태로 반환해줘`
      },
      {
        "role": "user",
        "content": `나는 '${dream}' 내용의 꿈을 꿨어.`
      },
      {
        "role": "system",
        "content": "Assistant는 이제 사용자의 꿈에 따른 로또 번호와 그 재미있고 논리적인 근거를 JSON 형태로 반환해야 합니다. JSON 데이터 이외에 문장은 필요없습니다."
      }
    ]
  });
  res.json( result.choices[0].message.content );
};