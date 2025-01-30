export class Monitor {
    private _name: string;
    private _email: string;
    private _telephoneNumber: string;

    constructor(nombre: string = '', email: string = '', numeroTelefono: string = '') {
        this._name = nombre || '';
        this._email = email || ''; 
        this._telephoneNumber = numeroTelefono || '';
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get telephoneNumber(): string {
        return this._telephoneNumber;
    }

    set telephoneNumber(value: string) {
        this._telephoneNumber = value;
    }
}
