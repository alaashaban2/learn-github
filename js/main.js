class Addd{
    constructor(...words){
        this.words = words
    }
    print(){
        this.words.forEach(word =>{
            console.log(word)
        })
    }
}

let x = new Addd("hehe","hoho");
x.print();