import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';


export default function AuthForm (){
  const {register,handleSubmit, formState: { errors }} = useForm();
  const navigate = useNavigate();
  const onSubmit = async(data) => {
    try {
      const response = await fetch('http://localhost:1337/api/auth/local/register',{
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      
      if (response.ok) {
        const result = await response.json();
        const token = result.jwt;
        
        Cookies.set('token', token, { expires: 7 }); 
        navigate("/");
      } else {
        const error = await response.json();
        console.error('Erreur d\'inscription:', error);
        alert('Erreur lors de l\'inscription: ' + (error.error?.message || 'Erreur inconnue'));
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
      alert('Erreur de connexion au serveur');
    }
  }
  return (
      <form onSubmit={handleSubmit(onSubmit)}>
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
      {errors?.username?.type === 'required' && <span role="alert" className="form-alert">This field is required</span>}
      {errors?.username?.type === 'maxLength' && <span role="alert" className="form-alert">Username cannot exceed 20 characters</span>}
      {errors?.username?.type === 'minLength' && <span role="alert" className="form-alert">Username must have at least 3 characters</span>}
      {errors?.username?.type === 'pattern' && <span role="alert" className="form-alert">Alphabetical characters only</span>}
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
      {errors.email && <span role="alert" className="form-alert">{errors.email.message}</span>}
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
      {errors.password && <span role="alert" className="form-alert">{errors.password.message}</span>}
      <button type="submit">SUBMIT</button>
    </form>
  )
}