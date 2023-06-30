import React from 'react';
import { Navigate } from 'react-router-dom';

const Authentication = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      // بررسی احراز هویت
      const isAuthenticated = localStorage.getItem('token');
      
      if (isAuthenticated) {
        // اگر کاربر احراز هویت شده است، کامپوننت اصلی را بازگردانی کنید
        return <WrappedComponent {...this.props} />;
      } else {
        // در غیر این صورت به صفحه ورود هدایت کنید
        return <Navigate to="/admin" />;
      }
    }
  };
};

export default Authentication;


