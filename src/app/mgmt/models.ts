export type Bio = IDevice | IWhitelist | IEmployee | IGallery | ISample


export interface IDevice {
    id?: number
    name: string
    description?:string
    // relations
    whitelist?: IWhitelist
}

export interface IWhitelist {
    id?: number
    name: string
    description?:string
    // relations
    devices?: IDevice[]
    galleries?: IGallery[]
    employees?: IEmployee[]
}


export interface ISample {
    id?:number,
    name:string,
    description?:string,
    data?:string
    // relations
    employee?: IEmployee
}

export interface IEmployee {
    id?: number,
    name:string,
    description?:string
    // relations
    galleries?: IGallery[]
    samples?: ISample[]
    whitelists?: IWhitelist[]
}

export interface IGallery {
    id?: number,
    name: string,
    description?:string,
    // relations
    employees?: IEmployee[]
    whitelists?: IWhitelist[]
}