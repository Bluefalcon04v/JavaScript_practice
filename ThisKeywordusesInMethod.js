// defining "This" use in method

let laptop1 = {                
    brand : 'Asus',
    cpu : 'i9',
    ram : '16 Gb',

    getconfig : function(){      
        console.log(this.cpu); // "this" keyword is in method to refer a particular object (in this case it's laptop1)
    }
}

let laptop2 = {                
    brand : 'Hp',
    cpu : 'i11',
    ram : '32 Gb',
    getconfig : function(){      
        console.log(this.cpu); // "this" keyword is in method to refer a particular object (in this case it's laptop2)
    }
}

laptop1.getconfig()           // "this" keyword will be called according to here
laptop2.getconfig()