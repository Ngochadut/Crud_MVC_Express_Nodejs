const mongoose =  require('mongoose');


const mongo_url = process.env.MONGO_URL;

mongoose.connect(mongo_url,
    { useNewUrlParser: true,
      useUnifiedTopology: true},
    ()=>{
    console.log('Connected successly')
})

// mongoose.Promise = global.Promise;

module.exports = mongoose;