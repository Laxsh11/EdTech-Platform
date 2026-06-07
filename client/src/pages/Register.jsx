import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const passwordStrength = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ].filter(Boolean).length;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h1>Create Account</h1>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-group">
            <input
              className="form-input"
              type="text"
              placeholder="Full Name"
              {...register("name", {
                required: "Name is required",
              })}
            />

            {errors.name && (
              <small className="error-message">
                ⚠ {errors.name.message}
              </small>
            )}
          </div>

          <div className="form-group">
            <input
              className="form-input"
              type="email"
              placeholder="Email"
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
              {...register("password", {
                required: "Password is required",
                validate: {
                  minLength: (value) =>
                    value.length >= 8 ||
                    "Password must be at least 8 characters",
                  uppercase: (value) =>
                    /[A-Z]/.test(value) ||
                    "Password must contain one uppercase letter",
                  number: (value) =>
                    /[0-9]/.test(value) ||
                    "Password must contain one number",
                  special: (value) =>
                    /[^A-Za-z0-9]/.test(value) ||
                    "Password must contain one special character",
                },
              })}
            />

            <div className="password-meter">
              <div
                className="password-meter-fill"
                style={{
                  width: `${passwordStrength * 25}%`,
                }}
              ></div>
            </div>

            <small className="password-hint">
              Strength:{" "}
              {
                ["Very weak", "Weak", "Good", "Strong", "Excellent"][
                  passwordStrength
                ]
              }
            </small>

            {errors.password && (
              <small className="error-message">
                ⚠ {errors.password.message}
              </small>
            )}
          </div>

          <div className="form-group">
            <input
              className="form-input"
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />

            {confirmPassword &&
              (confirmPassword === password ? (
                <small className="success-message">
                  ✓ Passwords match
                </small>
              ) : (
                <small className="error-message">
                  ⚠ Passwords do not match
                </small>
              ))}
          </div>

          <button
            className="register-button"
            type="submit"
            disabled={!isValid}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;