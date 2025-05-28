// filepath: d:\jsm_mock_interview_platform\src\components\logo-container.tsx
import { Link } from 'react-router-dom';
export const LogoContainer = () => {
  return (
    <Link to="/">
      <img src="/assets/svg/logo.svg" alt="logo" className="min-w-10 min-h-10 object-contain" />
    </Link>
  );
};
