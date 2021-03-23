export interface Lugares {
    nombre: string,
    descripcion: string,
    img: string,
    sector: string,
    lng: number,
    lat: number,
    tipo: string,
    informacion: string,
    _id?: string,
}

export interface Sector {
    nombre: string,
    descripcion: string,
    img: string,
    _id?: string,
}

export interface Rutas {
    descripcion: string,
    _id?: string
}

export interface CoordRuta {
    lng: number,
    lat: number,
    orden: number,
    ruta: string,
    _id?: string,
}

export interface Tipo {
    descripcion: string,
    color: string,
    _id?: string
}

export interface Agenda {
    titulo: string,
    descripcion: string,
    fecha: string,
    lugar: string
}

export interface Redes {
    facebook: string,
    paginaWeb: string,
    instagram: string,
    telefono: string,
    lugar: string,
    _id?: string
}

export interface Descargables {
    descripcion: string,
    link: string,
    _id?: string
}