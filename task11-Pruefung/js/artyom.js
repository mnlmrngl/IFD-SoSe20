var artyom = new Artyom();

artyom.fatality();

artyom.initialize({
    executionKeyword: 'jetzt',
    speed: 0.9,
    lang: "de-DE",
    continuous: true,
    listen: true,
    interimResults: true,
    debug: true,
    // obeyKeyword: startObeyKeyword,
    soundex: true,
}).then(function () {
    console.log("Ready!");
    artyom.say('Um die Audiounterstützung zu nutzen, sage in den nächten 5 Sekunden: Audiounterstüzuung')
});

artyom.addCommands({
    indexes: ['Was steht heute an'],
    action: function () {
        context = 'today';
        artyom.say('Du hast heute eine Veranstaltung und eine Abgabe.');

    }
});