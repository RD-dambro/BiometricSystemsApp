export interface Item {
    name: string
}

export interface IDevice {
    id?: number
    name: string
    description?:string
    // whitelist?: Whitelist
}

export class Device implements IDevice{
    name: string
    description: string
    // whitelist: Whitelist
    constructor(id?:number, name?:string, description?:string){
        this.name = name? name: ''
        this.description = description? description: ''
        // this.whitelist = whitelist? whitelist: undefined
    }
}

export interface ISample {
    id?:number,
    name:string,
    description?:string,
    data?:string
}

export class Sample implements ISample{
    name: string
    description:string
    data: string
    constructor(id?:number, name?:string, data?:string, description?:string){
        this.name = name? name: ''
        this.data = data? data: ''
        this.description = description? description: ''
    }
}

export interface IEmployee {
    id?: number,
    name:string,
    description?:string
}

export class Employee implements IEmployee{
    name: string
    description:string
    constructor(id?:number, name?:string, description?:string){
        this.name = name? name: ''
        this.description = description? description: ''
    }
}

export interface IGallery {
    id?: number,
    name: string,
    description?:string,
}

export class Gallery implements IGallery{
    name: string
    description:string
    constructor(id?:number, name?:string, description?:string){
        this.name = name? name: ''
        this.description = description? description: ''
    }
}

export interface IWhitelist {
    id?: number,
    name: string,
    description?:string
}
export class Whitelist implements IWhitelist{
    name: string
    description:string
    constructor(id?:number, name?:string, description?:string){
        this.name = name? name: ''
        this.description = description? description: ''
    }
}
export type Bio = IDevice | ISample | IEmployee | IWhitelist | Item
  