//1. Import Area

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// 2. Define Area
 function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

// 3. Export Area
export default handler;