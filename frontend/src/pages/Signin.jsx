import { BottomWarning } from "../Components/BottomWarning"
import { Button } from "../Components/Button"
import { Heading } from "../Components/Heading"
import { InputBox } from "../Components/InputBox"
import { SubHeading } from "../Components/SubHeading"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios"

export const Signin = () => {
    const [userName,setUserName]= useState("");
    const [password,setPassword]= useState("");
    const navigate= useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox onChange={
          e=>setUserName(e.target.value)
        } placeholder="harkirat@gmail.com" label={"Email"} />
        <InputBox onChange={
          e=>setPassword(e.target.value)
        } placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={
            async ()=>{
              console.log("hello")
              const response=await axios.post("http://localhost:3000/api/v1/user/signin",{
                username:userName,
                password
              })
              console.log(response)
              localStorage.setItem("token",response.data.token);
              navigate("/dashboard")
          }} label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}