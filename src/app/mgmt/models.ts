import { Validators } from "@angular/forms"

export type Bio = IItem | IDevice | IWhitelist | IEmployee | IGallery | ISample

interface IItem {
    id?: number
    name: string
    description?:string
}

export interface IDevice {
    id?: number
    name: string
    description?:string
    // relations
    whitelist?: IWhitelist
}

export const deviceFormTemplate = {
    name: ['', Validators.required],
    description: [''],
    whitelist: null
}
export const deviceRelationLookup = {"whitelist": "whitelists"}

export interface IWhitelist {
    id?: number
    name: string
    description?:string
    // relations
    devices?: IDevice[]
    galleries?: IGallery[]
    employees?: IEmployee[]
}

export const whitelistFormTemplate = {
    name: ['', Validators.required],
    description: [''],
    devices: null,
    galleries: null,
    employees: null,
}
export const whitelistRelationLookup = {
    "employees": "employees",
    "devices": "devices",
    "galleries": "galleries",
}


export interface ISample {
    id?:number,
    name:string,
    description?:string,
    data?:string
    // relations
    employee?: IEmployee
}

export const sampleFormTemplate = {
    name: ['', Validators.required],
    description: [''],
    data: [''],
    employee: null,
}
export const sampleRelationLookup = {
    "employee": "employees",
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

export const employeeFormTemplate = {
    name: ['', Validators.required],
    description: [''],
    whitelists: null,
    samples: null,
    galleries: null,
}
export const employeeRelationLookup = {
    "whitelists": "whitelists",
    "samples": "samples",
    "galleries": "galleries",
}


export interface IGallery {
    id?: number,
    name: string,
    description?:string,
    // relations
    employees?: IEmployee[]
    whitelists?: IWhitelist[]
}

export const galleryFormTemplate = {
    name: ['', Validators.required],
    description: [''],
    whitelists: null,
    employees: null,
}
export const galleryRelationLookup = {
    "whitelists": "whitelists",
    "employees": "employees",
}