const uniqid = require('uniqid');
const cubes = [
    {
        id: '10w3gpg5bd0lior9ck2',
        name: 'Mirror Cube',
        description: "A cool mirror cube",
        imageUrl: 'https://cdn.shopify.com/s/files/1/0270/0342/0758/files/1202977061844295.QAOySrnyE0B5cIfqTxz5_height640_480x480.png?v=1663142818',
        difficultyLevel: 4
    },
    {
        id: '10w3gpg5bd0lior9ck6',
        name: 'Magic Cube',
        description: "A cool Rubik Cube variation",
        imageUrl: 'https://qph.cf2.quoracdn.net/main-qimg-b587408e05f2f33526f9834a17a26a31.webp',
        difficultyLevel: 3
    }
];

exports.getAll = (search, from, to) => {
    let result = cubes.slice()

    if(search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if(to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return result;
}

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    }

    cubes.push(newCube);

    return newCube;
}