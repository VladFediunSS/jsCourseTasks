const scores = {
    programming: 88,
    design: 74,
    jurisprudence: false,
    relational_DB: 92,
    computerGraphics: "submitted",
    patterns: 65,
    philosophy: "transferred",
    network: 81
    };

    for (const property in scores){
        if (typeof scores[property] !== 'number') {
            delete scores[property];

        }
    }

    console.log(scores);
