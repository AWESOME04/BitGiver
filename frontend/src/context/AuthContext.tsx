import { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
  address: string | null;
  setAddress: (address: string | null) => void;
  balance: string | null;
  setBalance: (balance: string | null) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const address = localStorage.getItem('walletAddress');
    const balance = localStorage.getItem('walletBalance');
    if (address) setAddress(address);
    if (balance) setBalance(balance);
    setIsLoggedIn(!!token);
  }, []);

  const login = (token: string) => {
    localStorage.setItem('token', token);
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('walletAddress');
    localStorage.removeItem('walletBalance');
    setIsLoggedIn(false);
    setAddress(null);
    setBalance(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, address, setAddress, balance, setBalance }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
