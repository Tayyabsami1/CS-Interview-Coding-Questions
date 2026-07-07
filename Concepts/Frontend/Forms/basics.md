## Basic Mental model of Forms

- Store what user typed
- Validate it
- Show Errors

### Why Use a Library

- Without library we will have to manage each state using useState

### Popular Libraries

- Formik and yup for validations
- React Hook Form with Zod

### Formik and Yup Example with ShadCN as Deisgn System

#### All 3 Files are availiable in the folder to review

### What Formik does in the login-form:

- Holds form state (email, password) in React context
- Runs Yup validation via loginSchema on every change (validateOnChange)
- On submit, calls handleSubmit → your Logic

```
return (
  <Formik<LoginFormValues>
    initialValues={{ email: "", password: "" }}
    validationSchema={loginSchema}
    validateOnChange
    validateOnBlur={false}
    validateOnMount={false}
    onSubmit={handleSubmit}
  >
    {() => (
      <Form className="flex flex-col gap-6 mt-4">
        <FormikInput
          label="Email"
          name="email"
          required
          type="email"
          placeholder="example@email.com"
        />

        <FormikInput
          label="Password"
          name="password"
          required
          type="password"
          placeholder="*********"
          labelAction={...}
        />

        <Button type="submit" loading={isLoading}>
          Login
        </Button>
      </Form>
    )}
  </Formik>
);
```

### Layer 2 Formik Input

- FormikInput is not a shadcn component. It is your custom adapter that:
  - Subscribes to a field via useField(name)
  - Renders your shadcn-style Field layout (label, error, helper text)
  - Passes Formik bindings into the base Input

```
const [field, meta, helpers] = useField(props.name);
const [showPassword, setShowPassword] = useState(false);
const isPassword = type === "password";
const showError = meta.touched && meta.error;
const hasError = Boolean(showError);
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  field.onChange(e);
  helpers.setTouched(true);
};
```

### React Hook Form with Zod
