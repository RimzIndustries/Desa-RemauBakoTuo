'use client';
import React, { createContext, useState, useEffect, useContext } from 'react';
import { useToast } from "@/components/ui/use-toast";

interface User {
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// In a real app, this would come from a database or API
const adminUsers = [
  {
    email: 'admin@desaspasial.id',
    password: 'password',
    role: 'admin'
  },
  {
    email: 'rimzindustries@gmail.com',
    password: 'rimzindustries@gmail.com',
    role: 'admin'
  },
  {
    email: 'admin@desaremaubakotuo.spasial.net',
    password: 'admin@desaremaubakotuo.spasial.net',
    role: 'admin'
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();
  
  // Check if user is already logged in from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login function
  const login = (email: string, password: string): boolean => {
    const foundUser = adminUsers.find(u => u.email === email && u.password === password);

    if (foundUser) {
      const userData = { email: foundUser.email, role: foundUser.role };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      toast({
        title: "Login Berhasil",
        description: "Selamat datang kembali!",
      });
      return true;
    } else {
      toast({
        title: "Login Gagal",
        description: "Email atau password salah!",
        variant: "destructive",
      });
      return false;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast({
      title: "Logout Berhasil",
      description: "Anda telah keluar dari sistem!",
    });
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
