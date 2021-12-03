export type Location = {
    readonly name: string,
    readonly roles: readonly Role[]
}

export type Role = {
    name: string,
    agent: boolean
}

const agent: Role = {
    name: 'Agent',
    agent: true
}

function roles(names: string[]): readonly Role[] {
    return Object.freeze(names.map(name => ({
        name,
        agent: false
    })))
}

const locations: Location[] = [
    {
        name: 'Bank',
        roles: roles([
            'Anlageberater:in',
            'Filialleiter:in',
            'Kassierer:in',
            'Kreditberater:in',
            'Kund:in',
            'Räuber:in',
            'Wachperson'
        ])
    },
    {
        name: 'Casino',
        roles: roles([
            'Barkeeper',
            'Betrüger:in',
            'Croupier',
            'Dealer',
            'Türsteher:in',
            'Sicherheitschef:in',
            'Spieler:in'
        ])
    },
    {
        name: 'Militärbasis',
        roles: roles([
            'Deserteur:in',
            'Gefreiter',
            'Kantinenchef:in',
            'Militärarzt / Militärarztin',
            'Oberst',
            'Wachposten',
            'Unteroffizier'
        ])
    },
    {
        name: 'Weltraumstation',
        roles: roles([
            'Arzt / Ärztin',
            'Astronaut:in',
            'Außerirdischer',
            'Bordingenieur:in',
            'IT-Techniker:in',
            'Weltraumtourist:in',
            'Wissenschaftler:in'
        ])
    },
    {
        name: 'Wellness-Tempel',
        roles: roles([
            'Gast',
            'Masseur',
            'Nageldesigner',
            'Friseur',
            'Reinigungskraft',
            'Kosmetiker',
            'Stylist'
        ])
    },
    {
        name: 'Hotel',
        roles: roles([
            'Rezeptionist',
            'Zimmermädchen',
            'Hoteldirektor',
            'Barkeeper',
            'Hotelgast',
            'Page',
            'Portier7'
        ])
    },
    {
        name: 'Werkstatt',
        roles: roles([
            'Empfangsdame',
            'Motorradfahrer',
            'Autofahrer',
            'Servicetechniker',
            'Geschäftsführer',
            'Kfz-Mechaniker',
            'Spengler'
        ])
    },
    {
        name: 'Botschaft',
        roles: roles([
            'Flüchtling',
            'Diplomat',
            'Sicherheitsbeamter',
            'Sekretär',
            'Tourist',
            'Chauffeur',
            'Botschafter'
        ])
    },
    {
        name: 'Firmenfeier',
        roles: roles([
            'Generaldirektor',
            'Großkunde',
            'DJ',
            'Partycrasher',
            'Buchhalter',
            'Sektretärin',
            'Abteilungsleiter'
        ])
    },
    {
        name: 'Polizeistation',
        roles: roles([
            'Gefangener',
            'Ermittler',
            'Pressesprecher',
            'Polizist',
            'Strafverteidiger',
            'Archivar',
            'Kriminalbeamter'
        ])
    },
    {
        name: 'Supermarkt',
        roles: roles([
            'Praktikant',
            'Regalbetreuer',
            'Fleischermeister',
            'Kassierer',
            'Kunde',
            'Filialleiter',
            'Ladendetektiv'
        ])
    },
    {
        name: 'Universität',
        roles: roles([
            'Tutor',
            'Student',
            'Psychologe',
            'Studienberater',
            'Dekan',
            'Professor',
            'Bibliothekar'
        ])
    },
    {
        name: 'Flugzeug',
        roles: roles([
            'Copilot',
            'Blinder Passagier',
            'Passagier erster Klasse',
            'Flugbegleiter',
            'Flugingenieur',
            'Fluggast',
            'Pilot'
        ])
    },
    {
        name: 'Filmstudio',
        roles: roles([
            'Statist',
            'Kameramann',
            'Schaustpieler',
            'Kostümdesigner',
            'Regisseur',
            'Tontechniker',
            'Stuntman'
        ])
    },
    {
        name: 'Polarstation',
        roles: roles([
            'Arzt',
            'Expeditionsleiter',
            'Funker',
            'Hydrologe',
            'Geologe',
            'Meteorologe',
            'Biologe'
        ])
    },
    {
        name: 'Strand',
        roles: roles([
            'Taucher',
            'Surfer',
            'Animateur',
            'Rettungsschwimmer',
            'Strandverkäufer',
            'Urlauber',
            'Dieb'
        ])
    },
    {
        name: 'Theater',
        roles: roles([
            'Theaterdirektor',
            'Garderobier',
            'Zuschauer',
            'Platzanweiser',
            'Schauspieler',
            'Soufleur',
            'Bühnenarbeiter'
        ])
    },
    {
        name: 'U-Boot',
        roles: roles([
            'Koch',
            'Navigationsoffizier',
            'Matrose',
            'Elektriker',
            'Funker',
            'Maschinenarbeiter',
            'Admiral'
        ])
    },
    {
        name: 'Zirkus',
        roles: roles([
            'Hochseilakrobat',
            'Feuerschlucker',
            'Clown',
            'Messerwerfer',
            'Jongleur',
            'Zauberer',
            'Dompteur'
        ])
    },
    {
        name: 'Restaurant',
        roles: roles([
            'Kellner',
            'Sommelier',
            'Restaurantkritiker',
            'Küchenhilfe',
            'Restaurantleiter',
            'Pianist',
            'Gast'
        ])
    },
    {
        name: 'Schule',
        roles: roles([
            'Vertrauenslehrer',
            'Schulwart',
            'Turnlehrer',
            'Schüler',
            'Klassensprecher',
            'Schulinspektor',
            'Schuldirektor'
        ])
    },
    {
        name: 'Piratenschiff',
        roles: roles([
            'Steuermann',
            'Bootsmann',
            'Kapitän',
            'Gefangener',
            'Schiffsjunge',
            'Geschützoffizier',
            'Koch'
        ])
    },
    {
        name: 'Kreuzfahrtschiff',
        roles: roles([
            'Kapitän',
            'Barkeeper',
            'Matrose',
            'Musiker',
            'Steward',
            'Passagier',
            'Reiseleiter'
        ])
    },
    {
        name: 'Krankenhaus',
        roles: roles([
            'Krankenschwester',
            'Assistenzarzt',
            'Pfleger',
            'Patient',
            'Internist',
            'Chirurg',
            'Pathologe'
        ])
    },
    {
        name: 'Dampflokomotive',
        roles: roles([
            'Heizer',
            'Grenzposten',
            'Schaffner',
            'Speisewagenbegleiter',
            'Fahrgast',
            'Lokführer',
            'Schwarzfahrer'
        ])
    },
].sort((a, b) => (a.name > b.name) ? 1 : -1).map(location => Object.freeze(location))

export function getAllLocations(): readonly Location[] {
    return locations
}

export function getRandomLocation(): Location {
    const index = Math.floor(Math.random() * locations.length)
    return locations[index]
}

export function getRandomRoles(location: Location, number: number) {
    if (location.roles.length + 1 < number) {
        throw new Error('The location does not have enough roles.')
    }

    if (number < 3) {
        throw new Error('At least three different roles must be requested.')
    }

    const all = shuffle(location.roles)
    const reduced = all.slice(0, number - 1)
    const withAgent = [...reduced, agent]
    return shuffle(withAgent)
}

function shuffle(array: readonly Role[]): Role[] {
    const copy = [...array]

    for (let index2 = copy.length - 1; index2 > 0; index2--) {
        const newIndex = Math.floor(Math.random() * (index2 + 1));
        [copy[index2], copy[newIndex]] = [copy[newIndex], copy[index2]];
    }

    return copy
}
