import { connect, ConnectOptions } from 'mongoose';
const dotenv = require("dotenv");
dotenv.config();

export const dbConnect = () => {
  connect(process.env.MONGO_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions).then(
    () => console.log('connect successfully'),
    (error) => console.log(error)
  );
};
