import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="register-page">
      <div className="login-card">
        <h1>Login</h1>
        <p className="login-subtitle">Welcome back to NextGen EdTech</p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-group">
            <input
              className="form-input"
              type="email"
              placeholder="Email"
              autoComplete="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email",
                },
              })}
            />

            {errors.email && (
              <small className="error-message">
                ⚠ {errors.email.message}
              </small>
            )}
          </div>

          <div className="form-group">
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />

            {errors.password && (
              <small className="error-message">
                ⚠ {errors.password.message}
              </small>
            )}
          </div>

          <button
            className="register-button"
            type="submit"
            disabled={!isValid}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;