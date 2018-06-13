const fs = require('fs');
const sass = require('npm-sass');

function write( err, result ){
    if( err ){
        console.log(err);
        return;
    }

    if( result && result.css ){

        console.log( result );

        console.log( result.css.toString() );
    }
}

sass('./src/main.scss', write );
