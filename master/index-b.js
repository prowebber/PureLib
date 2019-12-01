
// Found on

function test(){
    console.log("Test was run");
}

const library = {
    'test': test(),
};


export default function(name){
    return library.name;
};