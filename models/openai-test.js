import { config } from 'dotenv';
import OpenAI from "openai";
config();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const emotions = ["기쁨", "슬픔", "분노"]; // 사용자의 감정을 가정

  const result = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "내가 지금 느끼는 기분을 한가지 이상 말해주면 1부터 45까지 의 숫자중에 그 기분에 맞춰서 숫자6개만 추천해줄 수 있어? 근거도 포함해서!"
      },
      {
        role: "user",
        content: `내기분은 ${emotions.join(", ")} 이야.  number에 추천숫자를 넣고, reason에 message를 넣어서 JSON 형식으로 알려줘`
      },
    ]
  });

  console.log(result.choices[0].message.content);
}

main();