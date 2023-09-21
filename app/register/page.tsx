import { RegisterForm } from './form';

export default function RegisterPage() {
  return (
    <div
      style={{
        display: 'flex',
        height: '70vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <RegisterForm />
    </div>
  );
}
