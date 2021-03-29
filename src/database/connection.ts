import { createConnection } from "typeorm";

const connection = createConnection().then(() => 
  console.log('Connected with database')
);

export default connection;