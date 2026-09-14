import * as z from 'zod'

// check on inputs before recive it

export const RegisterSchema = z.object({

    firstName: z.string().min(2, { message: 'First Name is required' }),
    lastName: z.string().min(2, { message: 'Last Name is required' }),
    phone: z.string().min(2, { message: 'First Name is required' }).regex(/^(010|011|012|015)\d{8}$/, { message: 'Please enter a vaild phone number' }),
    email: z.string().email({ message: "Please enter a valid email address" }).min(1, { message: 'Email is required' }),
    password: z.string().min(1, { message: 'PassWord is required' }).regex(
        /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/,
        { message: "Password must contain at least one special character" }
    ),
    confirmPassWord: z.string().min(1, { message: 'Confirm Password is required' }),
    image: z.any().refine(file => file?.length > 0, { message: "Please upload an image." }).refine(files => files?.[0]?.size <= 5 * 1024 * 1024, { message: 'Image size must be less than 5 MB.' })

    // لكن
    //  ?.
    //  أحدث وأوضح
    //  وهو الأسلوب الموصى به في 
    // JavaScript
    //  الحديثة.
    // Compare between && and ?
    // ملحوظات جي بي تي بيه



}).refine(same => same.password == same.confirmPassWord, { message: 'Password and Confirm Password must match. ', path: ['confirmPassWord'] })









