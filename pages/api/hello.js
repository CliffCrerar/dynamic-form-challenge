// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import formData from './form-definition.json';

export default (req, res) => {
  try {
    res.status(200).json(formData)
  } catch(err){
    res.status(500).send({error: err});
  }
}
