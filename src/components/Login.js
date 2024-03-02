import { useForm } from "react-hook-form";
import { useRef } from "react";

export default function Login()
{
    //1 . using useRef()
    // let passRef = useRef();
    // const user = {
    //     login:"",
    //     password:""
    // }
    // //2 . using onChange event
    // const emailChange= (e)=>{
    //     user.login = e.target.value;
    //     //console.log(e.target.value);
    // }
    // const submit = (e) =>{
    //     e.preventDefault();
    //     user.password = passRef.current.value;
    //     console.log(`Login data : `, user)
    // }
    //3. using useForm React Hook
    const {
        register,//to attrack changes of form inputs
        handleSubmit,//onSubmit event handler
        formState: { errors },//add validadors
      } = useForm();  

    const onSubmit = (user) =>{
        console.log(`Login data : `, user)
    }

    return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} >
            <div>
                <label>Email</label>
                {/* <input onChange={emailChange} type="text" name="email" /> */}
                <input {...register("email")} type="text" name="email" />
            </div>
            <div>
                <label>Password</label>
                {/* <input ref={passRef} type="password" name="password" />   */}
                <input {...register("password")} type="password" name="password" />  
            </div>
            <div>
                <label>Bonus</label>
                {/* <input ref={passRef} type="password" name="password" />   */}
                <input {...register("bonus")} type="number" name="bonus" />  
            </div>
            <div>
                <label></label>
                <button  type="submit">Login</button>
            </div>
        </form>
    </div>
    



    );
}