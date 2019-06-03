// CODE here for your Lambda Classes


class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person{
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}

class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubject = attributes.favSubject;
    }

    listsSubjects(){
        this.favSubject.forEach(function(favSubject){
            console.log(favSubject);
        })
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`)
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }
}

class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}

//Creating new instances of each class below

const dan = new Instructor({
    name: 'Dan',
    age: 25,
    location: 'California',
    specialty: 'Front-end',
    favLanguage: 'Javascript',
    catchPhrase: `Don't forget the homies`
});

const josh = new Instructor({
    name: 'Josh',
    age: 28,
    location: 'Utah',
    specialty: 'Back-end',
    favLanguage: 'Javascript',
    catchPhrase: `Tubular`
})

const ray = new Student({
    name: 'Ray',
    age: 26,
    location: 'Massachusetts',
    previousBackground: 'Finance',
    className: 'WebPt7',
    favSubject: [`Html`, `CSS`, `Javascript`]
})

const julie = new Student({
    name: 'Julie',
    age: 28,
    location: 'Rhode Island',
    previousBackground: 'Design',
    className: 'WebPt7',
    favSubject: [`Html`, `CSS`, `Javascript`]
})

const todd = new ProjectManager({
    name: 'Todd',
    age: 30,
    location: 'Washington',
    gradClassName: 'Web6',
    favInstructor: 'Josh'
})

const gabrielle = new ProjectManager({
    name: 'Gabrielle',
    age: 24,
    location: 'Colorado',
    gradClassName: 'Web8',
    favInstructor: 'Dan'
})