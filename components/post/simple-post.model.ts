export type SimplePost = {
    id: string;
    name: string;
    simpleAbout: string;
    about: string;
    type: AnimalType;
    user: string;
    userType: UserType;
    userImagePath: string;
    imagesPaths: string[];
}

function getUserTypeDescription(type: UserType): string {
    return UserType[type] || 'Descrição não disponível';
}

export enum UserType {
    FISICA = 'Pessoa Física',
    JURIDICA = 'Pessoa Jurídica',
    ONG = 'O.N.G.'
}

export enum AnimalType {
    DOG = 'dog',
    CAT = 'cat',
    BIRD = 'bird',
    FISH = 'fish',
    OTHER = 'other'
}

export function getAnimalById(id: string): SimplePost {
    if (id) {
        return getAllAnimals().find((animal) => animal.id === id)!;
    } else {
        throw new Error("Id is required")
    }
}

export function getAllAnimals(): SimplePost[] {
    let animals: SimplePost[] = [];
    animals.push({
        id: "3",
        name: "Rex",
        simpleAbout: "Animal cantador, parceiro, aprende facil",
        type: AnimalType.BIRD,
        about: "Animal brincalhao, aprende facil, ja vacinado e castrado, pelo que vi um animal adestrado e que aprende muito facil",
        user: "Alfredo Silva",
        userType: UserType.FISICA,
        userImagePath: 'https://images.pexels.com/photos/30274126/pexels-photo-30274126.jpeg?auto=compress&cs=tinysrgb&w=400',
        imagesPaths: ['https://images.pexels.com/photos/7154562/pexels-photo-7154562.jpeg?auto=compress&cs=tinysrgb&w=400', 'https://images.pexels.com/photos/7154566/pexels-photo-7154566.jpeg?auto=compress&cs=tinysrgb&w=400', 'https://images.pexels.com/photos/7154559/pexels-photo-7154559.jpeg?auto=compress&cs=tinysrgb&w=400']
    })
    animals.push({
        id: "4",
        name: "Max",
        simpleAbout: "Cachorro leal, ótimo para companhia",
        type: AnimalType.DOG,
        about: "Max é um cachorro amigável e leal. Excelente para companhia e ótimo com crianças. Já foi vacinado e adora passeios ao ar livre.",
        user: "Pet shop Patinhas",
        userType: UserType.JURIDICA,
        userImagePath: 'https://images.pexels.com/photos/3294248/pexels-photo-3294248.jpeg?auto=compress&cs=tinysrgb&w=400',
        imagesPaths: ['https://images.pexels.com/photos/2853129/pexels-photo-2853129.jpeg?auto=compress&cs=tinysrgb&w=400', 'https://images.pexels.com/photos/2853422/pexels-photo-2853422.jpeg?auto=compress&cs=tinysrgb&w=400', 'https://images.pexels.com/photos/2853130/pexels-photo-2853130.jpeg?auto=compress&cs=tinysrgb&w=400']
    });

    animals.push({
        id: "5",
        name: "Luna",
        simpleAbout: "Gata independente e carinhosa",
        type: AnimalType.CAT,
        about: "Luna é uma gata independente, mas muito carinhosa. Ela já foi castrada e vacinada. Gosta de explorar e de cochilos longos ao sol.",
        user: "Gabriela Fernandes",
        userType: UserType.FISICA,
        userImagePath: 'https://images.pexels.com/photos/30231788/pexels-photo-30231788/free-photo-of-retrato-de-uma-mulher-elegantemente-estilizado.jpeg?auto=compress&cs=tinysrgb&w=400',
        imagesPaths: ['https://images.pexels.com/photos/1826109/pexels-photo-1826109.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', 'https://images.pexels.com/photos/2538311/pexels-photo-2538311.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', 'https://images.pexels.com/photos/406629/pexels-photo-406629.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load']
    });

    animals.push({
        id: "6",
        name: "Blue",
        simpleAbout: "Pássaro exótico, gosta de cantar",
        type: AnimalType.BIRD,
        about: "Blue é um pássaro exótico que adora cantar e entreter. Muito sociável e aprende truques rapidamente.",
        user: "Prol do bem",
        userType: UserType.ONG,
        userImagePath: 'https://images.pexels.com/photos/6646947/pexels-photo-6646947.jpeg?auto=compress&cs=tinysrgb&w=400',
        imagesPaths: ['https://images.pexels.com/photos/1004517/pexels-photo-1004517.jpeg?auto=compress&cs=tinysrgb&w=400', 'https://images.pexels.com/photos/1427447/pexels-photo-1427447.jpeg?auto=compress&cs=tinysrgb&w=400', 'https://images.pexels.com/photos/1165082/pexels-photo-1165082.jpeg?auto=compress&cs=tinysrgb&w=400']
    });

    animals.push({
        id: "7",
        name: "Charlie",
        simpleAbout: "Cachorro brincalhão e cheio de energia",
        type: AnimalType.DOG,
        about: "Charlie é um cachorro cheio de energia, ideal para quem gosta de aventuras. Adora correr e brincar com outros cães.",
        user: "Abrigo dos animais",
        userType: UserType.ONG,
        userImagePath: 'https://images.pexels.com/photos/39627/flamingo-valentine-heart-valentine-s-day-39627.jpeg?auto=compress&cs=tinysrgb&w=400',
        imagesPaths: ['https://images.pexels.com/photos/935918/pexels-photo-935918.jpeg?auto=compress&cs=tinysrgb&w=400', 'https://images.pexels.com/photos/26563972/pexels-photo-26563972/free-photo-of-cachorro-cao-animal-animal-de-estimacao.jpeg?auto=compress&cs=tinysrgb&w=400', 'https://images.pexels.com/photos/3113766/pexels-photo-3113766.jpeg?auto=compress&cs=tinysrgb&w=400']
    });

    animals.push({
        id: "8",
        name: "Mimi",
        simpleAbout: "Gata curiosa e esperta",
        type: AnimalType.CAT,
        about: "Mimi é uma gata extremamente curiosa e inteligente. Sempre encontra novas maneiras de se divertir e é muito afetuosa com os donos.",
        user: "Abrigo dos animais",
        userType: UserType.ONG,
        userImagePath: 'https://images.pexels.com/photos/39627/flamingo-valentine-heart-valentine-s-day-39627.jpeg?auto=compress&cs=tinysrgb&w=400',
        imagesPaths: ['https://images.pexels.com/photos/357141/pexels-photo-357141.jpeg?auto=compress&cs=tinysrgb&w=400', 'https://images.pexels.com/photos/952581/pexels-photo-952581.jpeg?auto=compress&cs=tinysrgb&w=400', 'https://images.pexels.com/photos/17277318/pexels-photo-17277318/free-photo-of-caminhando-andando-animal-bicho.jpeg?auto=compress&cs=tinysrgb&w=400']
    });

    animals.push({
        id: "9",
        name: "Sunny",
        simpleAbout: "Cachorro alegre e divertido",
        type: AnimalType.DOG,
        about: "Sunny é um cachorro alegre com uma vibe vibrante. Ele adora latir pela manhã e se socializar com outros cachorros.",
        user: "Abrigo dos animais",
        userType: UserType.ONG,
        userImagePath: 'https://images.pexels.com/photos/39627/flamingo-valentine-heart-valentine-s-day-39627.jpeg?auto=compress&cs=tinysrgb&w=400',
        imagesPaths: ['https://images.pexels.com/photos/15356247/pexels-photo-15356247/free-photo-of-natureza-relaxamento-descanso-campo.jpeg?auto=compress&cs=tinysrgb&w=400', 'https://images.pexels.com/photos/15356250/pexels-photo-15356250/free-photo-of-campo-area-animal-bicho.jpeg?auto=compress&cs=tinysrgb&w=400', 'https://images.pexels.com/photos/30269072/pexels-photo-30269072/free-photo-of-dachshund-dormindo-pacificamente-sob-a-luz-do-sol-da-manha.jpeg?auto=compress&cs=tinysrgb&w=400']
    });
    return animals;
}