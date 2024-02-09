export interface StepProps{
    icons: string[];
    title: string;
    description: string;
    state: StepState;
}

export enum StepState{
    IkkePåbegynt = 0,
    Aktiv = 1, 
    Fullført = 2,
    Feilet = 10,
}


export enum StepperDirection{
    Vertical,
    Horisontal
}





export interface StepPropsLater{
    icon: string;
    title: string;
    displaySteg: boolean;
    state: StepState;
    displayState: boolean;
    description: string;
    displayDescription: boolean;
    direction: StepperDirection;
}