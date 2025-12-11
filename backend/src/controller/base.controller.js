const Home = (req, res) => {
  res.render('index',{msg:"Helo Mern From Nshm Durgapur"});
};
const About = (req,res)=>{
    res.render('About',{msg:"This is About Page"})
}
const Profile = (req,res)=>{
    res.end(`Hello This is ${req.params.user} age is ${req.params.age} profile`)
}
const PhoneQuery=(req,res)=>{
    if(req.query){
        res.end(`Your Query Value is ${req.query.pno}`)
    }
}
module.exports = { Home,Profile,PhoneQuery,About};
