//1. Import Area

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// 2. Define Area
 function handler(req, res) {
  // function serializations
  // object.method().method(actualArgument)
     res.status(200).json(
      {
        ncatid:`${req.query.ncatid}`,
        area:`${req.query.area}`,
        search:`${req.query.search}`,
        mncatname:`${req.query.mncatname}`,
        search_id:`${req.query.search_id}`,
        abd_btn:`${req.query.abd_btn}`,
        abd_heading:`${req.query.abd_heading}`,
      }
     )
}

// 3. Export Area
export default handler;