import webpack from 'webpack';
import webpackconfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV='production';
/* eslint-disable no-console */
console.log(chalk.blue('Generating Minified Module for production. This will take a moment'));

webpack(webpackconfig).run((err,stats)=>{
    if(err)
    {
        console.log(chalk.red(err));
        return 1;
    }

    const jsonStats = stats.toJson();
    if(jsonStats.hasErrors){
        return jsonStats.errors.map(error=> console.log(chalk.red(error)));
    }
    if(jsonStats.hasWarnings){
        console.log(chalk.yellow('webpack generated the follwoing warnings: '));
        jsonStats.warnings.map(warning=> console.log(chalk.yellow(warning)));
    }

    console.log(`Webpack Stats : ${stats}`);

    console.log(chalk.green(`Your App has been built for production and written to /dist!`));
    return 0;
});