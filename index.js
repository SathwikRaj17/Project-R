import express from "express"
import bodyparser from "body-parser"
import { dirname } from "path"
import { fileURLToPath } from "url"
import pg from "pg"

const port=3000;
const pt=dirname(fileURLToPath(import.meta.url));
const app=express();
const db=new pg.Client({
    user:"postgres",
    password:"admin",
    port:5432,
    host:"localhost",
    database:"users"
})
app.use(bodyparser.urlencoded({extended:true}));
