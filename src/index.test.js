import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our First Test',()=>{
    it('sholud Pass',()=>{
        expect(true).to.equal(true);
    });
});

describe('index.html',()=>{
    /*it('should say hello',(done)=>{
        const index=fs.readFileSync('./src/index.html','utf-8');
       // for async operations
        jsdom.env(index,function(err,window){
            const h1 =window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal('Hello World!');
            done();
            window.close();
        });*/


        it('should have h1 say users',(done)=>{
        const index=fs.readFileSync('./src/index.html','utf-8');
       // for async operations
        jsdom.env(index,function(err,window){
            const h1 =window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal('Users');
            done();
            window.close();
        });
    });

});