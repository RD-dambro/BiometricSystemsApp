export type Bio = IDevice | IWhitelist

export interface IDevice {
    id?: number
    name: string
    description?:string
    whitelist?: IWhitelist
}

export interface IWhitelist {
    id?: number
    name: string
    description?:string
    devices?: IDevice[]
}
