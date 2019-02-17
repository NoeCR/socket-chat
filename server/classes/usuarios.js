class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };

        this.personas.push(persona);

        return this.personas;
    }

    getPersonaById(id) {
        let persona = this.personas.filter(pers => pers.id === id)[0];
        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasBySala(sala) {
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    borrarPersona(id) {

        let peronsaBorrada = this.getPersonaById(id);
        this.personas = this.personas.filter(pers => pers.id !== id);

        return peronsaBorrada;
    }

}

module.exports = {
    Usuarios
}