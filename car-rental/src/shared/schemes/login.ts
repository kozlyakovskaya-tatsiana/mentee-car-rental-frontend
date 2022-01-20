import * as yup from 'yup'

export interface loginInitialValues {
    email: string
    password: string
}

export const loginSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
})
