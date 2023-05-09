// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function completion(req, res) {
  if (req.method === 'POST') {
    const body = req.body;
    const prompt = body.prompt || '';
    console.log(prompt);

    const aiResponse = 'THis is a response for the ai';

    await new Promise((r) => setTimeout(r, 1000));

    res.status(200).json({ result: aiResponse });
  } else {
    return res.status(500).json({ error: { message: 'Invalid API Route' } });
  }
}
