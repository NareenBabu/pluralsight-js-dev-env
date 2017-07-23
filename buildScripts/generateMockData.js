/*eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

// generate Json based on schema

const json = JSON.stringify(jsf(schema));


// generate db file
fs.writeFile("./src/api/db.json",json,err=>{
    if(err){
        return console.log(chalk.red(err));
    }
    else{
        console.log(chalk.green("Mock data generated"));
    }

});