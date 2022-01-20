import * as yup from 'yup'

export interface registerInitialValues {
    firstName: string
    lastName: string
    email: string
    password: string
}

export const registerSchema = yup.object({
    firstName: yup
        .string()
        .min(2, 'Short name')
        .max(50, 'Too Long!')
        .required(),
    lastName: yup.string().min(2, 'Short name').max(50, 'Too Long!').required(),
    email: yup.string().email().required(),
    password: yup
        .string()
        .min(8, 'Short password')
        .max(50, 'Too Long!')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,10}$/,
            'The password must contain 1 special character, a number, an upper and lower case letter. Password length from 8 to 50 characters'
        )
        .required(),
})
