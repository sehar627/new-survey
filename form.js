class Form {

    constructor() {
        this.input = createInput("Name");
        this.email = createInput("email")
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "Lets Do A Survey On Our School Students");
        this.question1 = createElement('h3',  "How many kilometres do you drive your car on a weekday?");
        this.radio = createRadio();
        this.radio.option('Less than 30 kilometres');
        this.radio.option('Less than 30 kilometres');
        this.radio.option('Less than 30 kilometres');
        this.question1 = createElement('h3',  "How many kilometres do you drive your car on a weekday?");
        this.radio = createRadio();
        this.radio.option('Less than 30 kilometres');
        this.radio.option('Less than 30 kilometres');
        this.radio.option('Less than 30 kilometres');
        this.question1 = createElement('h3',  "How many kilometres do you drive your car on a weekday?");
        this.radio = createRadio();
        this.radio.option('Less than 30 kilometres');
        this.radio.option('Less than 30 kilometres');
        this.radio.option('Less than 30 kilometres');
        this.question1 = createElement('h3',  "How many kilometres do you drive your car on a weekday?");
        this.radio = createRadio();
        this.radio.option('Less than 30 kilometres');
        this.radio.option('Less than 30 kilometres');
        this.radio.option('Less than 30 kilometres');
        this.question1 = createElement('h3',  "How many kilometres do you drive your car on a weekday?");
        this.radio = createRadio();
        this.radio.option('Less than 30 kilometres');
        this.radio.option('Less than 30 kilometres');
        this.radio.option('Less than 30 kilometres');
        this.question1 = createElement('h3',  "How many kilometres do you drive your car on a weekday?");
        this.radio = createRadio();
        this.radio.option('Less than 30 kilometres');
        this.radio.option('Less than 30 kilometres');
        this.radio.option('Less than 30 kilometres');
        this.question1 = createElement('h3',  "How many kilometres do you drive your car on a weekday?");
        this.radio = createRadio();
        this.radio.option('Less than 30 kilometres');
        this.radio.option('Less than 30 kilometres');
        this.radio.option('Less than 30 kilometres');
       
    }


    display() {
        this.input.position(670, 255)
        this.email.position(670, 165)
        this.button.position(700, 700)
        this.greeting.position(600, 105)
        this.text.position(600, 5)
        this.question1.position(500, 360)
        this.radio.position(600, 420)
        this.question2.position(500, 450)
        this.radio1.position(600, 510)
        this.question3.position(500, 540)
        this.radio2.position(600, 600)

        this.button.mousePressed(() => {
            User.input = this.input.value();
            User.email = this.email.value();
            peopleCount += 1;
            User.index = peopleCount;
            User.update();
            User.updateCount(peopleCount);
        });

    }
}