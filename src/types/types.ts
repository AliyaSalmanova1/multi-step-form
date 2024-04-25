


export type PlanType = 'arcade' | 'advanced' | 'pro';

export interface PlanInfoType {
    plan: PlanType;
    monthYear: boolean;
};

export interface AddOnsType {
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
}

export interface PersonalInfoType {
    name: string,
    email: string,
    phone: string

};
