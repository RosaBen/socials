import { useForm } from "react"
export default function AuthForm (){
  const {register, formState: { errors }} = useForm();
  return (
      <form>
      <label htmlFor="username">Username</label>
      <input 
      id='username'
      type="text"
      name="username"
      {
        ...register('username',{
          required: true,
          maxLength: 20,
          minLength: 3,
          pattern: /^[A-Za-z]+$/i
        })
      }
      />
      {errors?.username?.type === 'required' && <p role="alert">This field is required</p>}
      {errors?.username?.type === 'maxLength' && <p role="alert">Username cannot exceed 20 characters</p>}
      {errors?.username?.type === 'minLength' && <p role="alert">Username must have at least 3 characters</p>}
      {errors?.username?.type === 'pattern' && <p role="alert">Alphabetical characters only</p>}
      <label htmlFor="email">Email</label>
      <input 
      id='email'
      type="email"
      name="email"
      placeholder="example@mail.com"
      aria-invalid={errors.email ? "true" : "false"}
      {
        ...register('email',{
          required: true,
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format",
          },

        })
      }
      />
      {errors.email && <p role="alert">{errors.email.message}</p>}
      <label htmlFor="password">Password</label>
      <input 
      type="password" 
      name="password" 
      id="password" 
      aria-invalid={errors.password ? "true" : "false"}
      {
        ...register('password',{
          required: true,
          minLength:{
            value: 6,
            message: 'min lengthis 6'
          }
        })
      }
      />
      {errors.password && <p role="alert">{errors.password.message}</p>}

    </form>
  )
}