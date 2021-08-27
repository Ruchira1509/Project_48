class Question{
    constructor(){
        // element 
        // createRadio()
        //https://p5js.org/reference/#/p5/createRadio
        this.radio = createRadio();
    }

    display (){
        this.radio.option(1, 'answer1');
        this.radio.option(2, 'answer2');
        this.radio.option(3, 'answer3');
        this.radio.style('width', '30px');
        textAlign(CENTER);

        let val = this.radio.value();
        if (val === question1Answer) {
        fill("red");
        text('Awesome! You have got another 30 sec to reach your destination', width / 2, height / 2);
        }

    }

}

 // const question1Answer = "correctAnswer1" // access code in treasure hunt.