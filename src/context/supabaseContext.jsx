import { createContext, useEffect, useState } from "react";
import { supabase } from "../clientSupabase";
import Swal from 'sweetalert2'

// or via CommonJS

export const AuthContext = createContext();

export const RegisterSupabaseProvider = ({ children }) => {

    // const Swal = require('sweetalert2')
    const [regDataLoading, setRegDataLoading] = useState(false)
    const [logInLoading, setLogInLoading] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    // const Navigate = useNavigate()

    useEffect(
        () => {
            const userData = localStorage.getItem('userData')

            if (userData) {
                setCurrentUser(JSON.parse(userData))
            }


        }
        , []
    )

    const getRegisterData = async (RegisterData) => {
        try {
            setRegDataLoading(true)
            const { data: dataReg, error: failed } = await supabase.auth.signUp(RegisterData)

            if (failed) {

                console.log(failed);

            } else {
                const { firstName, lastName, email, phone, password, image } = RegisterData

                const { data, error } = await supabase.from('EduStudents').insert([
                    {
                        id: dataReg.user.id,
                        firstName,
                        lastName,
                        email,
                        phone,
                        password,
                        image
                    }
                ])
                const idUser = dataReg.user.id
                const { data: userData, error: userErr } = await supabase
                    .from('EduStudents')
                    .select('*')
                    .eq('id', idUser)
                console.log(userData?.[0]);
                if (userErr) {
                    console.log(userErr);
                } else {
                    let userDataFromId = userData?.[0]
                    setCurrentUser(userDataFromId)
                    return userDataFromId
                }


            }
        } catch (error) {
            console.log(error);

        } finally { setRegDataLoading(false) }
    };

    const logInHandle = async (userData) => {

        const { email, password, id } = userData

        try {
            setLogInLoading(true)

            const { data: signIn, error: failed } = await supabase.auth.signInWithPassword({
                email: email,
                password
                // We can summery more but I did this now because i still learning

            })


            const userId = signIn?.user?.id

            const { data: userData, error: errUser } = await supabase
                .from('EduStudents')
                .select('*')
                .eq('id', userId)
            if (errUser) {
                console.log(errUser);

            } else {
                let userDataFromId = userData?.[0]
                setCurrentUser(userDataFromId)
                return userDataFromId
                // فهمتني ريتيرن اكتر لاننا وصلنا للقيمه من غير باراميتر وجوا كذا شرط

            }

            // console.log('succ', signIn);
            if (failed) {
                // Dont forget handling err alert with better way
                alert('Your email/pass is invailed ')
                console.log('fail', failed);
            }
        } catch (error) {
            console.log(error);

        } finally { setLogInLoading(false) }







    }

    const logOut = () => {
        Swal.fire({
            title: "Are you sure you want to log out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log Out!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Logged Out!",
                    text: "You can sign in again anytime",
                    icon: "success",
                    timer: '1200'
                });
                setCurrentUser(null)
                Navigate('/')


            }
        });

    }

    useEffect(
        () => {
            if (currentUser != null) {
                localStorage.setItem('userData', JSON.stringify(currentUser))

            } else {
                localStorage.removeItem('userData')
            }
        }
        , [currentUser]
    )

    return (
        <AuthContext.Provider value={{ getRegisterData, regDataLoading, logInHandle, logInLoading, currentUser, setCurrentUser, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};