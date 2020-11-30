var btn = document.querySelector('button');
console.log(btn);
btn.addEventListener('click', function () {

    var artyom = new Artyom();
    var audioStop = new Audio('./stop.wav');
    var audioActive = new Audio('./active.wav');
    var startObeyKeyword = 'Hey Ronny';
    artyom.dontObey();
    var topic

    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                executionKeyword: 'jetzt',
                speed: 0.9,
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true,
                obeyKeyword: startObeyKeyword,
                soundex: true,
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    console.log('Is Obeying ' + artyom.isObeying());

    artyom.addCommands({
        indexes: [startObeyKeyword],
        action: function () {
            audioActive.play();
            console.log('Is Obeying ' + artyom.isObeying())
        }
    });


    artyom.addCommands([{
        indexes: ["Wann hat die * offen"],
        smart: true,
        action: function (i, wildcard) {
            topic = wildcard;
            if (wildcard == 'mensa') {
                artyom.say("Die Mensa hat heut ab 11 Ur offen.");
            }
            if (wildcard == 'bibliothek' || wildcard == 'bütt' || wildcard == 'bib') {
                artyom.say('Die Bib hat heute von 7 bis 19 Uhr offen.')
            }
        }
    }]);
    artyom.addCommands([{
        indexes: ['Was gibt es da heute'],
        continuous: false,
        action: function () {
            artyom.sayRandom([
                'Hört sich lecker an.',
                'Heute gibt\'s Extrem gutes Zeug.'
            ])
            artyom.say('Heute gibt es XXL Currywurst');
        }
    }])



    artyom.addCommands({
        indexes: ['Was steht heute an'],
        action: function () {
            artyom.say('Du hast heute eine Veranstaltung und eine Abgabe.', {
                onEnd: function () {
                    artyom.repeatLastSay();
                }
            })
        }
    });

    artyom.addCommands({
        indexes: ['Welche Veranstaltung'],
        action: function () {
            artyom.say('Na Marketing Automation')
        }
    });

    artyom.addCommands({
        indexes: ['Wann hab ich die'],
        action: function () {
            artyom.say('In 23 Minuten. Um 8:30 Uhr.')
        }
    });

    artyom.addCommands({
        indexes: ['Mach mir dafür schon mal alles auf meinem PC auf'],
        action: function () {
            artyom.say('Kein Ding. Mach dir noch einen Kaffee. In der Zeit kümmere ich mich darum.');
            anythingElse();
        }
    });

    artyom.addCommands({
        indexes: ['Nein danke tschüss', 'Nein', 'Ne', 'Nein danke'],
        action: function () {
            bye();
        }
    });

    artyom.addCommands({
        indexes: ['Ja', 'Ja kannst', 'Ja klar'],
        if (topic = 'anythingElse') {
            action: function () {
                whatElse();
            }
        }
    });




    artyom.addCommands({
        indexes: ['Ich will mit Professor Winter alleine reden'],
        action: function () {
            artyom.say('Schreib\' ihm einfach \'ne Mail und mach\' einen Termin mit ihm.')
        }
    });

    function anythingElse() {
        topic = 'anythingElse'
        artyom.sayRandom([
            'Kann ich sonst noch was für dich machen?',
            'Gibts sonst noch was mit dem ich dir helfen kann?',
            'Sonst noch was?'
        ]);
    }



    //################## Welche Abgabe?################
    artyom.addCommands({
        indexes: ['Welche Abgabe'],
        action: function () {
            artyom.say('Na die in Interface Design. Du musst ein VUI Konzepnt machen.')
        }
    });
    artyom.addCommands({
        indexes: ['Okay, danke', 'Danke'],
        action: function () {
            noProblem();
            artyom.say('Soll ich dir alle Infomationen dazu per Mail schicken?')
        }
    });

    function bye() {
        artyom.say('Ciao!');
    }

    function whatElse() {
        artyom.say('Na dann schieß\' los');
    }

    function noProblem() {
        artyom.sayRandom(['Kein Problem. Hab ich gerne germacht'
            'Kein Ding.', 'Kein Ding für ein King.'
        ]);
    }

    artyom.when("NOT_COMMAND_MATCHED", function () {
        artyom.say('Sorry, damit kann ich dir noch nicht helfen.')
    })

    artyom.addCommands({
        indexes: ['Wie war das noch mal', 'Was hast du gerade gesagt'],
        action: function () {
            artyom.repeatLastSay();
        }
    });

    artyom.addCommands({
        indexes: ['stop', 'halt', 'aus'],
        action: function () {
            artyom.shutUp();
            audioStop.play();
            artyom.dontObey();
        }
    });

    if (artyom.isObeying()) {
        setTimeout(function () {
            artyom.when('COMMAND_RECOGNITION_END', function () {

            });
        }, 2500);
    }


    startContinuousArtyom();
});