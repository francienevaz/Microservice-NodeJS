import { Pool } from "pg";

const connectionString = 'postgres://mivuvsdl:xbx4hePxjO5dDky7cSUH_ykcV80DDbBg@motty.db.elephantsql.com/mivuvsdl';

const db = new Pool({connectionString});

export default db;