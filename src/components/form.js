import React from "react";
import { useForm } from "react-hook-form";
export default function Form(){
    const{
        register,
        handleSubmit,
        formState:{errors},
    }=useForm();
    
    return(
    
           <form onSubmit={handleSubmit(onsubmit)}>
               <input placeholder="first name"{...register('FirstName', {required: true, pattern: /^[A-Za-zא-ת]+$/i})}/><br/> 
               {errors.FirstName&& <p>errors.FirstName</p>}
               <input  placeholder="last name"{...register('LastName', {required: true})}/><br/>
               {errors.LastName && <p>errors.LastName</p>}
               <input placeholder="adress"{...register('Adress', {required: true})}/><br/>
               {errors.Adress && <p>errors.Adress</p>}
               <input placeholder="age" type="number" {...register("age", {required: true,min: 18, max: 100})}/>
               {errors.Age && <p>errors.Age</p>}
               <select {...register('migzar')}>
                   <option >choose migzar</option>
                   <option value="religious">religious</option>
                   <option value="secular">secular</option>
                   <option value="nothing">nothing</option>
               </select>
               {errors.Migzar && <p>errors.Migzar</p>}
               <input type="submit"/>
           </form>
    )

    }