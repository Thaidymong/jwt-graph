declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    NODE_ENV: string;
    MYSQL_DEFAULT: string;
    SECRET_KEY: string;
  }
}
