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
    }
].map(location => Object.freeze(location))

export function getAllLocations(): readonly Location[] {
    return locations
}

export function getRandomLocation(): Location {
    const index = Math.floor(Math.random() * locations.length)
    return locations[index]
}

export function getRandomRoles(location: Location, number: number) {
    if (location.roles.length < number) {
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
