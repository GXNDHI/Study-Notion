const mongoose = require("mongoose");
require("dotenv").config();

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err))

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL) //, {
        
        //useNewUrlParser: true,
        //useUnifiedTopology:true,
    //})
    .then(() => console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    } )
};

//gandhi
//BBEZsN4serVNR3aq
// mongodb+srv://gandhi:BBEZsN4serVNR3aq@cluster0.eqc6a4c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0