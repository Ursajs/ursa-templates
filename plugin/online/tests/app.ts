import * as path from 'path';
import * as shell from "shelljs";
import Ursa from '@ursajs/core';
import { Router } from '@ursajs/router';

shell.ln('-sf', path.resolve(__dirname, '../src'), path.resolve(__dirname, './plugins/demo'));

const ursa = Ursa.instance({
    Router,
    bodyParser: { multipart: true },
    ROOT: __dirname,
    env: process.argv.indexOf('production') > -1 ? 'production' : 'development',
});

ursa.start(8058);
