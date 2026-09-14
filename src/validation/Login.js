import * as z from 'zod'

// check on inputs before recive it

export const LoginSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address" }).min(1, { message: 'Email is required' }),
    password: z.string().min(1, { message: 'PassWord is required' }).regex(
        /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/,
        { message: "Password must contain at least one special character" }
    )

    // لكن
    //  ?.
    //  أحدث وأوضح
    //  وهو الأسلوب الموصى به في 
    // JavaScript
    //  الحديثة.
    // Compare between && and ?
    // ملحوظات جي بي تي بيه



})






